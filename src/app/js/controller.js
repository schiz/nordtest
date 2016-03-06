var addPersonApp = angular.module('addPersonApp',
  [
    'angularUtils.directives.dirPagination', 
    'ngMessages'
  ]);

addPersonApp.controller('PersonListCtrl', function ($scope, $window) {

  $scope.ageOpts = [
  ];

  // Fill age opts for select
  for (i = 1; i < 100; i++) {
    $scope.ageOpts.push({
      value : i
    });
  }

  $scope.genderOpts = [
    {value: 'Male'}, 
    {value: 'Female'}
  ];

  // Pagination settings (MyController)
  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.persons = [];

  // generate random string (for ids and names)
  function generateString() {
    var string = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < 10; i++ )
      string += possible.charAt(Math.floor(Math.random() * possible.length));

    return string;
  }

  // generate random gender
  function generateGender() {
    var MaleBool = [true, false],
        isMale = Math.floor(Math.random() * MaleBool.length + 1);
    if(isMale === 2)
      return 'Female';
    else
      return 'Male';
  }

  // generate random age
  function generateAge() {
    return Math.floor((Math.random()*90)+1);
  }

  // Set template object for random generation person obj
  var person = {
    createId: generateString,
    createName: generateString,
    createGender: generateGender,
    createAge: generateAge
  };

  // Fill persons array with objects with randomized values
  for (i = 0; i < 100; i++) {
    $scope.persons.push({
      id : person.createId(),
      name : person.createName(),
      gender : {value: person.createGender()},
      age : {value: person.createAge()}
    });
  }

  // Sorting settings
  $scope.sortType     = ''; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  
  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      // Add person obj to persons
      $scope.persons.unshift({ 
        id: person.createId(), 
        name: $scope.name,
        gender: $scope.gender, 
        age: $scope.age
      });
      // Reset input models
      $scope.name='';
      $scope.gender='';
      $scope.age='';
    }
  };

  $scope.removePerson = function(index) {
    $scope.persons.splice(index, 1);
    $scope.personRemovePopup = false;
  };

  $scope.integerval = /^\d*$/;
  $scope.textval = /^(\D)+$/;
  
  $scope.editingPersons = {};

  for (var i = 0; i < $scope.persons.length; i++) {
    $scope.editingPersons[$scope.persons[i].id] = false;
  }

  $scope.modify = function(person){
    $scope.editingPersons[person.id] = true;
  };

  $scope.save = function(person){
    $scope.editingPersons[person.id] = false;
  };

  $scope.cancel = function(person){
    $scope.editingPersons[person.id] = false;
  };

  $scope.personRemovePopup = false;
  $scope.displayPersonRemovePopup = function() {
    $scope.personRemovePopup = true;
  };

  $scope.cancelPersonRemovePopup = function() {
    $scope.personRemovePopup = false;
  };

  // $scope.removePerson = function(index) {
  //   $scope.persons.splice(index, 1);
  // };
});
