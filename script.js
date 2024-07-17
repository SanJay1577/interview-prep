//call apply and bind
//creates context
var name = "global";
//call function
function sayMyName(batch, an) {
  return `Hey ${this.name} are your starting ${batch}, ${an}?`;
}
//context part
var obj = {
  name: "CALL",
};
var obj2 = {
  name: "APPLY",
};
var obj3 = {
  name: "APPLY",
};
//call method
console.log(sayMyName.call(obj, "CF", 1));
//apply functions
console.log(sayMyName.apply(obj2, ["CF", 2]));
//bind functions
const sayFunc = sayMyName.bind(obj3, "CF", 3);
console.log(sayFunc());

//questions to solve
const batch = "B77";
var student = {
  name: "student_name",
  batch: "B87",
  getbatch: function () {
    return this.batch;
  },
};

var student2 = {
  batch: "B97",
};
console.log(student.getbatch.call(student2));

const market = [
  {
    shop_name: "Shop1",
    special: "Mango",
  },
  {
    shop_name: "Shop2",
    special: "Apple",
  },
];

function printMarkets() {
  this.show = function () {
    console.log(`${this.shop_name} : ${this.special}`);
  };
  this.show();
}

for (let i = 0; i < market.length; i++) {
  printMarkets.call(market[i]);
}

//array.push
///use apply method
const arr = [1, 2, 3];
const ele = [4, 5, 6];
arr.push.apply(arr, ele);
console.log(arr);

//give me an example of chaining in bind function
// arr.map().filter().reduce()
//chain a bind function with two different object
// {name : "Sanjay"} , {name : Praveen}
// function fn() {
//   console.log(this.name);
// }

// fn = fn.bind({ name: "sanjay" }).bind({ name: "praveen" });
// fn();

//composition questions
function addTen(num) {
  return num + 10; //26
}

function subFive(num) {
  return num - 5; // 16
}

function mulByThree(num) {
  return num * 3; //21
}

const iterate = calculateAll(addTen, subFive, mulByThree);
console.log(iterate(7));

function calculateAll(...funcs) {
  return function (firstNum) {
    let res = firstNum;
    for (let i = funcs.length - 1; i >= 0; i--) {
      res = funcs[i](res);
    }
    return res;
  };
}
