const connection = require("./supabase.js");
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const userDataBase = process.env.USER_DB;
const passwordDataBase = process.env.SUPABASE_PASSWORD;

const body = {
  email: userDataBase,
  password: passwordDataBase
};

axios.post(`${connection.supabase.supabaseUrl}/auth/v1/token?grant_type=password`, body, {
  headers: {
    'apikey': connection.supabase.realtime.accessToken,
    'Content-Type': 'application/json',
  }
}).then(async (response) => {
    if (response.status === 200) {
        //console.log(response);
    } else {
      console.error('Erro ao executar a query. Código do status:', response.status);
    }
  }).catch(error => {
    console.error('Erro ao se logar:', error.message);
});

module.exports = {
  connection,
}