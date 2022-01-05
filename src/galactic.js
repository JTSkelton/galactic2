export default class Cosmic {
  constructor(name, age) {
    this.name = name;
    this.age = age;
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
}
