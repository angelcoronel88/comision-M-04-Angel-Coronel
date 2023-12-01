const usuarioRouter = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/UsuariosController.js');
const {
    verUsuarios: verUsuariosMongoose,
    crearUsuario: crearUsuarioMongoose,
    editarUsuario: editarUsuarioMongoose,
    eliminarUsuario: eliminarUsuarioMongoose,
    verUsuario: verUsuarioMongoose,
} = require('./../controllers/mongoose/UsuarioController.js');

// Ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);

// Ver usuario
usuarioRouter.get('/usuario', verUsuario);

// Crear usuario
usuarioRouter.post('/usuario', crearUsuario);

// Editar usuario
usuarioRouter.put('/usuario', editarUsuario);

// Eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);

/* ##################################################### */

// Ver usuarios con Mongoose
usuarioRouter.get('/m/usuarios', verUsuariosMongoose);

// Ver usuario con Mongoose
usuarioRouter.get('/m/usuario/:id', verUsuarioMongoose);

// Crear usuario con Mongoose
usuarioRouter.post('/m/usuario', crearUsuarioMongoose);

// Editar usuario con Mongoose
usuarioRouter.put('/m/usuario', editarUsuarioMongoose);

// Eliminar usuario con Mongoose
usuarioRouter.delete('/m/usuario', eliminarUsuarioMongoose);

module.exports = usuarioRouter;