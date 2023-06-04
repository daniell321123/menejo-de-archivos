import ManagerUsuarios from "./managers/ManagerUsuarios.js";

const manager = new ManagerUsuarios();
const env = async() =>{
    let primeraConsultaUsuarios = await manager.consultarUsuarios();
    console.log(primeraConsultaUsuarios); 
    let user = {
        nombre:"Mauricio",
        apellido:"Espinosa",
        edad:26,
        curso:"Backend"
    }
    let result = await manager.crearUsuario(user);
    console.log(result);
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios); 
}
env();
 