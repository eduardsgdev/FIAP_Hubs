const { createWebToken, decodedWebToken } = require('../security/token.js');
const { comparePassword } = require('../security/hash.js');
const { searchUser, listOngs, ongUpdateStatus, selectOngById, insertOng, updateOng, getAllReserves } = require('../models/administrator/actions.js');
const { insertLog, updateLastLogin } = require('../models/utilFunctions.js');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const login = async (request, response) => {
    //request example = { login: '11111111111', password: 'xxxxx' }
    const data = request.body;
    
    if (data.login == '' || data.login == undefined || data.login == null) {
        return response.status(400).json({ message: 'Login é um campo obrigatório.'});
    }
    
    if (data.password == '' || data.password == undefined || data.password == null) {
        return response.status(400).json({ message: 'Password é um campo obrigatório.'});
    }
    
    const selectUser = await searchUser(data.login);

    if (selectUser.length == 1) {
        const user = selectUser[0];
        if (data.login == user.login && await comparePassword(data.password, user.password) == true) {
            if (user.nivel == 2) {
                if (user.status != 1) {
                    return response.status(400).json({ message: 'Usuário não está ativo!'});
                }
                updateLastLogin(user.id);
                
                insertLog('logs_admin', user.id, 'LOGINSUCCESSFULL', { login: user.login });

                const authorization = createWebToken(user.id, user.name, user.login, user.nivel);

                return response.status(200).json({ message: 'Logado com sucesso.', authorization});

            } else {
                return response.status(401).json({ message: 'Nível não permitido!'});
            }
        } else {
            return response.status(400).json({ message: 'Login ou Senha incorretos!'});
        }
    } else {
        return response.status(400).json({ message: 'Usuário não encontrado.'});
    }
}

const getOngs = async (request, response) => {
    //request example = { name: 'Quadra', status: '1', type: 'Salão de Festas' }
    const data = {};

    if (request.body.status != 'all') {
        data.status = request.body.status;
    }

    if (request.body.type != 'all') {
        data.type = request.body.type;
    }

    if (request.body.city != '') {
        data.city = request.body.city;
    }

    const name = request.body.name;

    const ongs = await listOngs(data, name);
    
    if (ongs.length == 0) {
        return response.status(400).json({ message: 'Nenhuma ONG encontrada.'});
    }

    return response.status(200).json({ message: 'Lista de ONGs', ongs: ongs });

}

const getOng = async (request, response) => {
    //request example = .../administrator/getOng?id=1
    const data = request.query.id;
    
    if (!data) {
        return response.status(400).json({ message: 'É necessário enviar um id.'});
    }
    
    const selectOng = await selectOngById(data);
    const ong = selectOng[0];

    if (!ong) {
        return response.status(400).json({ message: 'Nenhum dado foi encontrado.'});
    }

    return response.status(200).json({ message: '', ong: ong });
}

const addOng = async (request, response) => {
    /*request example = {
        name: 'Lugar Diferente',
        address: 'Av. Dom Pedro, 131',
        city: 'São Paulo',
        state: 'São Paulo',
        zip_code: '01310930',
        capacity: 20,
        status: 1,
        type: 'Área de Lazer',
        prize: 250,
        contact: 'ong_testHubs@gmail.com',
        description: 'Um lugar diferente',
        image: {
            0: 'https://url.example1',
            1: 'https://url.example2'
        }
    }*/

    const jwt = request.headers['authorization'];
    const decodedToken = await decodedWebToken(jwt);   
    const data = {};

    const ongArr = ['name', 'address', 'city', 'state', 'zip_code', 'capacity', 'status', 'type', 'image', 'prize', 'contact', 'description'];
    for (const item of ongArr) {
        if (request.body[item] == '' || request.body[item] == undefined || request.body[item] == null) {
            return response.status(400).json({ message: 'Os campos precisam está devidamente setados.' });
        }

        data[item] = request.body[item];
    }

    insertLog('logs_admin', decodedToken.userData.id, 'ADDONG', data);

    insertOng(data);

    return response.status(201).json({ message: 'Adicionado com sucesso.' });

}

const updateStatus = async (request, response) => {
    //request example = { id: 1, status: 1 }
    const jwt = request.headers['authorization'];
    const decodedToken = await decodedWebToken(jwt);
    const data = request.body;

    if (data.status < 0 || data.status > 1) {
        return response.status(400).json({ message: 'Status não permitido!' });
    } else if (!data.id) {
        return response.status(400).json({ message: 'É necessário enviar um id.'});
    }
    
    const selectOng = await selectOngById(data.id);
    const ong = selectOng[0];

    if (!ong) {
        return response.status(400).json({ message: 'Nenhum dado foi encontrado.' });
    } else if (ong && ong.status == data.status) {
        return response.status(400).json({ message: 'Nenhum dado foi alterado.' });
    }

    ongUpdateStatus(data.status, data.id);

    insertLog('logs_admin', decodedToken.userData.id, 'UPDATESTATUS', data);

    return response.status(200).json({ message: 'Status atualizado com sucesso.' });
    
}

const editOng = async (request, response) => {
    /*request example = {
        id: '3',
        name: 'Lugar Diferente',
        address: 'Av. Dom Pedro, 131',
        city: 'São Paulo',
        state: 'São Paulo',
        zip_code: '01310930',
        capacity: 20,
        status: 1,
        type: 'Área de Lazer',
        prize: 299,
        contact: 'teste@gmail.teste.com',
        description: 'Um lugar muito diferente'
        image: {
            0: 'https://url.example1',
            1: 'https://url.example2'
        }
    }*/
    const jwt = request.headers['authorization'];
    const decodedToken = await decodedWebToken(jwt);
    const data = request.body;

    const ongArr = ['name', 'address', 'city', 'state', 'zip_code', 'capacity', 'status', 'type', 'image', 'prize', 'contact', 'description'];
    for (const item of ongArr) {
        if (request.body[item] == '' || request.body[item] == undefined || request.body[item] == null) {
            return response.status(400).json({ message: 'Os campos precisam está devidamente setados.' });
        }
    }

    const selectOng = await selectOngById(data.id);
    const ong = selectOng[0];

    if (!ong) {
        return response.status(400).json({ message: 'ONG não encontrada!' });
    }

    insertLog('logs_admin', decodedToken.userData.id, 'EDITONG', data);

    updateOng(data);

    return response.status(200).json({ message: 'Dados editado com sucesso.' });
}

const getReserves = async (request, response) => {
    //request example = { status: 1, export: 'csv' } 1: Active, 0: Inactives
    const jwt = request.headers['authorization'];
    const decodedToken = await decodedWebToken(jwt);
    const data = request.body;

    if (data.status < 0 || data.status > 1) {
        return response.status(400).json({ message: 'Status enviado não é permitido.' });
    } else if (!data.status) {
        return response.status(400).json({ message: 'Enviar o status é necessário!'});
    }

    const selectReserves = await getAllReserves(data.status);
    if (selectReserves.length == 0) {
        return response.status(400).json({ message: 'Nenhum voluntariado encontrado'});
    }

    let currentDate = new Date().getTime();

    if (data.export == 'csv') {
        const csvWriter = createCsvWriter({
            path: `../../report${currentDate}.csv`,
            header: [
                { id: 'id', title: 'ID' },
                { id: 'start_reservation', title: 'Data Inicio' },
                { id: 'final_reservation', title: 'Data Final' },
                { id: 'reserved_hours', title: 'Horas Reservadas' },
                { id: 'user_id', title: 'ID Usuário' },
                { id: 'space_id', title: 'ID Espaço' },
                { id: 'total_prize', title: 'Preço' },
                { id: 'responsible_contact', title: 'Contato' },
                { id: 'status', title: 'Status' }
            ]
        });
         
        csvWriter.writeRecords(selectReserves)
            .then(() => {
                //console.log(...Done)
            });
            
        return response.status(201).json({ message: `O arquivo report${currentDate}.csv foi exportado com sucesso.`});
    }

    return response.status(200).json({ message: '', reserves: selectReserves });

}

module.exports = {
    login,
    getOngs,
    getOng,
    addOng,
    updateStatus,
    editOng,
    getReserves
}