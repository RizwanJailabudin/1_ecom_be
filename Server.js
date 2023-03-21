const express = require("express");
const bodyParser = require("body-parser");
const  dbModels = require("./Models");

const serverConfig =  require("./Config/Server.Config")

const app =  express();
app.use(bodyParser.json());

const Category= dbModels.categories;


dbModels.sequelizeCon.sync({force:true})
.then(()=>{
    console.log('tables dropped and created');
    init();
})

function init() {
    var categories = [
        {
            name: "Electronics",
            description: "This category will contain all the electronic products"
        }, 
        {
            name: "KitchenItems",
            description: "This category will contain all the kitchen products"
        }];

        Category.bulkCreate(categories)
        .then(() => {
            console.log("Category table initialised");
        })
        .catch(err => {
            console.log("Error while initialising categories table");
        })
        
}
require("./Routes/Categories.Route")(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Application Started Port in 3000");
})