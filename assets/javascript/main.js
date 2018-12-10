var wins;
var losses;

var userCrystalNumber = 0;

// random number at start is between 19 and 120
var generatedNumber = Math.floor((Math.random() * 120 + 19));

$("#wins").text("You have " + wins + " wins.");
$("#losses").text("You have " + losses + " losses.");

// player is shown random number at start of game
$("#generated-number").text(generatedNumber);
$("#user-input-box").text(userCrystalNumber);

$(document).click(function() {
    
    // each crystal should be between 1 and 12
    var firstCrystal = Math.floor((Math.random() * 12));;
    var secondCrystal = Math.floor((Math.random() * 12));;
    var thirdCrystal = Math.floor((Math.random() * 12));;
    var fourthCrystal = Math.floor((Math.random() * 12));;


    // when the player clicks a crystal, it adds a specific amount to the player's total score

        // game hides this amount until the player clicks a crystal

        // update the score counter when they click one

    $('#crystal-1').click (function() {
        userCrystalNumber = userCrystalNumber + firstCrystal;
        $("#user-input-box").text(userCrystalNumber);
    });

    $('#crystal-2').click (function() {
        userCrystalNumber = userCrystalNumber + secondCrystal;
        $("#user-input-box").text(userCrystalNumber);
    });

    $('#crystal-3').click (function() {
        userCrystalNumber = userCrystalNumber + thirdCrystal;
        $("#user-input-box").text(userCrystalNumber);
    });

    $('#crystal-4').click (function() {
        userCrystalNumber = userCrystalNumber + fourthCrystal;
        $("#user-input-box").text(userCrystalNumber);
    });


    // the player wins if their total score matches the random number from the beginning of the game
    if(userCrystalNumber > generatedNumber) {
        alert("You lost!");
        losses++;
        $("#user-input-box").text('0');
    }

    if(userCrystalNumber == generatedNumber) {
        alert("You won!");
        wins++;
        userCrystalNumber = 0;

    }

    $("#wins").text("You have " + wins + " wins.");
    $("#losses").text("You have " + losses + " losses.");
    
})

// game restarts whenever the player wins or loses

// when game begins again, the player should see a new random number. also, all the crystals will have four new hidden values. user's score must reset to zero

// app should show the number of games the player wins and loses. do not refresh the page as a means to restart the game