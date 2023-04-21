console.log('Type Script Car Rental App');
interface carrent {
  cname: string;
  rentperkm: number;
  distance: number;
  roundtrip: boolean;
  calculaterent(): void;
  totalrent: number;
  discount: number;
}
class carrental implements carrent {
  cname: string;
  rentperkm: number = 0;
  roundtrip: boolean;
  totalrent: number;
  discount: number = 0;
  distance: number;
  constructor(cname: string, distance: number, roundtrip: boolean) {
    this.cname = cname;
    this.distance = distance;
    this.roundtrip = roundtrip;
    this.totalrent = this.distance * 12;
  }
  calculaterent() {
    if (this.roundtrip == true) {
      this.totalrent = this.totalrent - 0.1 * this.totalrent;
    } else {
      this.totalrent = this.totalrent;
    }
    console.log(
      `--------------------------------------------------------------------------------------------------------------`
    );
    console.log(
      `Hey ${this.cname}, You have decided to travel ${this.distance}. `
    );
    if (this.roundtrip == true) {
      console.log(
        `You have selected the round trip option. So you are eligible for 10 % Discount`
      );
    } else {
      console.log(
        `You have not selected the round trip option. So you are not eligible for 10 % Discount`
      );
    }
    console.log(`The rent you have to pay for trip is Rs.${this.totalrent}`);
  }
}
const rahul = new carrental('Rahul', 567, true);
const radha = new carrental('Radha', 456, false);

rahul.calculaterent();
radha.calculaterent();
