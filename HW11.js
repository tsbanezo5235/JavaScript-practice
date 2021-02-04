// function camelize(str) {
//   let arr = str.split('-');
//   arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
//   let ans = arr.join('');
//   return ans;
// }

// // alert(camelize('my-dog'));
// // alert(camelize('-good-dinner'));

// function filterRange(arr, a, b) {
//   return arr.filter(item => item >= a).filter(item => item <= b);
// }
// let task2 = [5, 3, 8, 1];
// let filtered = filterRange(task2, 1, 4);
// // alert(filtered);

// let task3 = [5, 2, 1, -10, 8];
// task3.sort((a, b) => b - a);
// // alert(task3);

// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let task4 = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(task4);
// // alert(sorted);

// function CalCal() {
//   this.calculate = function(inputStr) {
//     let task5_cal = inputStr.split(' ');
//     a = +task5_cal[0];
//     op = task5_cal[1];
//     b = +task5_cal[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

//     return this.methods[op](a, b);
//   };

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.addMethod = function (name, func) {
//       this.methods[name] = func;
//   };
// }
// let calc = new CalCal;
// // alert( calc.calculate("3 + 7") );

// let powerCalc = new CalCal;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// // alert( result );

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// // let users = [ john, pete, mary ];
// let task6 = users.map(item => item.name);
// // alert(task6);

// john = { name: "John", surname: "Smith", id: 1 };
// pete = { name: "Pete", surname: "Hunt", id: 2 };
// mary = { name: "Mary", surname: "Key", id: 3 };

// // users = [ john, pete, mary ];
// // let usersMapped = users.map(item => ({
// //     fullName: `${item.name} ${item.surname}`,
// //     id: item.id
// //   }));
// // alert(usersMapped[0].fullName);

// john = { name: "John", age: 25 };
// pete = { name: "Pete", age: 30 };
// mary = { name: "Mary", age: 28 };

// arr = [ pete, john, mary ];
// function sortByAge(arr) {
//   return arr.sort((a,b) => +a.age - +b.age);
// }
// sortByAge(arr);

// // // now: [john, mary, pete]
// // alert(arr[0].name); // John
// // alert(arr[1].name); // Mary
// // alert(arr[2].name); // Pete

// arr = [1, 2, 3, 4, 5];
// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// // alert(shuffle(arr));
// // alert(shuffle(arr));
// // alert(shuffle(arr));

// john = { name: "John", age: 25 };
// pete = { name: "Pete", age: 30 };
// mary = { name: "Mary", age: 29 };

// arr = [ john, pete, mary ];
// function getAverageAge(users) {
//   return users.reduce((prev, item) => prev + item.age, 0) / users.length;
// }
// // alert( getAverageAge(arr) );

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
function groupById(arr) {
    return arr.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});
}
let usersById = groupById(users);
alert(usersById['john']);
