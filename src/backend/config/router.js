//Organized endpoints routes and call functions.
const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin.js');
const user = require('../controllers/user.js');
const security = require('../security/token.js');

//The endpoints could have other shorter routes, but at a didactic level it is easier.
router.post('/src/backend/controllers/administrator/login', admin.login);
router.post('/src/backend/controllers/administrator/getSpaces', security.verifyWebToken, admin.getSpaces);
router.get('/src/backend/controllers/administrator/getSpace', security.verifyWebToken, admin.getSpace);
router.put('/src/backend/controllers/administrator/addSpace', security.verifyWebToken, admin.addSpace);
router.post('/src/backend/controllers/administrator/updateStatus', security.verifyWebToken, admin.updateStatus);
router.post('/src/backend/controllers/administrator/editSpace', security.verifyWebToken, admin.editSpace);
router.post('/src/backend/controllers/administrator/getReserves', security.verifyWebToken, admin.getReserves);
router.put('/src/backend/controllers/user/addUser', user.addUser);
router.post('/src/backend/controllers/user/login', user.login);
router.post('/src/backend/controllers/user/resetPassword', user.resetPassword);
router.post('/src/backend/controllers/user/changePassword', user.changePassword);
router.post('/src/backend/controllers/user/getSpaces', security.verifyWebToken ,user.getSpaces);
router.post('/src/backend/controllers/user/getSpace', security.verifyWebToken, user.getSpace);
router.post('/src/backend/controllers/user/getReserves', security.verifyWebToken, user.getReserves);
router.post('/src/backend/controllers/user/getReserve', security.verifyWebToken, user.getReserve);
router.post('/src/backend/controllers/user/reserveCancel', security.verifyWebToken, user.reserveCancel);
router.put('/src/backend/controllers/user/addReserve', security.verifyWebToken, user.addReserve);
router.post('/src/backend/controllers/user/editReserve', security.verifyWebToken, user.editReserve);

module.exports = router;