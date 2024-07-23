const { selectRow, updateRow, insertRow, selectConditions, selectInnerJoin } = require('../utilQuerys.js');

const searchUser = (login) => {
    return selectRow('users', 'id, name, login, password, nivel, status', 'login', login).then(response => {
        return response;
    })
}

const listSpaces = (space, spaceName) => {
    if (spaceName == undefined || spaceName == null) {
        spaceName = '';
    }

    return selectConditions('spaces', '*', space, 'name', `%${spaceName}%`, 'id', 'asc');
}

const spaceUpdateStatus = (newStatus, spaceId) => {
    updateRow('spaces', { status: newStatus }, 'id',  spaceId);
}

const selectSpaceById = (id) => {
    return selectRow('spaces', '*', 'id', id);
}

const insertSpace = (space) => {
    insertRow('spaces', space);
}

const updateSpace = (data) => {
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
        description: data.description,
        image: data.image
    }, 'id', data.id);
}

const getAllReserves = (status) => {
    return selectInnerJoin('spaces_reserved', '*', 'spaces', '*', { status: status }, 'spaces.name' , '%%', 'start_reservation', 'asc');
}

module.exports = {
    searchUser,
    listSpaces,
    spaceUpdateStatus,
    selectSpaceById,
    insertSpace,
    updateSpace,
    getAllReserves
}