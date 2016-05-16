'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ClientesCtrl
 * @description
 * # ClientesCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ClientesCtrl', function (api, $scope, $rootScope) {
    $rootScope.actual = 'clientes';
    $scope.cliente = {};

    function loadData() {
      api.getClientes().then(function(response) {
        $scope.clientes = response.data.clientes;
      });
    }
    loadData();

    $scope.save = function() {
      if (typeof $scope.cliente.id == 'undefined') {
        api.addCliente($scope.cliente).then(function(response) {
          if (response.status == 201) {
            $scope.cliente = {};
            loadData();
          }
        });
      } else {
        api.updateCliente($scope.cliente).then(function(response) {
          if (response.status == 201) {
            $scope.cliente = {};
            loadData();
          }
        });
      }
    };

    $scope.update = function(cliente) {
      api.getCliente(cliente.id).then(function(response) {
        $scope.cliente = response.data.cliente;
      });
    };

    $scope.remove = function(cliente) {
      api.delCliente(cliente.id).then(function(response) {
        if (response.status == 204) {
          loadData();
        }
      });
    };
  });
