import {Server as WebSocketServer} from 'socket.io'
import http from 'http'
import { Socket } from 'dgram';

// Llamar la dependencia de Express
const express = require('express');
const app = express();
const server = http.createServer(app)
const io = new WebSocketServer(server);

const path = require('path');
// Crear o llamar el puerto
app.set('port',8080);
app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

io.on('connection',(socket) =>{
    console.log('conectado: ' ,socket.id)
    socket.on('client:newinbox')
    // socket.emit('ping')
    // socket.on('pong',()=>{
    //     console.log('pong')
    // })
    
})

// Middlewares

// Routes
app.get('/', (req, res)=>{
    res.render('index');
});

// Static files

// Server
server.listen(app.get('port'), ()=>{
    console.log('Server run on', app.get('port'));
});
