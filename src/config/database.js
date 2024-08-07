module.exports = {
  dialect: 'postgres', //tipo do banco
  host: 'localhost',
  username: 'postgres',
  port: 5432,
  password: 'root',
  database: 'database_development', //nome do banco 
  define: {
    timestamp: true, //salva a data e hora de algum dado adicionado na tabela (salva no campo update at)
    underscored: true, // coloca a letra maiuscula de cada tabela
  }
}