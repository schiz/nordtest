# nordtest

## Instructrions

1. Download project `git clone https://github.com/schiz/nordtest.git`
2. Move to project directory `cd nordtest` 
3. Install npm packages from package.json `npm install`
4. Install bower packages from bower.json `bower install`
5. Replace svg-sprite template `cp -f RefactoredSvgTmpl/sprite.styl node_modules/svg-sprite/tmpl/css/sprite.styl`
5. Build project `gulp watch`

## Test task checkpoints
- **Task :** Generate 100 users containing randomized values for the following properties: id (string), name (string), gender (male or female), and age (number). **Description :** Separate service (PersonsService) stores list of users and method .create(), that unshifts the list with new users, created by factory that accepts args: new PersonFactory(name, gender, age)
- Render a table that displays the users on individual rows
- Create a form for adding new users to the table (remember to validate the form)
- Paginate the data so that each page contains 20 users
- Make each user editable by clicking on a table cell (inline editing)
- Add support for deleting rows by clicking on a remove icon (remember to confirm deletion)
- Make each column sortable upon clicking on a column header (remember to support both ascending and descending order)

- Done (used gulp-babel) : Using a transpiler and ES.next
- Done (stylus, lost, bootstrap) : Using a CSS framework and a CSS pre-processor
- ? : Persisting the data in the browser
- ? : Using a state container such as Redux
- ? : Adding CSS transitions where appropriate
