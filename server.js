// © 2020 ARTISAN CODE COLOMBIA - CUSTOMER EXPERIENCE - TODOS LOS DERECHOS RESERVADOS
// Servidor Deploy Heroku

const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(__dirname+'/dist/autoparts-client') );
app.get('*', ( req, res ) => {

    const indexFile = path.resolve(__dirname + '/dist/autoparts-client/index.html');

    res.sendFile(indexFile);
})
app.listen(process.env.PORT || 8080);