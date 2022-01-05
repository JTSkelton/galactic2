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

   // expect(person.convertAge()).toEqual(50);
    // expect(person.convertAge()).toEqual(16);
    // expect(person.convertAge()).toEqual(2);
});
