`use strict`;

let userAns1 = prompt(`What's the "official" name of JavaScript?`, "ECMAScript")

if (userAns1 == `ECMAScript`){
    alert("Right!")
}else{
    alert("You don't know? ECMAScript!")
}

let userAns2 = prompt("Enter a number!",`1`)

if (Number(userAns2) >= 1){
    alert(`1`)
}else if(Number(userAns2) < 0){
    alert(`-1`)
}else if (Number(userAns2 == 0)){
    alert(`0`)
}

let login = prompt("ID?",`Employee`);
let message = (login == `Employee`) ? `Hello`:
    (login == `Director`) ? `Greetings!`:
    (login == ``) ? `No login`:
    ``;

alert(message)

let result = (a + b < 4) ? `Below` :`Over`;

