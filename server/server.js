const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected')

  // socket.emit('newEmail', {
  //   from: 'mike@email.com',
  //   text: 'Hi Mike.  What is up?',
  //   createAt: 123
  // });

  socket.emit('newMessage', {
    from: 'mike@email.com',
    text: 'Hi Mike.  What is up?',
    createAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage from the user', newMessage)
  })

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail)
  // })

  socket.on('disconnect', () => {
    console.log('Disconnected a user');
  })
});



server.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
