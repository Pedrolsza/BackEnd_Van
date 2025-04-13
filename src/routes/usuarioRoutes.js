import express from 'express';
import usuarioController from '../controllers/usuarioController';

const router = express.Router();

// Definindo as rotas de usuários
router.get('/', usuarioController.getAllUsuarios);
router.post('/', usuarioController.createUsuario);

export default router;