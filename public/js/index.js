var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'Good Morning.'
  // })

  socket.on('newMessage', function(message){
    console.log('newMessage from the server', message)
  })

  socket.emit('createMessage', {
    to: 'jen@example.com',
    text: 'Good Morning.'
  })
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {

  console.log('New Email', email);
});
