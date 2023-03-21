

const categoriesController  =  require("../Controllers/Categories.Controller");
module.exports = (app)=>{

    app.post("/ecomm/api/v1/categories",categoriesController.create);
    app.get("/ecomm/api/v1/categories",categoriesController.findAll);

}