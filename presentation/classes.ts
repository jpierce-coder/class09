class User{
  name:string = '';
  age:number = 0;
  
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}

let adam = new User('Adam', 23);