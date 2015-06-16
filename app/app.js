angular.module('f9.finance-app', ['ui.router', 'angularGrid', 'f9.grid.navigation', 'f9.grid.simple-example'])

  //.run( ['$rootScope', '$state', '$stateParams',
  //    function ($rootScope,   $state,   $stateParams) {
  //        $rootScope.$state = $state;
  //        $rootScope.$stateParams = $stateParams;
  //    }
  //])

  //.run(function ($state,$rootScope) {
  //  $rootScope.$state = $state;
  //})

.run(function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.findState = function() {
    var currentName = $state.current.name;
    var currentMatch = currentName.match(/./g);
    $rootScope.currentCount = currentMatch.length;
  };
})


.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home.html'
            })

          .state('simple-example', {
              url: '/simple-example',
              templateUrl: 'components/simple.html',
              controller: 'SimpleExampleController as simple'
          });

        //$locationProvider.html5Mode(true);
    }]);