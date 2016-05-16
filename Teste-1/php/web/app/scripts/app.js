'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope){

      $rootScope.page = function(menu){
        return ($rootScope.actual == menu);
      };

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/clientes', {
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl',
        controllerAs: 'clientes'
      })
      .when('/produtos', {
        templateUrl: 'views/produtos.html',
        controller: 'ProdutosCtrl',
        controllerAs: 'produtos'
      })
      .when('/pedidos', {
        templateUrl: 'views/pedidos.html',
        controller: 'PedidosCtrl',
        controllerAs: 'pedidos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
