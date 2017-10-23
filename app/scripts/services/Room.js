(function() {
  function Room($firebaseArray, NewRoomService) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(newRoom) {
      rooms.$add(newRoom);
    };

    Room.getRoomById = function(id) {
      return rooms.$getRecord(id);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'NewRoomService', Room]);
})();
