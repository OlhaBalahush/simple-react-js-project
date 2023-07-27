const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true, // Set to true to allow cookies or other credentials with requests
    },
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', message); // TODO something wrong here I guess
    });

    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
});

http.listen(5000, () => console.log('listening on http://localhost:5000'));