// 父类
class Person {
  constructor(name){
    this.name = name
  }
  doSomething(){
  }
 
}
// 子类
class A extends Person {
  constructor(name) {
    super(name)
  }
  doSomething(){
    console.log(`${this.name} do something A`)
  }
}
// 子类
class B extends Person {
  constructor(name) {
    super(name)
  }
  doSomething(){
    console.log(`${this.name} do something B`)
  }
}
let a1 = new A('xuzh');
let b1 = new B('wmmmr');
a1.doSomething();
b1.doSomething();