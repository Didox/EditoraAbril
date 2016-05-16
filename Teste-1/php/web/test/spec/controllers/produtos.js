'use strict';

describe('Controller: ProdutosCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var ProdutosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProdutosCtrl = $controller('ProdutosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProdutosCtrl.awesomeThings.length).toBe(3);
  });
});
