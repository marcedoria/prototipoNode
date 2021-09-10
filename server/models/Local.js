const Sequelize = require('sequelize');
const Bd = require('../config/basedata');

const Local = Bd.define('locales',{
     id:{
        type:Sequelize.INTEGER, primaryKey:true
    },
    idA:{
        type:Sequelize.STRING
    },
    nombreL:{
        type:Sequelize.STRING
    },
    imagen:{
        type:Sequelize.STRING
    },
    

   });
module.exports = Local;