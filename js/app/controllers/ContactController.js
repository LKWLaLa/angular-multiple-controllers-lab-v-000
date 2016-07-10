function ContactController() {
  var vm = this;

  vm.name = "Edgar";
  vm.email = "edgar@email.com";
  vm.phone = '555-666-7777';
 
  this.changeName = function () {
    vm.name = "Joe";
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);
