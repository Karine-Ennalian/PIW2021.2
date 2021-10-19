const routesPost = require("../routes/posts");

let postsList = [
    {
        "id": 1,
        "text": "Deu certo 01",
        "likes": "5",
    },
    {
        "id": 2,
        "text": "Deu certo 02",
        "likes": "10",
    },
    {
        "id": 3,
        "text": "Deu certo 03",
        "likes": "7",
    }
]

module.exports.postsList = function(req, res){
    let post_return = postsList;
    res.json(post_return);
}

module.exports.postsSearch = function(req, res){
    let id = req.params.id;
    let posts = postsList.find(function(posts){
        return posts.id == id;
    });
    if(posts){
        res.json(posts);
    }else{
        res.status(404).json({mensagem: "Esse Post não existe em nosso sistema!"});
    }
}

module.exports.postsInsert = function(req, res){
    let posts = req.body;
    postsList.push(posts);
    res.status(201).json(posts);
}

module.exports.postsDelete = function(req, res){
    let id = req.params.id;
    postsList = postsList.filter(function(posts){
        return posts.id != id;
    })
    res.json({Mensagem: "O Post foi removido com sucesso!"});
}