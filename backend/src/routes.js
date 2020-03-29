const express = require('express');

const OngController = require('./controllers/OngController')

const IncidentController = require('./controllers/IncidentController')

const ProfileController = require('./controllers/ProfileController')

const SessionController = require('./controllers/SessionController')

//conequeção com o BD
const connection = require('./database/connection');

const routes = express.Router();



/**
 * Rotas / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET:    Busca uma informação do back-end
 * POST:   Cria uma informação no back-end
 * PUT:    Altera informação no back-end
 * DELETE: Deleta informação no back-end
 */

/**
 * Tipos de parâmentros
 * 
 * Query Params: Parâmetros nomeados na rota após "?"(Filtros, Paginação)Exemplo: http://localhost:3333/users?name=getulio = pega o usario com nome getulio ou
 * http://localhost:3333/users?page2 = pega os usuarios da pagina 2 ou http://localhost:3333/users?page2&name=getulio&idade=25
 * 
 * Para ter acesso aos dados enviados ao http:
 * app.get('/users', (request, respose) => {
    const params = request.query;
    http://localhost:3333/users?name=getulio&idade=25
 * 
 * Route Params: Parâmetros utilizados para identificar recursos exemplo http://localhost:3333/users/1 
 * com app.get('/users/:id', (request, respose)
 * 
 *Para ter acesso aos dados enviados ao http: 
 * app.get('/users/:id', (request, respose) => {
    const params = request.params;
    http://localhost:3333/users/1
 * 
 * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
 * app.post('/users', (request, respose) => {
    const body = request.body;

    console.log(body);
 * 
 */

/**
 * Configurando meu banco de dados
 * 
 * Drivers: SELECT * FROM USERS
 * Query Builder: table('users').select('*').where()
 */
/*
routes.post('/users', (request, respose) => {
    const body = request.body;

    console.log(body);

    return respose.json({
        evento: 'Semana  OmniStack 11.0',
        aluno: 'Felipe'
    });
});*/

//as rotas ficam dentro dos controlles

// routes.get('/ongs', async (request, respose) => {
//    const ongs = await connection('ongs').select('*');

//    return respose.json(ongs);
// });

// routes.post('/ongs', async (request, respose) => {
//    const { name, email, whatsapp, city, uf } = request.body;

//    const id = crypto.randomBytes(4).toString('HEX');

//    await connection('ongs').insert({
//       id,
//       name,
//       email,
//       whatsapp,
//       city,
//       uf,
//    })

//    return respose.json({ id });
// });

// forma resumida quando uso cotrollers
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;