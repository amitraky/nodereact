

import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function Client(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer',{kk:'amit is comming'});
  }
  export default  Client;