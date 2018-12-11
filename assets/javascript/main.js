var wins = 0;
var losses = 0;
var firstCrystal;
var secondCrystal;
var thirdCrystal;
var fourthCrystal;
var userCrystalNumber;
var generatedNumber;


$("#wins").text("You have " + wins + " wins.");
$("#losses").text("You have " + losses + " losses.");

function randomizeNumbers() {
    firstCrystal = Math.floor(Math.random() * 12);
    secondCrystal = Math.floor(Math.random() * 12);
    thirdCrystal = Math.floor(Math.random() * 12);
    fourthCrystal = Math.floor(Math.random() * 12);

    userCrystalNumber = 0;
    generatedNumber = Math.floor((Math.random() * 120 + 19));
    $("#generated-number").text(generatedNumber);
    $("#user-input-box").text(userCrystalNumber);
}

randomizeNumbers();

$(document).click(function() {

    function randomizeNumbers() {
        firstCrystal = Math.floor((Math.random()) * 12);
        secondCrystal = Math.floor((Math.random()) * 12);
        thirdCrystal = Math.floor((Math.random()) * 12);
        fourthCrystal = Math.floor((Math.random()) * 12);
    
        console.log(firstCrystal);
        console.log(secondCrystal);
        console.log(thirdCrystal);
        console.log(fourthCrystal);
    }

    // each crystal should be between 1 and 12
    

    // when the player clicks a crystal, it adds a specific amount to the player's total score

        // game hides this amount until the player clicks a crystal

        // update the score counter when they click one
    var userScore = 0;

    $('#crystal-1').click (function() {
        userCrystalNumber = userCrystalNumber + firstCrystal;
        $("#user-input-box").text(userCrystalNumber);
        console.log(userCrystalNumber);
    });

    $('#crystal-2').click (function() {
        userCrystalNumber = userCrystalNumber + firstCrystal;
        $("#user-input-box").text(userCrystalNumber);
    });

    $('#crystal-3').click (function() {
        userCrystalNumber = userCrystalNumber + firstCrystal;
        $("#user-input-box").text(userCrystalNumber);
    });

    $('#crystal-4').click (function() {
        userCrystalNumber = userCrystalNumber + firstCrystal;
        $("#user-input-box").text(userCrystalNumber);
    });

   
    // the player wins if their total score matches the random number from the beginning of the game
    if(userCrystalNumber > generatedNumber) {
        alert("You lost!");
        losses++;
        userCrystalNumber = 0;
        generatedNumber = Math.floor((Math.random() * 120 + 19));
        $("#generated-number").text(generatedNumber);
        $("#user-input-box").text(userCrystalNumber);
        randomizeNumbers();
    }

    if(userCrystalNumber == generatedNumber) {
        alert("You won!");
        wins++;
        userCrystalNumber = 0;
        generatedNumber = Math.floor((Math.random() * 120 + 19));
        $("#generated-number").text(generatedNumber);
        $("#user-input-box").text(userCrystalNumber);
        randomizeNumbers();
    }

    $("#wins").text("You have " + wins + " wins.");
    $("#losses").text("You have " + losses + " losses.");
    
})

// game restarts whenever the player wins or loses

// when game begins again, the player should see a new random number. also, all the crystals will have four new hidden values. user's score must reset to zero

// app should show the number of games the player wins and loses. do not refresh the page as a means to restart the game