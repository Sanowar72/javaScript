// console.log("hello world");


// var num=5;
// let sonu=7+num++;
// let lonu= 7+num;

// console.log(num);
// console.log(sonu);

// console.log(12-"5");

// let sonu="dabba";
// let akshata="daabba";
// console.log((sonu==akshata)?'its matched':"its not matched");


// function add (a,b=5){
//     return a+b;

// }
// var asum= add(10);
// console.log(asum); 
// const arr=["aam","anar","impli","kaitha"];
// for(let i of arr){
//     console.log(i);

// }
// const arr=[1,2,3,4,5,6,7];
// let a=arr.slice(1,4);
// console.log(a);
// console.log(arr);
// const fil=arr.map((i)=>{
//     return i+3;
// }).reduce((i,j)=>{
//     return i+=j;
// })
// console.log(fil);
// const s= "sonu is a good boy";
// let m= new String(s);
// console.log(m);
// const sonu= "lorem fucking people is there in this dark world! so be safe is from this shit pople"
// let louda=sonu.slice(0,10);
// console.log(louda);
// let monu=sonu.replaceAll("is","louda");
// console.log(monu);
 



    // class student{
    //     constructor(name,age,branch){
    //         this.myname=name;
    //         this.myage=age;
    //         this.mybranch=branch;
    //     }
    //          mydata(){
    //             return`hi myname is ${this.myname} my age is ${this.myage} my branch is ${this.mybranch}`;
    //             // console.log("hiii");
    //         }
        
    // }
    // const mynum = new student('sonu',24,'ise');
    // console.log(mynum.mydata());

    // class mysonu extends student{
    //     constructor(name,age,branch,sports){
    //         super(name,age,branch);
    //         this.mysport= sports;
    //     }
    //     myfun(){
    //         return `${super.mydata()} i love to play this ${this.mysport} game`;
    //     }

    // }


    // // let sonu= new student('sonu',26,'ise');
    // // sonu.mydata();
    // let sonu = new mysonu('sonu',25,'ise','cricket');
    // // sonu.myfun();
    // console.log(sonu.myfun());


    // let myarr=[1,2,3,4,5,6,'ontjd','jsjxo','jknkc'];
    // let srrd=[...myarr,'abu','sobu','khobu'];
    // console.log(srrd);


// synchoronous example
    // const fun1=()=>{
    //     console.log("func 1 called");
    // }
    // const fun2 = ()=>{
    //     console.log("fun2 called");
    //     fun1();
    //     console.log("fun2 called again");
    // }
    // fun2()

    // asynchronous example
    // const afun1 = ()=>{
    //     console.log("afun1 called");
    //     setTimeout(() => {
    //         console.log("waiting period");
    //     },3000);
    // }

    // const afun2 = ()=>{
    //     console.log('afun2 called');
    //     afun1();
    //     console.log("again fun2 called");
    //     setTimeout(() => {
    //         console.log("fun2 time out");
    //     }, 3000);
    // }
    // afun2();
    // function currying
    // const fun1=(a)=>{
    //     return function (b) {
    //         return function (c) {
    //             let sum= a+b+c;
    //             return sum;
                
    //         }
    //     }
    // }
    // let tsum = fun1(5)(3)(5);
    // console.log(tsum);
    


    // const myobj = {
    //     name:"sonu",
    //     cls:"ise",
    //     bi:{
    //         name:"fsonu",
    //         lname:"alam"
    //     }
    // }

    // by assigning

    // const obj1= myobj;
    // // myobj.bi.name='hi sonu'
    // obj1.name='somthing';
    // console.log(obj1,myobj);
    // // console.log(myobj.bi);

    // by spread operator

    // const obj1={...myobj};
    // obj1.name='monu';
    // obj1.bi.lname='changes';
    // console.log(obj1,myobj);

    // // by json 
    // const obj1 =  JSON.parse( JSON.stringify(myobj));
    // obj1.bi.lname='koi nh';
    // console.log(obj1);
    // console.log(myobj);

    // const myarr=['hi',1,2,3,'how'];
    // const[a,...c]=myarr;
    // console.log(a,c);

    // class student{
    //     constructor(name,age,branch){
    //         this.myname=name;
    //         this.myage=age;
    //         this.mybranch=branch;
    //     }
    //          mydata(){
    //             return`hi my name is ${this.myname} my age is ${this.myage} my branch is ${this.mybranch}`;
    //          }
        
    // }
    // const mynum = new student('sonu',24,'ise');
    // console.log(mynum.mydata());




    // class Car {
    //     constructor(name,car,topspeed) {
    //       this.myname = name;
    //       this.mycar = car;
    //       this.topspeed = topspeed;
    //     }
      
    //       present() {
    //        return `hii may name is ${this.myname} i have ${this.mycar} whose top speed is ${this.topspeed}`;
    //     }
    // }
      
    //   const mycarc = new Car('sonu','audi',250);
    //   console.log(mycarc.present())



    // remove duplicate item from array

    // const a = [1,3,5,7,9,5];
    // const b = [9];
    // function dupl (a,b){
    //     const arr=[];
    //     for(let i=0;i<a.length;i++){
    //         if(b.includes(a[i])){
    //             continue;
    //         }
    //         arr.push(a[i]);
    //     }
    //     return arr;
    // }
    // console.log(dupl(a,b));


    // for(var i = 0;i<5;i++){
    //     console.log(i);
    //     setTimeout(()=>{
    //         console.log(i);
    //     },1000)
    // }


    //  factorial of a number
    // function fac(a){
    //     var value=1;
    //     for(var i=a;i>=1;i--){
            
    //         value=value*i;
    //     }
    //     return value;

    // }
    // console.log(fac(5));



    //  sum of n natural no


    // let sum=0;
    // let n=prompt("enter the no");
    // n= Number.parseInt(n);
    // let n= 5
    // for(let i=0;i<=n;i++){
    //     sum+=i;
    // }
    // console.log(sum);
    

    //  for in gives index no
    //  for of gives index value
    // let arr=['sonu','monu','ronu','tonu'];
    // for(let i in arr){
    //     console.log(i);
       
       
    // }
//  let arr=[45,56,88,46,96];
//  console.log(arr);
//  arr[0]=57;
// //  console.log(arr);
// let s = delete arr[0];
// console.log(arr);
// console.log(arr.length);
// console.log(s);
// arr.splice(1,0,102,304,532);

// console.log(arr);
// arr.splice(1,2);
// console.log(arr);


// const os = require('os');
// console.log(os.type());
// console.log(os.version());

// normal functionn currying
// const add = (a) =>(b)=>(c)=>a+b+c;
//  function add(a){
//     return function(b){
//         return function(c){ 
//             return a+b+c;
//         }
//     }
// }
// const sum = add(3)(2)(5);
// console.log(add(3)(2)(5));

// let s = " sonu is a good boy";
// let m = "chi...oo";
// // let sm = `${s} ${m}`;
// let sm=s+m;
// console.log(sm);


// infinite currying

// function add(a){
//      return function(b){
//          if(b) 
//              return add(a+b);
         
//              return a;
//      }
// }
// console.log(add(5)(6)(8)(2)(3)(4)());


// let s="hbweHMIXLAbnwn heo kwieb hvgwbd giwrd chfst";
// let m = s.toLowerCase();
// console.log(m);
// let u = s.toUpperCase();
// console.log(u);
// let l= s.split(" ").length;
// console.log(l);

// let arr="hello hii are you";
// let word = arr.split(" ");
// let sw= arr.charAt(0).toUpperCase()+arr.slice(1);
// console.log(sw);


// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// let mn = words.join(" ");
// console.log(mn);

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");
// // console.log(words);

// const s = words.map((word) => { 
//     return word[0].toUpperCase()+ word.substring(1) ; 
// })
// .join(" ")
// ;

// console.log(s)


// let arr=[23,45,54,98,704,103,12,32,45];
// let arr=[1,2,3,4,5]
// arr.sort((a,b)=>b-a);
// arr.push(10);
// arr.pop();
// arr.unshift(20);
// arr.splice(5,1,105);
// let s=arr.reduce((accu,elem)=>{
//     return accu=accu*elem;
// })
// let s= arr.filter((elem)=>{
//     return elem>50;
// });

// let s= arr.map((megha)=>{
//     return megha=megha+2;
// });
//   arr.forEach((elem)=>{
//      return elem=elem+2;
//  });


// console.log(arr);

// function sum(a,b){
//     return a+b;
// }
// let total = sum(5,10);
// console.log(total);

// const sum = (a,b) =>{
//    let s=  a+b;
//    s;
// }
// let total = sum(5,10);
// console.log(total);

// function sum (a){
//     return a;
// }

// const sum = a =>a;
   

//  let total = sum(5);
// console.log(total);

// using idex of
// function getarr(arr){
//     const myarr=[];
//     for(let i of arr){
//         if(myarr.indexOf(i)==-1){
//             myarr.push(i);
//         }
//     }
//     console.log(myarr);
// }
// getarr([1,2,3,2,4,5,3,6]);
// console.log(sarr);

// using setof

// function marr(arr){
//     const narr=[...new Set(arr)];
//     console.log(narr);
// }
// marr([1,4,7,9,2,7,1,9,4,7,3,5]);


// let arr=[3,5,8,1,9,3,6,8,45];
// arr.reverse();
// console.log(arr);


// const a=[1,2,3,4,5,6,7,8,9,10];
// const b=[1,5,9,3,4];

// function getvalue (a,b){
//     const noval=[];
// for(let i=0;i<a.length;i++){
   
//     if(b.includes(a[i])){
//         continue;
//     }
//     noval.push(a[i]);
// }
//   return noval;
// }
// console.log(getvalue(a,b));


// const arr=[1,2,3,4,5,6];
// const sum = arr.reduce((acc,ele)=> {
//     return acc=acc+ele;
// });
// console.log(sum);