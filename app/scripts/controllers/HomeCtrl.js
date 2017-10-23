(function() {
  function HomeCtrl($scope, Room, Message) {
    this.roomArray = Room.all;
    this.setRoom = function(id) {
      this.room = Room.getRoomById(id);
      this.messages = Message.getByRoomId(id);
      console.log(this.messages);
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();
