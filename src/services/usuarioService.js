import Usuario from "../models/usuario.js"

const getAllUsuarios = async() => {

  return await Usuario.findAll();
};

const createUsuario = async(usuarioData) => {

  return await Usuario.create(usuarioData);
};

export default { getAllUsuarios, createUsuario};