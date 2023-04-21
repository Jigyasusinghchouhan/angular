console.log('Employee Management');
var Firms = /** @class */ (function () {
    function Firms(eno, ename, noofdays, extradays) {
        this.eno = eno;
        this.ename = ename;
        this.noofdays = noofdays;
        this.extradays = extradays;
        this.Bonus = 100 * this.extradays;
        this.netsal = this.noofdays * 150 + this.Bonus;
    }
    Firms.prototype.calbonus = function () {
        console.log("The Bonus earned by ".concat(this.ename, " is ").concat(this.Bonus));
    };
    Firms.prototype.calnetsal = function () { };
    Firms.prototype.displaydet = function () {
        console.log("Employee ".concat(this.ename, " having employee number ").concat(this.eno, " has worked for \n        ").concat(this.noofdays, " and ").concat(this.extradays, " days extra so his bonus is ").concat(this.Bonus, " and his net salary is ").concat(this.netsal, ". "));
    };
    return Firms;
}());
var jigyasu = new Firms(1, 'jigyasu', 28, 1);
var nayan = new Firms(2, 'nayan', 23, 4);
var chinmaya = new Firms(3, 'chinmaya', 34, 8);
jigyasu.calbonus();
nayan.calbonus();
chinmaya.calbonus();
jigyasu.displaydet();
