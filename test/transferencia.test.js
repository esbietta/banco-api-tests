const request = require('supertest');
const { espect, expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('transferencias', () => {
    
     let token;

        beforeEach ( async()=> {
        token = await obterToken('julio.lima', '123456')
        })

    describe('POST / Transferencias', () => {
       
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de $10 ', async () => {
            const bodyTransferencias = {...postTransferencias }
           
            const resposta = await request(process.env.BASE_URL) 
                 .post('/transferencias') 
                 .set('Content-Type', 'application/json')   
                 .set('Authorization',`Bearer ${token}`)  
                 .send(bodyTransferencias)

                 expect(resposta.status).to.equal(201)
                 console.log(resposta.body)

        })

         it('Deve retornar falha com 422 quando o valor da transferencia for abaxio de $10 ', async () => {
            const bodyTransferencias = {...postTransferencias }
            bodyTransferencias.valor = 7;

             const resposta = await request(process.env.BASE_URL) 
                 .post('/transferencias') 
                 .set('Content-Type', 'application/json')   
                 .set('Authorization',`Bearer ${token}`)  
                 .send(bodyTransferencias)

                 expect(resposta.status).to.equal(422)
                 console.log(resposta.body)

        })

    })

    describe('GET / Transferencias/{id}', () => {
    
        it ('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no banco de dados quando o ID sea valido',async ()=> {

            const resposta = await request(process.env.BASE_URL) 
            .get('/transferencias/27')
            .set('Authorization',`Bearer ${token}`)
            
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal(27)
            expect(resposta.body.id).to.be.a('number')
            expect(resposta.body.conta_origem_id).to.equal(1)

            console.log(resposta.status)
            console.log(resposta.body)
        })
    })

    describe('GET /transferencias' , ()=> {
        
        it ('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros' , async () => {
            
            const resposta = await request(process.env.BASE_URL)
               .get('/transferencias?page=1&limit=10')
               .set('Authorization',`Bearer ${token}`)


               expect(resposta.status).to.equal(200)
               expect(resposta.body.limit).to.equal(10)
               expect(resposta.body.transferencias).to.have.lengthOf(10)
               
        })
    })

})