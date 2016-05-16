'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ProdutosCtrl
 * @description
 * # ProdutosCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ProdutosCtrl', function(api, $scope, $rootScope) {
    $rootScope.actual = 'produtos';
    $scope.produto = {};

    function loadData() {
      api.getProdutos().then(function(response) {
        $scope.produtos = response.data.produtos;
      });
    }
    loadData();

    $scope.save = function() {

      if (typeof $scope.produto.id == 'undefined') {
        api.addProduto($scope.produto).then(function(response) {
          if (response.status == 201) {
            $scope.produto = {};
            loadData();
          }
        });
      } else {
        api.updateProduto($scope.produto).then(function(response) {
          if (response.status == 201) {
            $scope.produto = {};
            loadData();
          }
        });
      }
    };

    $scope.update = function(produto) {
      api.getProduto(produto.id).then(function(response) {
        $scope.produto = response.data.produto;
      });
    };

    $scope.remove = function(produto) {
      api.delProduto(produto.id).then(function(response) {
        if (response.status == 204) {
          loadData();
        }
      });
    };

  });
