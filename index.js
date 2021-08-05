
const readline = require("readline");


const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var books_list = [];

function navBar() {
  readline1.question(
    ` Press 1 - Show all books! Press 2 - Add a new book! Press 3 - Quit   `,
    function (name) {
      if (name == 1) {
        for (var i = 0; i < books_list.length; i++) {
          console.log(`*  ${books_list[i]}`);
        }
        navBar();
      } else if (name == 2) {
        readline1.question(`add the name of the book  `, function (books) {
          books_list.push(books);
          console.log("added successfully!");

          navBar();
        });

        navBar();
      } else if (name == 3) {
        readline1.question(
          `Are you sure you want to quit - press Y to quit  `,
          function (quit) {
            if (quit == "Y" || quit == "y") {
              readline1.close();
            }
          }
        );
      } else {
        console.log("You have selected an invalid entry ");
        navBar();
      }
    }
  );
}
navBar();
readline1.on("close", function () {
  console.log(`buy buy `);
});
