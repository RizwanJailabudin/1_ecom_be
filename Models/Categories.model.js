module.exports = ( sequelizeCon , sequelizeConfiq )=>{
  const categories =   sequelizeCon.define("categorie",{
    id: {
        type: sequelizeConfiq.INTEGER,
        primaryKey : true,
        autoIncrement:true
    },
    name:{
        type : sequelizeConfiq.STRING,
        allowNull: false
    },
    description:{
        type : sequelizeConfiq.STRING
    }
  },
  {
    tableName: 'categories'
  });
  return categories;

};