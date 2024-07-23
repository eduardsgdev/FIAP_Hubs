const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET_JWT

function createWebToken(userId, userName, userLogin, userNivel) {
    const token = jwt.sign({ 
        userData: {
            id: userId,
            name: userName,
            login: userLogin,
            nivel: userNivel
        }
    }, secret, { expiresIn: 3600 });
    
    return { created: true, token };
}

function verifyWebToken(request, response, next) {
    const token = request.headers['authorization'];
    try {
        jwt.verify(token, secret);

        next();

    } catch {
        return response.status(401).json({ message: 'Não autorizado! Você será redirecionado.' });
    }
}

function decodedWebToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (error, decoded) => {
            if (decoded) {
                resolve(decoded);
            } else {
                reject(console.error(`Error ao decodar o token ${error}`));
            }
        });
    })
}

module.exports = {
    createWebToken,
    verifyWebToken,
    decodedWebToken
}