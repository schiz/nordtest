# nordtest

## Instructrions

1. Download project `git clone https://github.com/schiz/nordtest.git`
2. Move to project directory `cd nordtest` 
3. Install npm packages from package.json `npm install`
4. Install bower packages from bower.json `bower install`
5. Replace svg-sprite template `cp -f RefactoredSvgTmpl/sprite.styl node_modules/svg-sprite/tmpl/css/sprite.styl`
5. Build project `gulp watch`

## Test task checkpoints
- **Task :** Generate 100 users containing randomized values for the following properties: id (string), name (string), gender (male or female), and age (number). **Description :** Separate service (PersonsService) stores list of users and method .create(), that unshifts the list with new users, created by factory that accepts args: new PersonFactory(name, gender, age). If args are not provided, values are generated randomly.
- **Task :** Render a table that displays the users on individual rows. **Description :** Table is rendered by controller "PersonListCtrl". At first self-invoking function calls function populatePersons(); that runs service method PersonsService.create(); and assigns value of this list from service to scope variable, which is used in template by "dir-paginate="person in persons" (similar to ng-repeat) with data binding to field values from the list in scope variable.
- **Task :** Create a form for adding new users to the table (remember to validate the form)
- **Task :** Paginate the data so that each page contains 20 users
- **Task :** Make each user editable by clicking on a table cell (inline editing)
- **Task :** Add support for deleting rows by clicking on a remove icon (remember to confirm deletion)
- **Task :** Make each column sortable upon clicking on a column header (remember to support both ascending and descending order)

- **Task :** Done (used gulp-babel) : Using a transpiler and ES.next
- **Task :** Done (stylus, lost, bootstrap) : Using a CSS framework and a CSS pre-processor
- **Task :** ? : Persisting the data in the browser
- **Task :** ? : Using a state container such as Redux
- **Task :** ? : Adding CSS transitions where appropriate
