//callbacks
//function which executes or calls another function

//async callback function

function execution(cb) {
  console.log("prgram started");
  setTimeout(() => {
    cb();
  }, 2000);
  console.log("program ended");
}

function display(cb) {
  setTimeout(() => {
    const data = "fetched data";
    console.log(data);
    cb(data);
  }, 3000);
}

function anotherCallback(data) {
  console.log("anotherCallback", data);
}
// give an example of callback hell?
// execution(() => {
//   display(anotherCallback, () => {
//           display(anotherCallback), () => {
//                     display(anotherCallback), () => {
//                               display(anotherCallback));
// });

//convert callback function to promise
//create an promise and execute it

//promise provider
const newPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("sucessfully rejcted");
    }, 2000);
  });
};

//promise consumer
// newPromise()
//   .then((data) => {
//     console.log("success1", data);
//     return data;
//   })
//   .then((data2) => {})
//   .then((data3) => {
//     console.log("success-3", data3);
//     return data3;
//   })
//   .then((data4) => {
//     console.log("success-4", data4);
//   });

//
const handlePromise = async () => {
  try {
    let data = await newPromise();
    ////
    ////
    data += " changed in async";
    console.log(data);
  } catch (error) {
    console.log("ERROR", error);
  }
};

handlePromise();
