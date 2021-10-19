const controllerPosts = require("../controllers/posts");

module.exports = function(app){
    //GET /posts
    app.get("/api/posts", controllerPosts.postsList);
    app.get("/api/posts/:id", controllerPosts.postsSearch);

    //POST posts
    app.post("/api/posts", controllerPosts.postsInsert);
    
    //DELETE posts
    app.delete("/api/posts/:id", controllerPosts.postsDelete);
}