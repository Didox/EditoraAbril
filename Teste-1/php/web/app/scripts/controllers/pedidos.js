'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:PedidosCtrl
 * @description
 * # PedidosCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('PedidosCtrl', function (api, $scope, $rootScope) {
    $rootScope.actual = 'pedidos';

    api.getClientes().then(function(response){
      $scope.clientes = response.data.clientes;
    });

    api.getProdutos().then(function(response){
      $scope.produtos = response.data.produtos;
    });

    function loadData() {
      api.getPedidos().then(function(response){
        $scope.pedidos = response.data.pedidos;
      });
    }
    loadData();

    $scope.save = function() {
        api.addPedido($scope.pedido).then(function(response) {
          if (response.status == 201) {
            $scope.pedido = {};
            loadData();
          }
        });
    };

    $scope.remove = function(pedido) {
      api.delPedido(pedido.id).then(function(response) {
        if (response.status == 204) {
          loadData();
        }
      });
    };

  });
