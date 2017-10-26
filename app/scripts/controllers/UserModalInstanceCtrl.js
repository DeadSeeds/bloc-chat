(function () {
  function UserModalInstanceCtrl($uibModalInstance) {
      this.ok = function() {
        if (this.userName) {
        $uibModalInstance.close(this.userName);
        } 
      };
  }

  angular
    .module('blocChat')
    .controller('UserModalInstanceCtrl', ['$uibModalInstance', UserModalInstanceCtrl]);
})();
