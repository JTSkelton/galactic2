import Cosmic from "./../src/galactic.js";

describe("Cosmic Age Test", () => {
  test("should correctly create a Cosmic object with name and age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.name).toEqual("Jack");
    expect(person.age).toEqual(31);
  });

  test("should correctly calcualte planet ages and store them in object", () => {
    const person = new Cosmic("Jack", 31);
    const personAges = person.convertAge();
    expect(personAges.mercuryAge).toEqual(129);
    expect(personAges.venusAge).toEqual(50);
    expect(personAges.marsAge).toEqual(16);
    expect(personAges.jupiterAge).toEqual(2);
  });
});
