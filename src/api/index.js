import { io } from 'socket.io-client';


// var socket = new WebSocket('ws://localhost:8080/ws')

// updated chatgpt

const socket = io('http://localhost:5000', {
    withCredentials: true, // Add any additional configuration here if needed
});

// 

export let connect = () => {
    console.log('connecting')

    socket.onopen = () => {
        console.log('successfully connected')
    }

    socket.onmessage = (message) => {
        console.log('Received message', message);
    };

    socket.onclose = (e) => {
        console.log('socket closed connection:', e)
    }

    socket.onerror = (err) => {
        console.log('sockt error:', err)
    }
}

export let sendMessage = (message) => {
    console.log('sending message', message)
    socket.send(message)
}