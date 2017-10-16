(function() {
  function HomeCtrl(Room) {
    this.roomArray = Room.all;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
