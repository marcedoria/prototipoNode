const Sequelize = require('sequelize');
const Bd = require('../config/basedata');

const Menu = Bd.define('comidas',{
     id:{
        type:Sequelize.INTEGER, primaryKey:true
    },
    idL:{
        type:Sequelize.INTEGER
    },
    nombreC:{
        type:Sequelize.STRING
    },
    descripcion:{
        type:Sequelize.STRING
    },
    precio:{
        type:Sequelize.INTEGER
    },
    imagen:{
      type:Sequelize.STRING      
    }

   });

   module.exports = Menu;