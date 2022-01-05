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
    this.mercuryYearsLeft =
      Math.floor(this.life / 0.24) - Math.floor(this.age / 0.24);
    this.venusYearsLeft =
      Math.floor(this.life / 0.62) - Math.floor(this.age / 0.62);
    this.marsYearsLeft =
      Math.floor(this.life / 1.88) - Math.floor(this.age / 1.88);
    this.jupiterYearsLeft =
      Math.floor(this.life / 11.86) - Math.floor(this.age / 11.86);
  }

  // extraLife() {
  //   let extraLife = [];
  //   extraLife.push(Math.floor(this.life / 0.24) - Math.floor(this.age / 0.24));
  //   extraLife.push(Math.floor(this.life / 0.62) - Math.floor(this.age / 0.62));
  //   extraLife.push(Math.floor(this.life / 1.88) - Math.floor(this.age / 1.88));
  //   extraLife.push(Math.floor(this.life / 11.86) - Math.floor(this.age / 11.86));
  //   let extraLifeFilter = extraLife.filter(element => element > 0).forEach((element) => element * -1);
  //   return extraLifeFilter;
  // }
}
