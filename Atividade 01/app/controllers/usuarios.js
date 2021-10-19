const routesUsers = require("../routes/usuarios");

let userList = [
    {
        "id": 1,
        "name": "Lucas",
        "email": "lucas@gmail.com",
        "password": "123",
    },
    {
        "id": 2,
        "name": "Karine",
        "email": "karine@gmail.com",
        "password": "234",
    },
    {
        "id": 3,
        "name": "Ana",
        "email": "ana@gmail.com",
        "password": "345",
    }
]

module.exports.userList = function(req, res){
    let user_return = userList;
    res.json(user_return);
}

module.exports.userSearch = function(req, res){
    let id = req.params.id;
    let user = userList.find(function(user){
        return user.id == id;
    });
    if(user){
        res.json(user);
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado"});
    }
}

module.exports.userInsert = function(req, res){
    let user = req.body;
    userList.push(user);
    res.status(201).json(user);
}

module.exports.userDelete = function(req, res){
    let id = req.params.id;
    userList = userList.filter(function(user){
        return user.id != id;
    })
    res.json({mensagem: "Usuário foi removido com sucesso!"});
}