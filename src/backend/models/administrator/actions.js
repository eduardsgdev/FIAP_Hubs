const { selectRow, updateRow, insertRow, selectConditions, selectInnerJoin } = require('../utilQuerys.js');

const searchUser = (login) => {
    return selectRow('users', 'id, name, login, password, nivel, status', 'login', login).then(response => {
        return response;
    })
}

const listOngs = (ong, ongName) => {
    if (ongName == undefined || ongName == null) {
        ongName = '';
    }

    return selectConditions('spaces', '*', ong, 'name', `%${ongName}%`, 'id', 'asc');
}

const ongUpdateStatus = (newStatus, ong) => {
    updateRow('spaces', { status: newStatus }, 'id',  ong);
}

const selectOngById = (id) => {
    return selectRow('spaces', '*', 'id', id);
}

const insertOng = (ong) => {
    insertRow('spaces', ong);
}

const updateOng = (data) => {
    updateRow('spaces', { 
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
        capacity: data.capacity,
        status: data.status,
        type: data.type,
        prize: data.prize,
        contact: data.contact,
        description: data.description,
        image: data.image
    }, 'id', data.id);
}

const getAllReserves = (status) => {
    return selectInnerJoin('spaces_reserved', '*', 'spaces', '*', { status: status }, 'spaces.name' , '%%', 'start_reservation', 'asc');
}

module.exports = {
    searchUser,
    listOngs,
    ongUpdateStatus,
    selectOngById,
    insertOng,
    updateOng,
    getAllReserves
}