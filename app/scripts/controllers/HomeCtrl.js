(function() {
  function HomeCtrl(Room, Message, $cookies) {
    this.roomArray = Room.all;
    this.setRoom = function(id) {
      this.room = Room.getRoomById(id);
      this.messages = Message.getByRoomId(id);
      //console.log(this.messages);
    };

    this.sendMessage = function() {
      var message = {
        content: this.messageBody,
        roomId: this.room.$id,
        username: $cookies.get('blocChatCurrentUser'),
        sentAt: firebase.database.ServerValue.TIMESTAMP
      }

      Message.send(message);
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
