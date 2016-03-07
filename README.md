# nordtest

## Instructrions

1. Download project `git clone https://github.com/schiz/nordtest.git`
2. Move to project directory `cd nordtest` 
3. Install npm packages from package.json `npm install`
4. Install bower packages from bower.json `bower install`
5. Replace `../node-modules/svg-sprite/tmpl/css/sprite.styl` with `../RefactoredSvgTmpl/sprite.styl`
5. Build project `gulp watch`

## Test task checkpoints
- Done: Generate 100 users containing randomized values for the following properties: id (string), name (string), gender (male or female), and age (number)
- Done: Render a table that displays the users on individual rows
- Done: Create a form for adding new users to the table (remember to validate the form)
- Done: Paginate the data so that each page contains 20 users
- Done: Make each user editable by clicking on a table cell (inline editing)
- Done: Add support for deleting rows by clicking on a remove icon (remember to confirm deletion)
- Done: Make each column sortable upon clicking on a column header (remember to support both ascending and descending order)

- Done (used gulp-babel) : Using a transpiler and ES.next
- Done (stylus, lost, bootstrap) : Using a CSS framework and a CSS pre-processor
- ? : Persisting the data in the browser
- ? : Using a state container such as Redux
- ? : Adding CSS transitions where appropriate
