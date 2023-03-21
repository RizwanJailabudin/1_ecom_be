

const { error } = require("console");
const db =  require("../Models");
const categories = db.categories;

exports.create = (req, res)=>{
    const cat = {
        name : req.body.name,
        description: req.body.description
    }

    categories.create(cat).then((cat)=>{
        console.log("categories data Created")
        res.status(201).send(cat);
    }).catch((e)=>{
        console.log("categories not  Created")
        res.status(400);
    })
};


exports.findAll = (req,res)=>{

   let name =  req.query.name;
   let Promise;

   if(name){
    Promise = categories.findAll({
        where : {
            name :name
        }
    });
   }else{
    Promise = categories.findAll();
   }
   
    Promise.then(cat=>{
        res.status(201).send(cat);
    }).catch((e)=>{
        console.log("categories not  Created")
        res.status(400);
    })

}