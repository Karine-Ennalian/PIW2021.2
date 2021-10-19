const bodyParser = require('body-parser');
const express = require('express');
const routerUsers = require('../app/routes/usuarios');
const routerPosts = require('../app/routes/posts');

//Exportando módulo (Padrão CommonJS)
module.exports = function() {
    let app = express();
    //Definindo variável de aplicação
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static('./public'));
    routerPosts(app);
    routerUsers(app);

    return app;
};