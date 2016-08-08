# nordtest
Person list application in AngularJS 1.5.0
![alt text](https://github.com/schiz/nordtest/raw/master/personlist.png "Person list app")

## Instructions

1. Download project `git clone https://github.com/schiz/nordtest.git`
2. Move to project directory `cd nordtest` 
3. Install npm packages from package.json `npm install`
4. Install bower packages from bower.json `bower install`
5. Replace svg-sprite template `cp -f RefactoredSvgTmpl/sprite.styl node_modules/svg-sprite/tmpl/css/sprite.styl`
5. Build project `gulp watch`

## Test task checkpoints
- **Task :** Generate 100 users containing randomized values for the following properties: id (string), name (string), gender (male or female), and age (number). 
- **Implementation :** Separate service (PersonsService) stores list of users and method .create(), that unshifts the list with new users, created by factory that accepts args: new PersonFactory(name, gender, age). If args are not provided, values are generated randomly.

---

- **Task :** Render a table that displays the users on individual rows. 
- **Implementation :** Table is rendered by controller "PersonListCtrl". At first self-invoking function calls function populatePersons(); that runs service method PersonsService.create(); and assigns value of this list from service to scope variable, which is used in template by "dir-paginate="person in persons" (similar to ng-repeat) with data binding to field values from the list in scope variable.

---

- **Task :** Create a form for adding new users to the table (remember to validate the form). 
- **Implementation :** Held by controller "AddPersonCtrl". If form is valid (validation rules set as ng validation directives), then invokes function submitForm() that creates new user with service method that accepts binded scope variables as arguments: "PersonsService.create($scope.name, $scope.gender, $scope.age);"

---

- **Task :** Paginate the data so that each page contains 20 users. 
- **Implementation :** Implemented with separate pagination directive "angular-utils'pagination", that uses separate template for markup with nh-directives, and provides pagination options, set as scope variables

---

- **Task :** Make each user editable by clicking on a table cell (inline editing). 
- **Implementation :** Held by "PersonListCtrl". At first, self-invoking function calls setInitEdit(); that iterates through users' list and writes a pair of key - user's id and value - boolean, to scope variable $scope.editingPersons. Template contains ng-hide & ng-show to display edited values or inputs with binded data for edition. Functions modify() & save() set proper boolean value to $scope.editingPersons[person.id] to define to show or hide edition form with binded data.

---

- **Task :** Add support for deleting rows by clicking on a remove icon (remember to confirm deletion). 
- **Implementation :** On ng-click is invoked function displayPersonRemovePopup() that triggers show of popup by setting $scope.personRemovePopupShown = true; and setting a value to scope variable that is the index of deleted user in the list. On confirmation the user is spliced from the list via service "PersonsService.list.splice($scope.initialIdx, 1);"

---

- **Task :** Make each column sortable upon clicking on a column header (remember to support both ascending and descending order).
- **Implementation :** Implemeted via ng-filter orderBy:sortType:sortReverse

---

- **Task :** Done (used gulp-babel) : Using a transpiler and ES.next

---

- **Task :** Using a CSS framework and a CSS pre-processor
- **Implementation :** Used bootstrap, stylus, lost

---

- **Task :** Persisting the data in the browser

---

- **Task :** Using a state container such as Redux

---

- **Task :** Adding CSS transitions where appropriate
