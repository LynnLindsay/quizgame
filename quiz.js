var color = 'green'; 
var food = 'tacos';
var music = 'BOB DYLAN';
var book = 'BIBLE';
var activity = 'swim';
var counter = 0;
var crown = "";
alert('Welcome to my quiz. Answer the questions correctly and you will recieve a crown!');
var colorGuess = prompt('Do I like the color green or the color burgundy better?');
if (colorGuess === color) {
  alert('Good job, keep going!');
  counter = counter + 1;
} else {
  var colorWrong = alert('Sorry you are gonna get a shabby crown.');
}
var foodGuess = prompt('Do I prefer snails or tacos?');
if (foodGuess === food) {
  alert('If you had missed that one I would have been mad!');
  counter = counter + 1;
} else {
  var foodWrong = alert('Dang, things are getting shabbier!');
}
var musicGuess = prompt('Do I like Bob Dylan or Ludacris better?'); 
if (musicGuess.toUpperCase() === music) {
  alert('The computer has determined you aren\'t stupid.');
  counter = counter + 1;
} else {
   var musicWrong = alert('Do you even know me at all?');
}
var bookGuess = prompt('Is my favorite book the Bible or the phone book?'); 
if (bookGuess.toUpperCase() === book) {
  alert('You are gonna look pretty in your fancy crown.');
  counter = counter + 1;
} else {
  var bookWrong = alert('You got one more chance.');
}
var activityGuess = prompt('Would I rather swim or get a cavity filled?'); 
if (activityGuess === activity) {
  alert('You do love me.');
  counter = counter + 1;
} else {
  var activityWrong = alert('you\'re fired.');
}                                      
if (counter === 5) {
  crown = 'gold crown';
} else if (counter === 4 || counter === 3) {
  crown = 'silver crown';
} else if (counter === 2 || counter === 1) {
  crown = 'bronze crown';
} else {
  crown = 'no crown, you peasant.';
}
  
document.write('You got ' + counter + ' answers correct. You will now receive a ' + crown + '.');