// random value generated
  var y=Math.floor(math.random()*10+1)
// counting the number of guesses
// made for correct Guess
if(x==y){
alert("CONGRATULATIONS"+playername+"YOU GUESSED IT RIGHT IN"+guess+"GUESS");
guess=1;
} 
// function for number guessed by user     
var x=document.getElementById("guessField").value;
if(x>y){
    guess++
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
function playAgain(){
    y=Math.floor(math.random()*10+1);
}