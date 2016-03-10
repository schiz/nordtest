var PersonAppControllers = angular.module('PersonListControllers', []);

PersonAppControllers.controller('AddPersonCtrl', ['$scope', 'PersonsService', function ($scope, PersonsService) {
  $scope.ageOptions = {};
  $scope.genderOptions = {
    option1: 'Male',
    option2: 'Female'
  };
  $scope.integerval = /^\d*$/;
  $scope.textval = /^(\D)+$/;

  (function init() {
    generateAgeOptions();
  })();

  function generateAgeOptions() {
    var ageOptions = {};
    for (i = 1; i < 100; i++) {
      ageOptions["option" + i] = i;
    }
    $scope.ageOptions = ageOptions;
  }

  $scope.submitForm = function (isValid) {
    if (isValid) {
      PersonsService.create($scope.name, $scope.gender, $scope.age);
      $scope.name = '';
      $scope.gender = '';
      $scope.age = '';
    }
  };
}]);

PersonAppControllers.controller('PersonListCtrl', ['$scope', 'PersonsService', function ($scope, PersonsService) {
  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.persons = [];
  $scope.sortType = '';
  $scope.sortReverse = false;
  $scope.editingPersons = {};
  $scope.personRemovePopupShown = false;
  $scope.personIdxToDelete = null;

  (function init() {
    populatePersons();
    setInitEdit();
  })();

  function populatePersons() {
    for (i = 0; i < 100; i++) {
      PersonsService.create();
    }
    $scope.persons = PersonsService.list;
  }

  function setInitEdit() {
    for (var i = 0; i < $scope.persons.length; i++) {
      $scope.editingPersons[$scope.persons[i].id] = false;
    }
  }

  $scope.modify = function (person) {
    $scope.editingPersons[person.id] = true;
  };

  $scope.save = function (person) {
    $scope.editingPersons[person.id] = false;
  };

  $scope.displayPersonRemovePopup = function (person) {
    $scope.personRemovePopupShown = true;
    var neededIdx = PersonsService.list.indexOf(person);
    $scope.initialIdx = neededIdx;
  };

  $scope.removePerson = function () {
    PersonsService.list.splice($scope.initialIdx, 1);
    $scope.initialIdx = null;
    $scope.personRemovePopupShown = false;
  };

  $scope.cancelPersonRemovePopup = function () {
    $scope.personRemovePopupShown = false;
  };
}]);