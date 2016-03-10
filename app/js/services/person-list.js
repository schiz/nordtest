var PersonAppServices = angular.module('PersonAppServices', []);

PersonAppServices.service('PersonsService', ['PersonFactory',
  function(PersonFactory) {
    this.list = [];

    this.create = function(name, gender, age) {
      this.list.unshift(new PersonFactory(name, gender, age));
    };

    this.remove = function(index) {
      this.list.splice(index, 1);
    };
  }]);
