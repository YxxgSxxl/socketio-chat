const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express(); // APP
const server = createServer(app); // SERVER
const io = new Server(server); // SOCKETS

// HTML FILE INTEGRATION
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// SOCKET.IO CONNECTION INIT
io.on('connection', (socket) => {
    console.log('a user connected');
});

// SERVER ON PORT 3000
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});