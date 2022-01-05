export default class Cosmic {
  constructor(name, age, lifeExpect) {
    this.name = name;
    this.age = age;
    this.life = lifeExpect;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  convertPlanetAges() {
    this.mercuryAge = Math.floor(this.age / 0.24);
    this.venusAge = Math.floor(this.age / 0.62);
    this.marsAge = Math.floor(this.age / 1.88);
    this.jupiterAge = Math.floor(this.age / 11.86);
  }

  lifeExpectancy() {
    let lifeEx = [];
    lifeEx.push(Math.floor(this.life / 0.24) - Math.floor(this.age / 0.24));
    lifeEx.push(Math.floor(this.life / 0.62) - Math.floor(this.age / 0.62));
    lifeEx.push(Math.floor(this.life / 1.88) - Math.floor(this.age / 1.88));
    lifeEx.push(Math.floor(this.life / 11.86) - Math.floor(this.age / 11.86));
    return lifeEx;
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
