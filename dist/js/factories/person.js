var PersonAppFactories = angular.module('PersonAppFactories', []);

PersonAppFactories.factory('PersonFactory', function () {

  function newPerson(name, gender, age) {
    this.id = generateRandomString();
    this.name = name || generateRandomString();
    this.gender = gender || generateRandomGender();
    this.age = age || generateRandomAge();
  }

  function generateRandomString() {
    var string = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++) {
      string += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return string;
  }

  function generateRandomGender() {
    var MaleBool = [true, false],
        isMale = Math.floor(Math.random() * MaleBool.length + 1);
    return isMale === 2 ? 'Female' : 'Male';
  }

  function generateRandomAge() {
    return Math.floor(Math.random() * 90 + 1);
  }
  return newPerson;
});