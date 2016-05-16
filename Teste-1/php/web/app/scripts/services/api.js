'use strict';

/**
 * @ngdoc service
 * @name webApp.api
 * @description
 * # api
 * Factory in the webApp.
 */
angular.module('webApp')
  .factory('api', function($http) {

    var base = 'http://localhost:8080';

    return {

      //Clientes
      getClientes: function() {
        return $http.get(base + '/clientes');
      },
      getCliente: function(id) {
        return $http.get(base + '/clientes/' + id);
      },
      addCliente: function(cliente) {
        return $http.post(base + '/clientes', cliente);
      },
      delCliente: function(id) {
        return $http.delete(base + '/clientes/' + id);
      },
      updateCliente: function(cliente) {
        return $http.put(base + '/clientes/' + cliente.id, cliente);
      },

       // produtos
       getProdutos: function() {
         return $http.get(base + '/produtos');
       },
       getProduto: function(id) {
         return $http.get(base + '/produtos/' + id);
       },
       addProduto: function(produto) {
         return $http.post(base + '/produtos', produto);
       },
       delProduto: function(id) {
         return $http.delete(base + '/produtos/' + id);
       },
       updateProduto: function(produto) {
         return $http.put(base + '/produtos/' + produto.id, produto);
       },

       // Pedidos
       getPedidos: function() {
         return $http.get(base + '/pedidos');
       },
       addPedido: function(pedido) {
         return $http.post(base + '/pedidos', pedido);
       },
       delPedido: function(id) {
         return $http.delete(base + '/pedidos/' + id);
       },
       updatePedido: function(produto) {
         return $http.put(base + '/produtos/', produto);
       },

    };

  });
