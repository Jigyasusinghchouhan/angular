console.log('Type Script Car Rental App');
var carrental = /** @class */ (function () {
    function carrental(cname, distance, roundtrip) {
        this.rentperkm = 0;
        this.discount = 0;
        this.cname = cname;
        this.distance = distance;
        this.roundtrip = roundtrip;
        this.totalrent = this.distance * 12;
    }
    carrental.prototype.calculaterent = function () {
        if (this.roundtrip == true) {
            this.totalrent = this.totalrent - 0.1 * this.totalrent;
        }
        else {
            this.totalrent = this.totalrent;
        }
        console.log("--------------------------------------------------------------------------------------------------------------");
        console.log("Hey ".concat(this.cname, ", You have decided to travel ").concat(this.distance, ". "));
        if (this.roundtrip == true) {
            console.log("You have selected the round trip option. So you are eligible for 10 % Discount");
        }
        else {
            console.log("You have not selected the round trip option. So you are not eligible for 10 % Discount");
        }
        console.log("The rent you have to pay for trip is Rs.".concat(this.totalrent));
    };
    return carrental;
}());
var rahul = new carrental('Rahul', 567, true);
var radha = new carrental('Radha', 456, false);
rahul.calculaterent();
radha.calculaterent();
