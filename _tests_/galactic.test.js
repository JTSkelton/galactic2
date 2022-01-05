import Cosmic from "./../src/galactic.js";

describe("Cosmic Age Test", () => {
  test("should correctly create a Cosmic object with name and age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.name).toEqual("Jack");
    expect(person.age).toEqual(31);
  });

  test("should correctly calcualte Mercury age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.convertMercuryAge()).toEqual(129);
  });

  test("should correctly calcualte Venus age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.convertVenusAge()).toEqual(50);
  });

  test("should correctly calcualte Mars age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.convertMarsAge()).toEqual(16);
  });

  test("should correctly calcualte Jupiter age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.convertJupiterAge()).toEqual(2);
  });
});
