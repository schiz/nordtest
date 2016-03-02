var addPersonApp = angular.module('addPersonApp', ['angularUtils.directives.dirPagination']);

addPersonApp.controller('PersonListCtrl', function ($scope) {

  // Pagination settings (MyController)
  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.persons = [];

  // Set template object for random generation ob person obj
  var person = {
    'id': function() {
      var id = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for( var i=0; i < 10; i++ )
        id += possible.charAt(Math.floor(Math.random() * possible.length));

      return id;
    },
    'name': function() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    'gender': function() {
      var MaleBool = [true, false],
          isMale = Math.floor(Math.random() * MaleBool.length + 1);
      if(isMale === 2)
        return 'Female';
      else
        return 'Male';
    },
    'age': function() {
      return Math.floor((Math.random()*90)+1);
    }
  };

  for (i = 0; i < 100; i++) {
    $scope.persons.push({
      id : person.id,
      name : person.name,
      gender : person.gender,
      age : person.age
    });
  }

  // // set function for generating n person objects in persons variable
  // $scope.generatePersons = function() {
  //   for (i = 0; i < 100; i++) {
  //     $scope.persons.push({
  //       id : person.id,
  //       name : person.name,
  //       gender : person.gender,
  //       age : person.age
  //     });
  //   }
  // };

  // // Generate n person objects in persons variable
  // $scope.generatePersons();
});

