const bcrypt = require('bcryptjs');

async function createHash(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    return passwordHashed;

  } catch (error) {
    //console.error('Erro ao criar o hash da senha:', error);
  }
}

async function comparePassword(password, hashPassword) {
  try {
    const inputPassword = await bcrypt.compare(password.toString(), hashPassword);

    return inputPassword;
    
  } catch (error) {
    //console.error('Erro ao verificar a senha:', error);
  }
}

module.exports = {
    createHash,
    comparePassword
}

// if you need to manually create a hash or test.
// const inputPassword = '1234';
// createHash(inputPassword)
//   .then((hash) => {
//       console.log(hash)

//     const tryPassword = '1234';
//     comparePassword(tryPassword, hash)
//       .then((correctPassword) => {
//         if (correctPassword) {
//           console.log('Login bem-sucedido!');
//         } else {
//             console.log('Não autorizado!');
//         }
//     });
// });