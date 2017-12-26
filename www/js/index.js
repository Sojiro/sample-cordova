angular.module('SampleCordova', []).controller('MessageController', function () {
    var vm = this;
    vm.message = 'Hello World!';

    vm.submit = function () {
        window.alert(vm.message);
    };
});