(function() {
  function NewRoomService() {
    var newRoom = {};
    NewRoomService.newRoom = newRoom;

    return newRoom;
  }

    angular
        .module('blocChat')
        .service('NewRoomService', NewRoomService);
})();
