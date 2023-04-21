var Rental = /** @class */ (function () {
    function Rental(customer, car, startDate, endDate) {
        this.customer = customer;
        this.car = car;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPrice = this.calculatePrice();
        this.discount = this.calculateDiscount();
    }
    Rental.prototype.calculatePrice = function () {
        var timeDiff = Math.abs(this.endDate.getTime() - this.startDate.getTime());
        var numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return numDays * this.car.dailyRate;
    };
    Rental.prototype.calculateDiscount = function () {
        var daysUntilRental = Math.ceil((this.startDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
        if (daysUntilRental > 7) {
            return 0.2 * this.totalPrice;
        }
        else {
            return 0;
        }
    };
    Rental.prototype.displayDetails = function () {
        console.log("Rental Details:\n    Customer Name: ".concat(this.customer.name, "\n    Customer Email: ").concat(this.customer.email, "\n    Customer Phone: ").concat(this.customer.phone, "\n    Car Make: ").concat(this.car.make, "\n    Car Model: ").concat(this.car.model, "\n    Car Year: ").concat(this.car.year, "\n    Start Date: ").concat(this.startDate.toLocaleDateString(), "\n    End Date: ").concat(this.endDate.toLocaleDateString(), "\n    Total Price: ").concat(this.totalPrice, "\n    Discount: ").concat(this.discount, "\n    Final Price: ").concat(this.totalPrice - this.discount, "\n    "));
    };
    return Rental;
}());
var CarRentalSystem = /** @class */ (function () {
    function CarRentalSystem() {
        this.users = [];
        this.availableCars = [];
        this.rentedCars = [];
    }
    CarRentalSystem.prototype.addUser = function (name, email, phone) {
        var user = { name: name, email: email, phone: phone };
        this.users.push(user);
    };
    CarRentalSystem.prototype.addCar = function (make, model, year, dailyRate, available) {
        var car = { make: make, model: model, year: year, dailyRate: dailyRate, available: available };
        this.availableCars.push(car);
    };
    CarRentalSystem.prototype.rentCar = function (customer, car, startDate, endDate) {
        var availableCar = this.availableCars.find(function (car) { return car.available; });
        if (availableCar) {
            var rental = new Rental(customer, car, startDate, endDate);
            availableCar.available = false;
            this.rentedCars.push(rental);
            return rental;
        }
        else {
            return undefined;
        }
    };
    CarRentalSystem.prototype.displayUserDetails = function () {
        console.log('User Details:');
        this.users.forEach(function (user) {
            console.log("Name: ".concat(user.name, " Email: ").concat(user.email, " Phone: ").concat(user.phone));
        });
    };
    CarRentalSystem.prototype.displayAvailableCars = function () {
        console.log('Available Cars:');
        this.availableCars.forEach(function (car) {
            console.log("Make: ".concat(car.make, " Model: ").concat(car.model, " Year: ").concat(car.year, " Daily Rate: ").concat(car.dailyRate));
        });
    };
    return CarRentalSystem;
}());
