const request = require('supertest');
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async(usuario, senha)=> {
    const badyLogin = {...postLogin}

    const resposta = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(badyLogin)
    return resposta.body.token;
}
module.exports = {
    obterToken
}