# Application
The basic idea is that you have a 10x10 grid filled with random characters.
Then you will use the host system clock and the grid together to generate a 2 digit code.

Generator Page:
In this page you have a button to start the “generator”.
After clicking on this button the grid will be filled with random alphabetic characters (a-z), like so Position [0,1] will have a “b” and Position [8,7] will have a “c”.
If you also find an optional input field which allows the user to enter an alphabetic character (a-z) and this character will be used as a weight constant of 20% when filling the grid, like so: If a character is entered and it’s a “z”, means that 20% of the grid cells will be filled with “z” and the remaining ones with random characters.
The user is only allowed to enter a character once every 4 seconds, i.e. user cannot type repeatedly a random character.
There is a display field underneath the table with the 2 digit code.
To populate this field, the following trivial algorithm needs to be followed:
1. Get the 2 digit seconds from the clock, like so: 12:40:36.
2. Get the matching grid cell values for the positions [3,6] and [6,3], like so: “v” and “c”.
3. Count the occurrences of “v” and “c” on the entire grid, like so: v = 7, c = 9.
4. If the count is larger than 9, divide the count by the lowest integer possible in order to get a value lower or equal to 9. *roundup the result if decimal.
5. Done! That is your code: 79
Every 2 seconds the grid needs to be refreshed automatically and a different code will be generated.

Payments Page:
In this page you will show the updated code on the top (don’t forget, every 2 seconds we have a new code).
There are 2 simple form fields to add a payment name and amount and a button to add to the payments list.
Every entry on the grid will have the current code assigned to it, together with a copy of the grid (yes, the 100 cells).
This payments list should be ready to be saved to an API.
The user should be able to navigate between the 2 pages whilst not losing any information i.,e., still see the payments list.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
