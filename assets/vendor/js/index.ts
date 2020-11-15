// ham kieu generic

function xem<T>(x: T):T{
  return x;
}
console.log(xem<string>('day la kieu string trong ham generic'));


// genneric trong class
class Computer {
  static show<T>(x:T[]) :void {
    console.log(x);
  }
}
Computer.show<string>(['Dell', 'HP', 'MacBook']);
Computer.show<any>(['Dell', 5000, 'Asus']);


// class gennerric

class opdt<X,Y,Z>{

  id: X;
  ten:Y;
  gia: Z;
  constructor(id:X, ten:Y, gia:Z){
    this.id = id;
    this.ten = ten;
    this.gia = gia;
  }
  xem(): string{
    return (
      `
        id :${this.id}
        ten: ${this.ten}
        gia: ${this.gia}
      `
    );
  }
}
let op1 = new opdt<number,string,number>(1,'iphone', 20000);
console.log(op1.xem());

let op2 = new opdt<string,string,number>('1','iphone', 20000);
console.log(op2.xem());




// namespace va e
module phone{
   export class String{
  }
  export class Number{
  }
}
let coca = new phone.String();
let cocaca = new phone.Number();
