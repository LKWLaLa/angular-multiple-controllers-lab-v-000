function StaffController() {
  var vm = this;
  vm.name = "Susie";
  vm.email = "susie@email.com";
  vm.phone = '222-333-4444';
 
}

angular
  .module('app')
  .controller('StaffController', StaffController);