export default class Cosmic {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
  }
}

// Cosmic.prototype.convertAge = function () {
//   this.mercuryAge = Math.floor(this.age / 0.24);
//   this.venusAge = Math.floor(this.age / 0.62);
//   this.marsAge = Math.floor(this.age / 1.88);
//   this.jupiterAge = Math.floor(this.age / 11.86);
// };
