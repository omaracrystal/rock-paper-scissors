$(document).on('ready', function() {

    var humanScore = 0;

    var computerScore = 0;


    $("p").on("click", function() {
        var userChoice = $(this).html();


        var computerChoice = Math.random();

        if (computerChoice < 0.34) {

            computerChoice = "rock";

        } else if (computerChoice <= 0.67) {

            computerChoice = "paper";

        } else {

            computerChoice = "scissors";
        }

        console.log("Computer: " + computerChoice);

        function compare(choice1, choice2) {

            if (choice1 === choice2) {
                console.log("The result is a tie!");

            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    console.log("Rock wins!");
                    humanScore++;
                } else {
                    console.log("paper wins");
                    computerScore++;
                }
            } else if (choice1 === "paper") {
                if (choice2 === "rock") {
                    console.log("paper wins");
                    humanScore++;
                } else {
                    console.log("scissors wins!");
                    computerScore++;
                }

            } else if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    console.log("Rock wins!");
                    computerScore++;
                } else if (choice2 === 'paper') {
                    console.log("scissors wins!");
                    humanScore++;
                }
            }
        }
        compare(userChoice, computerChoice);
        $('#humanscore').html(humanScore);
        $('#computerscore').html(computerScore);

    });

});
