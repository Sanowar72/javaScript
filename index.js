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
    // console.log(obj1);

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
    //             // console.log("hiii");
    //         }
        
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
    //        return `hii may name is ${this.myname} i have ${this.mycar} whose top speed is ${this.topspeed};
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
    function fac(a){
        var value=1;
        for(var i=a;i>1;i--){
            value=value*i;
        }
        return value;

    }
    console.log(fac(5));
        
    