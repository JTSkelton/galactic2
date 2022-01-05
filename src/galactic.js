export default class Cosmic {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
  }

  convertMercuryAge() {
    let mercuryAge = Math.floor(this.age / 0.24);
    return mercuryAge;
  }

  // this.venusAge = Math.floor(this.age / 0.62);
  //   this.mercuryAge = Math.floor(this.age / 0.24);
  //   this.jupiterAge = Math.floor(this.age / 11.86);
}
