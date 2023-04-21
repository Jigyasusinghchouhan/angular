interface User {
  name: string;
  email: string;
  phone: string;
}

interface Car {
  make: string;
  model: string;
  year: number;
  dailyRate: number;
  available: boolean;
}

class Rental {
  customer: User;
  car: Car;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  discount: number;

  constructor(customer: User, car: Car, startDate: Date, endDate: Date) {
    this.customer = customer;
    this.car = car;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrice = this.calculatePrice();
    this.discount = this.calculateDiscount();
  }

  calculatePrice() {
    const timeDiff = Math.abs(
      this.endDate.getTime() - this.startDate.getTime()
    );
    const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return numDays * this.car.dailyRate;
  }

  calculateDiscount() {
    const daysUntilRental = Math.ceil(
      (this.startDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
    );
    if (daysUntilRental > 7) {
      return 0.2 * this.totalPrice;
    } else {
      return 0;
    }
  }

  displayDetails() {
    console.log(`Rental Details:
    Customer Name: ${this.customer.name}
    Customer Email: ${this.customer.email}
    Customer Phone: ${this.customer.phone}
    Car Make: ${this.car.make}
    Car Model: ${this.car.model}
    Car Year: ${this.car.year}
    Start Date: ${this.startDate.toLocaleDateString()}
    End Date: ${this.endDate.toLocaleDateString()}
    Total Price: ${this.totalPrice}
    Discount: ${this.discount}
    Final Price: ${this.totalPrice - this.discount}
    `);
  }
}

class va {
  users: User[];
  availableCars: Car[];
  rentedCars: Rental[];

  constructor() {
    this.users = [];
    this.availableCars = [];
    this.rentedCars = [];
  }

  addUser(name: string, email: string, phone: string) {
    const user: User = { name, email, phone };
    this.users.push(user);
  }

  addCar(
    make: string,
    model: string,
    year: number,
    dailyRate: number,
    available: boolean
  ) {
    const car: Car = { make, model, year, dailyRate, available };
    this.availableCars.push(car);
  }

  rentCar(customer: User, car: Car, startDate: Date, endDate: Date) {
    const availableCar = this.availableCars.find((car) => car.available);
    if (availableCar) {
      const rental = new Rental(customer, car, startDate, endDate);
      availableCar.available = false;
      this.rentedCars.push(rental);
      return rental;
    } else {
      return undefined;
    }
  }

  displayUserDetails() {
    console.log('User Details:');
    this.users.forEach((user) => {
      console.log(
        `Name: ${user.name} Email: ${user.email} Phone: ${user.phone}`
      );
    });
  }

  displayAvailableCars() {
    console.log('Available Cars:');
    this.availableCars.forEach((car) => {
      console.log(
        `Make: ${car.make} Model: ${car.model} Year: ${car.year} Daily Rate: ${car.dailyRate}`
      );
    });
  }
}
