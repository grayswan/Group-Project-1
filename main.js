function addListItem() {
  var name = $('#namefield').val();
  $('p').append(name);
  $('.overlay').hide(1200);
}

/*the code above represents the function that lets the user
provide a name and start the game. The name is added to the namefield
element in the HTML. The overlay is then hidden.
*/

$(function(){
  $('.addButton').on('click', addListItem);
});

/*Jquery use on the .on method, which is used to handle all events.
when the addButton is click, the addListItem function will run.
*/

                     // OVERVIEW //
// Function 1 //
// X makes move. It's immediately dispalyed. By way of the POST function,
// player X's name and position are sent to the backend. While this is happening,
// player Y's board is disabled. Once player X makes a move, her board
// becomes disabled.

// Function 2 //
// Once the upadated game board reponse is received, the board is appended with
// upadated status. The board will be refreshed at a set interval. Now player Y
// will see player X's move and her board will be enabled so that she can make
// a move.

// Create global variables similar to these?
var Game = new Object();
Game.timeout = 1000;
Game.square_clicker_enabled = false;

$(document).ready(function() {
  const API_ROOT = IP address <--- ????

// When the add button is clicked, send the value of the namefield to backend
  function newGame() {
    $('#add').on('click', newGame)
    method: 'POST',
    $.ajax(API_ROOT + '/game', {
      data: { #namefield: $('input[name=#namefield]', this).val() }
      .done(function) ?
    // somehow append the data received i.e. whether the player has been assigned to X or O.
    // Maybe a newPlayer function??
  }
};
  // Call the function above
  $(function() {
    $('#add').on('click', newGame);
  });

// When a square is clicked send the player name and square selected
  $('.square').on('click', function (event) {
    method: 'POST',
    $.ajax(API_ROOT + '/move', {
      data: { .square, this).val() }
      // Disbale board for other player. Write it here?
    }
  });

// Requesting updating board status and updating board so other player can go.
// Enable other player's board. This function is all wrong but I think there should be
// a handleBoard function or an updateBaord function here.
  $.ajax(API_ROOT + '/game', {
    method: 'GET'
    var handleBoard = function(data) {
    $.each(data, function(entry) {
      .done(function(data) {
        handleBoard(data);
      })
    };
  };

// Just copied this code. Not quite sure how to implement it or where.
var intervalID = window.setInterval(code, delay);
.fail(handleAJAXError);
};
