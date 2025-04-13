import usuarioService from '../services/usuarioService.js';


const getAllUsuarios = async (req, res) => {

  try {
    const usuarios = await usuarioService.getAllUsuarios();
    res.status(200).json(usuarios);

  } catch(error){
    res.status(500).json({ message: 'Erro ao buscar usuários:'});

  }
};

const createUsuario = async (req, res) => {
  try{
    const usuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(usuario);

  } catch(error){

    res.status(500).json({ message: 'Erro ao criar usuário. '})
  }
};

export default {getAllUsuarios, createUsuario};
