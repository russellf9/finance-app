angular.module('f9.finance-app', ['ui.router',
                                  'angularGrid',
                                  'f9.grid.state',
                                  'f9.grid.navigation',
                                  'f9.grid.simple-example',
                                  'f9.grid.multiplication',
                                  'f9.grid.people',
                                  'f9.grid.random-person',
                                  'f9.shared.input',
                                  'f9.shared.filters',
                                  'f9.shared.ui.image-circle',
                                  'f9.shared.random-data',
                                  'f9.shared.ui.image-load',
                                  'f9.shared.ui.loader'
                                  ])


.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider) {

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
          })

          .state('multiplication', {
              url: '/multiplication',
              templateUrl: 'components/multiplication.html'
          })

          .state('random-person', {
            url: '/random-person',
            templateUrl: 'components/random-person.html'
          })

          .state('people', {
            url: '/people',
            templateUrl: 'components/people.html'
          })
        ;

    }]);