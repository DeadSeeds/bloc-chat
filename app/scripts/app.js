(function() {
  function config($locationProvider, $stateProvider) {
   $locationProvider
       .html5Mode({
           enabled: true,
           requireBase: false
        });

   $stateProvider
       .state('home', {
           url: '/',
           controller: 'HomeCtrl as home',
           templateUrl: '/templates/home.html'
       });
     }

     function BlocChatCookies($cookies, $uibModal) {
            var currentUser = $cookies.get('blocChatCurrentUser');
            if (!currentUser || currentUser === '') {
              var modalInstance = $uibModal.open({
                  animation: this.animationsEnabled,
                  ariaLabelledBy: 'modal-title',
                  ariaDescribedBy: 'modal-body',
                  backdrop: false,
                  templateUrl: '/templates/user-modal.html',
                  controller: 'UserModalInstanceCtrl',
                  controllerAs: 'UserModal',

              });

              modalInstance.result.then(function(userName) {
                this.userName = userName;
                if (userName === undefined) {
                  alert('You must enter a user name');
                  currentUser === '';
                } else {
                $cookies.put('blocChatCurrentUser', this.userName);
                var currentUser = $cookies.get('blocChatCurrentUser')
                console.log("User Name: " + currentUser);
              }
              });
            }
      }

  angular
      .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
      .config(config)
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
