angular.module('f9.finance-app', ['ui.router', 'angularGrid', 'f9.grid.navigation', 'f9.grid.simple-example'])

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

        $locationProvider.html5Mode(true);
    }]);