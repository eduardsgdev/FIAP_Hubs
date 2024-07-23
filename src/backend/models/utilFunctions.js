const { selectRow, updateRow, insertRow } = require('./utilQuerys.js')

const updateLastLogin = (userId) => {
    const date = new Date();
    updateRow('users', { last_login: date }, 'id', userId);
}

const insertLog = (table, userId, postAction, insertData) => {
    insertRow(table, { id_user: userId, action: postAction, post: insertData });
}

module.exports = {
    updateLastLogin,
    insertLog
}