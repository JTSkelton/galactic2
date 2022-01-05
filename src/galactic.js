export default class Cosmic {
  constructor(name, age, lifeExpect) {
    this.name = name;
    this.age = age;
    this.life = lifeExpect;
  }

  convertMercuryAge() {
    let mercuryAge = Math.floor(this.age / 0.24);
    return mercuryAge;
  }

  convertVenusAge() {
    let venusAge = Math.floor(this.age / 0.62);
    return venusAge;
  }

  convertMarsAge() {
    let marsAge = Math.floor(this.age / 1.88);
    return marsAge;
  }

  convertJupiterAge() {
    let jupiterAge = Math.floor(this.age / 11.86);
    return jupiterAge;
  }

  lifeExpectancy() {
    let lifeEx = [];
    lifeEx.push(Math.floor(this.life / 0.24));
    lifeEx.push(Math.floor(this.life / 0.62));
    lifeEx.push(Math.floor(this.life / 1.88));
    lifeEx.push(Math.floor(this.life / 11.86));
    return lifeEx;
  }
}
