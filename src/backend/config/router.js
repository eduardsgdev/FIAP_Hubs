//Organized endpoints routes and call functions.
const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin.js');
const user = require('../controllers/user.js');
const security = require('../security/token.js');

//The endpoints could have other shorter routes, but at a didactic level it is easier.
router.post('/src/backend/controllers/administrator/login', admin.login);
router.post('/src/backend/controllers/administrator/getOngs', security.verifyWebToken, admin.getOngs);
router.get('/src/backend/controllers/administrator/getOng', security.verifyWebToken, admin.getOng);
router.put('/src/backend/controllers/administrator/addOng', security.verifyWebToken, admin.addOng);
router.post('/src/backend/controllers/administrator/updateStatus', security.verifyWebToken, admin.updateStatus);
router.post('/src/backend/controllers/administrator/editOng', security.verifyWebToken, admin.editOng);
router.post('/src/backend/controllers/administrator/getReserves', security.verifyWebToken, admin.getReserves);
router.put('/src/backend/controllers/user/addUser', user.addUser);
router.post('/src/backend/controllers/user/login', user.login);
router.post('/src/backend/controllers/user/resetPassword', user.resetPassword);
router.post('/src/backend/controllers/user/changePassword', user.changePassword);
router.post('/src/backend/controllers/user/getOngs', security.verifyWebToken ,user.getOngs);
router.post('/src/backend/controllers/user/getOng', security.verifyWebToken, user.getOng);
router.post('/src/backend/controllers/user/getReserves', security.verifyWebToken, user.getReserves);
router.post('/src/backend/controllers/user/getReserve', security.verifyWebToken, user.getReserve);
router.post('/src/backend/controllers/user/reserveCancel', security.verifyWebToken, user.reserveCancel);
router.put('/src/backend/controllers/user/addReserve', security.verifyWebToken, user.addReserve);
router.post('/src/backend/controllers/user/editReserve', security.verifyWebToken, user.editReserve);

module.exports = router;