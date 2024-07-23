const { selectRow, updateRow, insertRow, selectInnerJoin, selectConditions, checkReserve, selectRows } = require('../utilQuerys.js');

const checkLoginAvailable = (requestedLogin) => {
    return selectRow('users', 'login', 'login', requestedLogin);
}

const insertUser = (insertData) => {
    insertRow('users', insertData);
}

const checkEmailAvailable = (requestedEmail) => {
    return selectRow('users', 'id, email', 'email', requestedEmail);
}

const searchLogin = (login) => {
    return selectRow('users', 'id, name, login, password, nivel, status, email', 'login', login);
}

const updatePassToken = (uniqId, userId) => {
    updateRow('users', { password_token : uniqId }, 'id', userId );
}

const getPassToken = (uniqId) => {
    return selectRow('users', 'id, email', 'password_token', uniqId);
}

const updatePassword = (newPassword, userId) => {
    updateRow('users', { password: newPassword }, 'id', userId);
}

const listSpaces = (space, spaceName) => {
    if (spaceName == undefined || spaceName == null) {
        spaceName = '';
    }

    return selectConditions('spaces', '*', space, 'name',`%${spaceName}%`, 'id',  'asc');
}

const listSpace = (spaceId) => {
    return selectConditions('spaces', '*', { id: spaceId, status: 1}, 'name', '%%', 'id', 'asc');
}

const getUserReserves = (userId, statusReserve) => {
    let data = {
        user_id: userId,
    }

    if (statusReserve != 'all') {
        data.status = statusReserve;
    }

    return selectInnerJoin('spaces_reserved', '*', 'spaces', '*', data, 'spaces.name' , '%%', 'start_reservation', 'asc');
}

const getUserReserve = (userId, reserveId) => {
    return selectInnerJoin('spaces_reserved', '*', 'spaces', '*', { user_id: userId, id: reserveId }, 'spaces.name' , '%%', 'id', 'asc');
}

const reserveUpdate = (newStatus, reserveId) => {
    updateRow('spaces_reserved', { status: newStatus }, 'id', reserveId);
}

const checkSpaceAvailable = (spaceId, startDateAndTime, finalDateAndTime) => {
    return checkReserve('spaces_reserved', '*', { space_id: spaceId, status: 1 }, startDateAndTime, finalDateAndTime, 'id', 'asc');
}

const addUserReserve = (userID, insertData) => {
    insertRow('spaces_reserved', { 
        start_reservation: insertData.start_reservation, 
        final_reservation: insertData.final_reservation,
        reserved_hours: insertData.qtd_hours,
        user_id: userID,
        space_id: insertData.space_id,
        status: 1,
        responsible_contact: insertData.email,
        total_prize: insertData.total_prize
    });
}

const checkRecorrencyReserve = (spaceId) => {
    return selectRows('spaces_reserved', '*', { space_id: spaceId, status: 1 }, 'id', 'desc');
}

const updateReserve = (reserveId, updateData) => {
    updateRow('spaces_reserved', {
        start_reservation: updateData.start_reservation,
        final_reservation: updateData.final_reservation,
        reserved_hours: updateData.qtd_hours,
        total_prize: updateData.total_prize
    }, 'id', reserveId);
}

const getUserActiveReserve = (userId, reserveId) => {
    return selectInnerJoin('spaces_reserved', '*', 'spaces', '*', { user_id: userId, id: reserveId, status: 1 }, 'spaces.name' , '%%', 'id', 'asc');
}

module.exports = {
    insertUser,
    checkLoginAvailable,
    checkEmailAvailable,
    searchLogin,
    updatePassToken,
    getPassToken,
    updatePassword,
    listSpaces,
    listSpace,
    getUserReserves,
    getUserReserve,
    reserveUpdate,
    checkSpaceAvailable,
    addUserReserve,
    checkRecorrencyReserve,
    updateReserve,
    getUserActiveReserve
}