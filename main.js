import { createServer } from 'node:http';
import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';

const Usuario = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    instituicao: DataTypes.STRING,
    data_nasc: DataTypes.DATE
};

const Condutor = {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true },
    cnh: DataTypes.STRING,
    endereco: DataTypes.STRING,
    placa_veiculo: DataTypes.STRING
};

const Passageiro = {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true },
    endereco: DataTypes.STRING
};

const Van = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    capacidade: DataTypes.INTEGER,
    id_motorista: { type: DataTypes.INTEGER }
};

const Transporte = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_passageiro: { type: DataTypes.INTEGER },
    id_van: { type: DataTypes.INTEGER },
    horario_partida: DataTypes.DATE,
    horario_chegada: DataTypes.DATE,
    status: DataTypes.STRING
};

const Pagamento = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_passageiro: { type: DataTypes.INTEGER },
    valor: DataTypes.FLOAT,
    metodo_pagamento: DataTypes.STRING,
    data_pagamento: DataTypes.DATE
};

const app = express();
app.use(express.json());

const server = createServer((req, res) => {
    app(req, res); // Passando a requisição e a resposta para o Express
});

app.get('/', (req, res) => {
    res.send('API do Sistema de Controle de Van Escolar');
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
