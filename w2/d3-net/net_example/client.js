const net = require('net');

const conn = net.createConnection({ 
  host: '0.tcp.ngrok.io', // change to IP address of computer or ngrok host if tunneling
  port: 18587 // or change to the ngrok port if tunneling
});

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});

conn.setEncoding('utf8'); // interpret data as text