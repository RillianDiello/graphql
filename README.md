# graphql

Desenvolvimento de Api simples em GraphQL utilizando Knex e Mysql.

O GraphQL é uma linguagem de consulta para API em tempo de execuação, server-side, que executa consultas utilizando um sistema de tipos definidos para os dados em strings. Um serviço GraphQL não está diretamente ligado a um banco de dados, em vez disso ele é definido pelos tipos e campos dos dados existentes.

O Knex.JS é um SQL query builder para vários Bancos de dados (Postgres, MSSQL, MySQL, SQLite, Oracle, ...) que está disponivel através dos pacotes NPM, e pode ser instalado a partir do comando "$ npm install knex --save".

O funcionamento do GraphQL pode ser resumido por dois tipos principais de ações: *Query* (busca dados) e *Mutations* (modificam dados). Que por sua vez tem seu funcionamento completamente orientado pelo *Fields* (campos de dados). Existem ainda outros componentes como: *Arguments, Aliases* e *Fragments*.

Ref: 
Graphql: https://graphql.org/

Knex: https://www.npmjs.com/package/knex
