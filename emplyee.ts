console.log('Employee Management');
interface Employee {
  eno: number;
  ename: string;
  salary: number;
  calbonus(): void;
  calnetsal(): void;
  displaydet(): void;
  noofdays: number;
}
class Firms implements Employee {
  eno: number;
  ename: string;
  salary: number;
  noofdays: number;
  extradays: number;
  Bonus: number;
  netsal: number;
  constructor(eno: number, ename: string, noofdays: number, extradays: number) {
    this.eno = eno;
    this.ename = ename;
    this.noofdays = noofdays;
    this.extradays = extradays;
    this.Bonus = 100 * this.extradays;
    this.netsal = this.noofdays * 150 + this.Bonus;
  }

  calbonus(): void {
    console.log(`The Bonus earned by ${this.ename} is ${this.Bonus}`);
  }
  calnetsal(): void {}
  displaydet(): void {
    console.log(`Employee ${this.ename} having employee number ${this.eno} has worked for 
        ${this.noofdays} and ${this.extradays} days extra so his bonus is ${this.Bonus} and his net salary is ${this.netsal}. `);
  }
}

const jigyasu = new Firms(1, 'jigyasu', 28, 1);
const nayan = new Firms(2, 'nayan', 23, 4);
const chinmaya = new Firms(3, 'chinmaya', 34, 8);
jigyasu.calbonus();
nayan.calbonus();
chinmaya.calbonus();
jigyasu.displaydet();
