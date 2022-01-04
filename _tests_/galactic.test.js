import Cosmic from "./../src/galactic.js";

describe("Cosmic Age Test", () => {
  test("should correctly create a Cosmic object with name and age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.name).toEqual("Jack");
    expect(person.age).toEqual(31);
  });
});
