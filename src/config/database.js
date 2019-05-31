const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex;


//insert
// knex('users').insert({
//     name: 'Teste',
//     email: 'teste@teste.com.br',
//     password: 'teste'
// }).then(data => console.log(data))


//select
// knex('users').where({id:2}).first().then(resultado => console.log(resultado))