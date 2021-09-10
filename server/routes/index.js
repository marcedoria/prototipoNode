const express = require('express');
const router = express.Router();
const locales = require('../models/Local');
const menus = require('../models/Menu')

module.exports= function(){

    router.get('/', (req, res) => {
        locales.findAll({attributes:['id','idA','nombreL','imagen']})
        .then(local => res.render('index',{
            pagina: 'Locales',
            local
        }))
        .catch(error => console.log(error))
        
       
    });

   

    router.get('/menu', (req, res) => {
        menus.findAll({attributes:['id','idL','nombreC','descripcion','precio','imagen']})
        .then(menu => res.render('menu',{
            pagina: 'menu',
            menu
        }))
        .catch(error => console.log(error))
    });

   


    router.get('/domicilio', (req, res) => {
        res.render('domicilio',{
            pagina: 'Domicilio'
        });
    });

    router.post('/domicilio', (req, res) => {
        let {idL,nombreC,descripcion,Precio,Imagen}=req.body;
       menus.create({
        idL,
        nombreC,
        descripcion,
        Precio,
        Imagen

       }) .then(menu => res.redirect('/menu'))
       .catch(error=> console.log(error))
    })

        return router;
}