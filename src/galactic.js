export default class Cosmic {
  constructor(name, age, lifeExpect) {
    this.name = name;
    this.age = age;
    this.life = lifeExpect;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
    this.mercuryYearsLeft;
    this.venusYearsLeft;
    this.marsYearsLeft;
    this.jupiterYearsLeft;
  }

  convertPlanetAges() {
    this.mercuryAge = Math.floor(this.age / 0.24);
    this.venusAge = Math.floor(this.age / 0.62);
    this.marsAge = Math.floor(this.age / 1.88);
    this.jupiterAge = Math.floor(this.age / 11.86);
  }

  lifeExpectancy() {
    this.mercuryYearsLeft = Math.floor(this.life / 0.24 - this.age / 0.24);
    this.venusYearsLeft = Math.floor(this.life / 0.62 - this.age / 0.62);
    this.marsYearsLeft = Math.floor(this.life / 1.88 - this.age / 1.88);
    this.jupiterYearsLeft = Math.floor(this.life / 11.86 - this.age / 11.86);
  }

  extraLife() {
    this.lifeExpectancy();
    if (this.mercuryYearsLeft < 0) {
      this.mercuryYearsPast = this.mercuryYearsLeft * -1;
      this.venusYearsPast = this.venusYearsLeft * -1;
      this.marsYearsPast = this.marsYearsLeft * -1;
      this.jupiterYearsPast = this.jupiterYearsLeft * -1;
    }
  }
}
