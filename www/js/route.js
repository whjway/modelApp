// 总路由
angular.module('route', [ 
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',
  'account.route'
  ])

.config(function($stateProvider, $urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/guidePage');
  $urlRouterProvider.otherwise('/tab/home');

});
