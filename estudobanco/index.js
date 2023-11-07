const mongoose = require("mongoose")
mongoose.set("strictQuery",false)
const articleModel = require("./articles")
//mongoose.connect("mongodb://localhost:27017/aprendendomongo", {useNewUrlParser: true, useUnifiedTopology: true})


mongoose.connect('mongodb://localhost:27017/aprendendomongo',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

//---------------------------------------------------------------------------------------------------------------------

const Article = mongoose.model("Article", articleModel);


//update
/*
Article.findByIdAndUpdate('63e4381489f25c53f8678589',{title: 'lanche'}).then(article=>{
    console.log('Atualizado');
}).catch(err=>{
    console.log(err);
})*/


//deletar por id
/*
Article.findByIdAndDelete('63e3ecd799c98ee4d5f59f59').then(article =>{
    console.log('Dado deletado');
}).catch(err=>{
    console.log(err);
})
*/



//listagem
/*
Article.find({}).then(articles=>{
    console.log(articles);
}).catch(err=>{
    console.log(err);
})*/

//busca por id ou parametros
/*
Article.find({'author': 'gordo'}).then(article =>{
    console.log(article);
}).catch(err=>{
    console.log(err);
})
*/



/*      //Cadastro
const artigo = new Article({title: "dfdfdsfsdf", 
    author:"gordo", 
    body: "lanche",
    special: true,
    resume:{
        content: "bla bla",
        author: "teste"
    }
})

artigo.save().then(()=>{
    console.log("Artigo salvo");
}).catch(err=>{
    console.log(err);
})
*/