// Examples of Types in TS

let firstName:string = '';
let num:number = 10;
let on:boolean = true;
let place:any;
let nothing:null = null;
let names:string[] = ['John', 'Amy'];
let numText:number | string = ''; // Union allows multiple types
let user: {
  name:string;
  age:number
} = {
  name: 'John',
  age: 43
}

// ERROR must be type STRING as defined initially
// firstName = 3;

// ERROR must be defined first
// console.log(num);


// FUNCTIONS in TS

function printMyName(name:string):void {
  console.log(name);
}

console.log(printMyName('John')) // can't put number as parameter, see above function, declared for strings
