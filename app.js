import express from 'express';
import { sequelize } from './src/config/database.js';
import usuarioRoutes from './src/routes/usuarioRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas
app.use('/usuarios', usuarioRoutes);

// Testando a conexão com o banco de dados
sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

// Iniciando o servidor
app.listen(PORT, () => {
    
  console.log(`Servidor rodando na porta ${PORT}`);
});
