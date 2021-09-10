// importar express

const express = require('express');
const { dirname } = require('path');
const path = require('path');
const bodyParser= require('body-parser');
const routes = require('./routes');
const configs = require('./config');


// Bd.authenticate()
//       .then(() => console.log('DB conectada'))
//       .catch(error => console.log(error))
     

// configurar  express
const app = express();

//habilitar pug 
app.set('view engine', 'pug');
// Ejecutamos el Body Parser 
app.use(bodyParser.urlencoded({extended: true}));
// cargamos las rutas 
app.use('/', routes());
// cargar vistas
app.set('views', path.join(__dirname, './views'));
// cargar las carpetas estaticas

app.use(express.static('public'));
// puerto a usar 

const config=configs[app.get('env')];
app.locals.titulo=config.nombresitio;
const host =process.env.HOST || '0.0.0.0';
const port =process.env.PORT || 3000;

app.listen(port,host,()=>{
   console.log('El Servidor esta funcinando');
});

