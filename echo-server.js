const net = require('net');
const socket = net.connect({port: 8000});

socket.on('connect', ()=>{
    console.log('connected to server');
})

socket.on('data', (data)=>{
    console.log(data.toString());
})

process.stdin.pipe(socket);
process.stdin.on('data', (data) => {
    const str = data.toString();
    if(str.trim() === 'exit'){
        socket.end('good by');
        process.exit();
    }
});

process.on('SIGINT', ()=>{
    console.log('Cought Interrupt signal');
    if(socket){
        socket.end('terminated');
        process.exit();
    }
})