(function() {
  function ModalCtrl($uibModal, Room) {
    this.open = function(newRoomName) {
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal'
      });

      modalInstance.result.then(function(newRoomName) {
        Room.add(newRoomName);
      });
    };
  }

  angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
