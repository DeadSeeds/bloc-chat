(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      var ref = firebase.database().ref().child('messages').orderByChild('roomId').equalTo(roomId);
      var messages = $firebaseArray(ref);
      return messages;
    };

    Message.send = function(newMessage) {
      //var newMessage = {};
      var ref = firebase.database().ref().child('messages').orderByChild('roomId').equalTo(newMessage.roomId);
      var messages = $firebaseArray(ref);
      messages.$add(newMessage);
    };

    //console.log(messages);
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
