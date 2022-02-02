// let character = prompt("What is your fav char?");
// console.log(character + ' is your favorite charactor.');
// let character_color = prompt("What is the main color of "+ character + " ?");
// console.log(character + ' is ' + character_color );

let randomNum = Math.floor(Math.random() * 101);
let leftNum = 1;
let rightNum = 100;
let num = 0
while (num != randomNum){
    num = prompt('Guess the number between ' + leftNum + ' and '+ rightNum +' inclusive or input other numbers to see the secet number.');
    if(num >= rightNum || num<= leftNum){
        alert('You lose.\n'+ 'The secret number is '+ randomNum);
        break;
    }
    if (randomNum <= num)
        rightNum = num ;
    else leftNum = num ;
}
alert('Matched! You win.\n'+'The secret number is '+ randomNum);