/*********************************************************** 
Polyfill
************************************************************/

console.log("polyfill practice");
/*****************************************
 * call apply and bing
 *****************************************/
const person = {
  fN: "sonu",
  lN: "Alam",
};

const printName = function (city, state) {
  console.log(this.fN, " ", this.lN, city, state);
};

// printName.call(person,"purnia", "bihar");
// printName.apply(person, ["purnia", "bihar"]);

//my polyfill

// Function.prototype.myCall = function (context, ...args) {
//   context = context ?? globalThis;
//   context = Object(context);
//   const fn = Symbol();
//   context[fn] = this;
//   const res = context[fn](...args);
//   delete context[fn];
//   return res;
// };

Function.prototype.myCall = (context, ...args) => {
  context = context ?? globalThis;
  context = Object(context);
  const fn = Symbol();
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

// printName.myCall(person, "purnia", "bihar");

Function.prototype.myApply = function (context, ...args) {
  context = context ?? globalThis;
  context = Object(context);
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const res = context[fnSymbol](...(args || []));
  delete context[fnSymbol];
  return res;
};
// printName.apply(person, ["bangalore", "karnataka"]);
// const bindFun = printName.bind(person, "somewhere");
// bindFun("finland");

Function.prototype.myBind = function (context, ...args1) {
  const originalFn = this;

  context = context ?? globalThis;
  context = Object(context);

  return function (...args2) {
    return originalFn.call(context, ...args1, ...args2);
  };
};

// const bindFun1 = printName.myBind(person);
// bindFun1("check");

/*****************************************
 * Promises
 *****************************************/

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("promise input should be array"));
    }
    const result = [];
    const total = promises.length;
    let completedPromiseCount = 0;
    if (total === 0) {
      return resolve([]);
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = res;
          completedPromiseCount++;
          if (completedPromiseCount === total) {
            return resolve(result);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    });
  });
};

// error promise test
// Promise.myAll([
//   Promise.resolve(1),
//   Promise.reject("Error check----"),
//   Promise.resolve(3),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(console.error);

// Promise.myAll([
//   new Promise((res) => setTimeout(() => res("A"), 300)),
//   new Promise((res) => setTimeout(() => res("L"), 100)),
// ]).then(console.log);

// ["A", "B"]

// Error

//my code
// Promise.myRace = function (promises) {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promises)) {
//       return reject(TypeError("input should be in array format"));
//     }
//     if (promises.length === 0) {
//       return resolve([]);
//     }
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then((result) => {
//           resolve(result);
//         })
//         .catch((err) => {
//           return reject(err);
//         });
//     });
//   });
// };

//chatgpt code
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("input should be an array"));
    }

    // IMPORTANT: do NOTHING if array is empty (promise stays pending)
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

// Promise.myRace([
//   new Promise((res) => setTimeout(() => res("A"), 300)),
//   new Promise((res) => setTimeout(() => res("L"), 200)),
//   new Promise((res, rej) => setTimeout(() => rej("J"), 100)),
// ])
//   .then(console.log)
//   .catch(console.log);

//my code
// Promise.myAllSettled = function (promises) {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promises)) {
//       return reject(new TypeError("input should be an array"));
//     }
//     if (promises.length == 0) {
//       resolve([]);
//     }
//     const result = [];
//     let settledPromise = 0;
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then((res) => {
//           result[index] = { status: "fulfilled", values: res };
//         })
//         .catch((err) => {
//           result[index] = { status: "rejected", values: err };
//         })
//         .finally(() => {
//           settledPromise++;
//           if (settledPromise === promises.length) {
//             return resolve(result);
//           }
//         });
//     });
//   });
// };

//chat Gpt
Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("input should be an array"));
    }

    const result = [];
    let settledCount = 0;
    const total = promises.length;

    if (total === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = {
            status: "fulfilled",
            value,
          };
        })
        .catch((reason) => {
          result[index] = {
            status: "rejected",
            reason,
          };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === total) {
            resolve(result);
          }
        });
    });
  });
};

// Promise.myAllSettled([
//   new Promise((res) => setTimeout(() => res("A"), 300)),
//   new Promise((res) => setTimeout(() => res("L"), 200)),
//   new Promise((res, rej) => setTimeout(() => rej("J"), 100)),
//   new Promise((res) => setTimeout(() => res("Z"), 500)),
// ]).then(console.log);

//

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray) {
      return reject(new TypeError("input must be an array"));
    }
    const promiseLength = promises.length;
    let unSettledPromise = 0;
    const result = [];
    if (promiseLength === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          unSettledPromise++;
          result[index] = err;
          if (unSettledPromise === promiseLength) {
            reject(new AggregateError(result, "All promises were rejected"));
          }
        });
    });
  });
};
// Promise.myAny([
//   Promise.reject("A"),
//   Promise.resolve("B"),
//   Promise.resolve("C"),
// ]).then(console.log);

// "B"
// Promise.myAny([Promise.reject("A"), Promise.reject("B")]).catch((err) => {
//   console.log(err instanceof AggregateError); // true
//   console.log(err.errors); // ["A", "B"]
// });

/**********
If interviewer asks:

“Which Promise method would you use?”

Answer using intent, not name:

“I need all results” → all

“I need fastest response” → race

“I need first success” → any

“I need status of everything” → allSettled

That sounds senior, not memorized.
********** */

/*************************************
 *  array prototype
 **************************************/

Array.prototype.myMap = function (callBack, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callBack.call(thisArg, this[i], i, this);
    }
  }
  return result;
};
// const myMap = [2, 4, 7].myMap((item) => item * 2);
// console.log(myMap);

Array.prototype.myFilter = function (callBack, thisArg) {
  if (typeof callBack !== "function") {
    throw TypeError("callback should be function ");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callBack.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// console.log([2, 3, 5, 6, 8].myFilter((val) => val > 4));

// later need to practice
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = this;
  let acc;
  let startIndex = 0;

  // Handle initial value
  if (arguments.length > 1) {
    acc = initialValue;
  } else {
    // Find first non-empty slot
    while (startIndex < arr.length && !(startIndex in arr)) {
      startIndex++;
    }

    if (startIndex >= arr.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    acc = arr[startIndex];
    startIndex++;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      acc = callback(acc, arr[i], i, arr);
    }
  }

  return acc;
};

// my code
// Array.prototype.myForEach = function (callBack, thisArg) {
//   // here i did mistake here i should check callBack should be function
//   // if (!Array.isArray) {
//   //   throw new TypeError("input should be an array");
//   // }

//   if (typeof callBack !== "function") {
//     throw new TypeError("input should be an array");
//   }
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       // second mistake
//       // this[i] = callBack(this[i], i, this, thisArg);

//       callBack.call(thisArg, this[i], i, this);
//     }
//   }
// };

//chat gpt code
Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};

// const myForEachArr = [2, 4, 5, 7];
// myForEachArr.myForEach((ele) => ele * 2);
// console.log(myForEachArr);

Array.prototype.mySome = function (callBack, thisArg) {
  if (typeof callBack !== "function") {
    throw new TypeError(callBack + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callBack.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
};

Array.prototype.myEvery = function (callBack, thisArg) {
  if (typeof callBack !== "function") {
    throw new TypeError(callBack + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (!callBack.call(thisArg, this[i], i, this)) return false;
    }
  }
  return true;
};

Array.prototype.myFindIndex = function (callBack, thisArg) {
  if (typeof callBack !== "function") {
    throw new TypeError(callBack + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callBack.call(thisArg, this[i], i, this)) return i;
    }
  }
  return -1;
};

Array.prototype.myFind = function (callBack, thisArg) {
  if (typeof callBack !== "function") {
    throw new TypeError(callBack + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callBack.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
  }
};

Array.prototype.myFlat = function (depth = 1) {
  const result = [];

  const flatten = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        const value = arr[i];

        if (Array.isArray(value) && depth > 0) {
          flatten(value, depth - 1);
        } else {
          result.push(value);
        }
      }
    }
  };

  flatten(this, depth);
  return result;
};

Array.prototype.myFlatMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const mapped = callback.call(thisArg, this[i], i, this);

      if (Array.isArray(mapped)) {
        result.push(...mapped); // flatten one level
      } else {
        result.push(mapped);
      }
    }
  }

  return result;
};

// console.log([1,2,3].myFlatMap(x => [x, x*2]));
// // [1,2,2,4,3,6]

// console.log([1,2,3].myFlatMap(x => x * 2));
// // [2,4,6]

// console.log([1,,3].myFlatMap(x => [x]));
// // [1,3]

const myDebounce = (callBack, delay) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callBack.apply(this, args);
    }, delay);
  };
};

const log = myDebounce(() => {
  console.log("debounce checking---->>>");
}, 500);

// log();
// log();
// log();
// log();
// log();
function myThrottle(callBack, delay) {
  let lastRan = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastRan >= delay) {
      lastRan = now;
      callBack.apply(this, args);
    }
  };
}
