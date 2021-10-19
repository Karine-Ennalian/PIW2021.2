const controllerUsers = require("../controllers/usuarios");

module.exports = function(app){
    //GET /user
    app.get("/api/usuarios", controllerUsers.userList);
    app.get("/api/usuarios/:id", controllerUsers.userSearch);

    //POST user
    app.post("/api/usuarios", controllerUsers.userInsert);
    
    //DELETE user
    app.delete("/api/usuarios/:id", controllerUsers.userDelete);
}