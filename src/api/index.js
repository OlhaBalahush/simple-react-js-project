import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
    withCredentials: true,
});

export let connect = (onMessageReceived) => {
    console.log('connecting');

    socket.on('connect', () => {
        console.log('successfully connected');
    });

    socket.on('message', (message) => {
        console.log('Received message', message);
        onMessageReceived(message); // call the callback function with the received message
    });

    socket.on('disconnect', () => {
        console.log('socket disconnected');
    });

    socket.on('error', (err) => {
        console.log('socket error:', err);
    });
};

export let sendMessage = (message) => {
    console.log('sending message', message);
    socket.emit('message', message);
};
