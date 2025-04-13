import express from 'express';
import { createServer } from 'node:http';
import { sequelize } from './config/database';
import usuarioRoutes from './routes/usuarioRoutes';

const app = express();
app.use(express.json());

// Rotas
app.use('/usuarios', usuarioRoutes);

// Testando a conexao com o banco de dados
sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch(err => console.error('Não foi possível conectar ao banco de dados: ', err));

const server = createServer((req, res) =>{
    app(req, res);

});

server.listen(3000, () => {
    console.log('Servidor rodando na porte :3000')

})



