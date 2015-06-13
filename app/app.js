angular.module('f9.finance-app', ['ui.router', 'angularGrid', 'f9.grid'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home.html'
            })

          .state('finance', {
              url: '/finance',
              templateUrl: 'components/finance.html',
              controller: 'GridController as grid'
          });

    }]);