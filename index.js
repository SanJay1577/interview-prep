//functions
const optFind = findValue();
//functional declaration
console.log("return form dec:", someFunc(15));
function someFunc(parameter) {
  let a = 35;
  return parameter + 35;
}

//function expression
const someFuncA = function (parameter) {
  console.log(this);
  console.log(parameter);
};

//Arrow functions
const arrowA = (parms) => parms + 10;
console.log("Return from arr :", arrowA(67));

//Anonymous function as named
let anon = function () {
  console.log("Anon", 89);
};

anon();

//IIFE
(function (param) {
  console.log("IIFE", param);
})(78);

//Constructor functions
function Person(name) {
  this.name = name;
}
const person = new Person("sanjay");
console.log(person);

//Higher order function
function highOdFunc(fn) {
  //common feature
  //fn = abc()
  //some other operations
  let value = 25;
  fn(value); //abc()
}

function abc(a) {
  console.log("abc", a);
}
abc();
highOdFunc(abc);

//pure function
function giveResponse(a, b) {
  return a + b;
}
giveResponse(5, 10); //15
giveResponse(5, 10); //15
giveResponse(5, 10); //15

//Impure function
let count = 0;

function giveimresponse(a) {
  count += a;
  return count;
}
console.log(giveimresponse(5)); //5
console.log(giveimresponse(5)); //10
console.log(giveimresponse(5)); //15

//scoping
if (true) {
  var a = 15;
  console.log("outer scope", a);
  console.log("outer scope", b);
  if (true) {
    var b = 25;
    console.log("inner scope", a);
    console.log("inner scope", b);
  }
}

//Arrays

let arr = [1, 2, 3, 4, 5];

//push
arr.push(6);
console.log(arr);
//pop
arr.pop();
console.log(arr);
//shift
arr.shift();
console.log(arr);
//unshift
arr.unshift(1);
console.log(arr);
//mrf
let newArr = arr.map((ele, index, accArr) => {
  console.log(ele, index, accArr);
  return ele * 2;
});
console.log(newArr);

let newArr2 = arr.filter((ele, index, accArr) => {
  return ele != 3;
});

console.log(newArr2);

//our map
Array.prototype.zenMap = function (fn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(fn(this[i], i, this));
  }
  return temp;
};

let newZenARR = arr.zenMap((ele, index, accArr) => {
  console.log(ele, index, accArr);
  return ele * 2;
});

console.log(newZenARR);

var loc = "banglore";
const myDetails = {
  loc: "chennai",
  //wrapper function
  getLocInObject() {
    var getLocation = () => {
      console.log("inside object", this.loc); //chennai
    };
    getLocation();
  },
};
myDetails.getLocInObject();
console.log(this);
console.log("global object", this.loc); //banglore

//what this targets
//scope of this keyword
//what will be the this scope of this in normal and arrow function
// how will you change the scope if the function should be an arrow function

//Prototypes

class Students {
  constructor(name, batch) {
    this.name = name;
    this.batch = batch;
  }
  getName() {
    console.log("The name of the student is ", this.name);
  }
}

Students.prototype.getbatch = function () {
  console.log("The batch is ", this.batch);
};

const arun = new Students("Arun", "FSD");
console.log(arun);
arun.getName();
arun.getbatch();
const chitra = new Students("Chitra", "FSD2");
console.log(chitra);
chitra.getName();
chitra.getbatch();

// I want write a prototype on Array to find a value a exist or not
Array.prototype.zenExist = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) {
      return true;
    }
  }
  return false;
};
const newsetArr = [12, 34, , 67, 8, 9, 0];
console.log("Does Exist ", newsetArr.zenExist(67));
// zenExist();

//Closures
function CreateFunc() {
  const val = "somevalue";
  function giveVal() {
    console.log("Value is ", val);
  }
  return giveVal;
}

const func = CreateFunc();
console.log(func);
func();

function add(num) {
  //memory num
  return function (num2) {
    //memory num and num2
    return function (num3) {
      //memory num and num2 and num3
      return num + num2 + num3;
    };
  };
}
const sumofFive = add(5);
console.log(sumofFive);
const sumofTen = sumofFive(10);
console.log(sumofTen);
const sumOfFifteen = sumofTen(15);
console.log(sumOfFifteen);

//curried function
console.log(add(5)(10)(15));

//Optimize the porgramm
function findValue() {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  //closure
  return function (index) {
    console.log(a[index]);
  };
}

console.time("first-operation");
optFind(8);
console.timeEnd("first-operation");
