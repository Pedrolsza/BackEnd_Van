import { get } from "dottie";
import Usuario from "../models/usuario"

const getAllUsuarios = async() => {

  return await Usuario.FindAll();
};

const createUsuario = async() => {

  return await Usuario.create(usuarioData);
};

export default { getAllUsuarios, createUsuario};