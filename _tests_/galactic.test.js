import Cosmic from "./../src/galactic.js";

describe("Cosmic Age Test", () => {
  test("should correctly create a Cosmic object with name and age", () => {
    const person = new Cosmic("Jack", 31);
    expect(person.name).toEqual("Jack");
    expect(person.age).toEqual(31);
  });

  test("should correctly create a Cosmic object and run convertPlanetAges() to add planet ages to object", () => {
    const person = new Cosmic("Jack", 31, 70);
    person.convertPlanetAges();
    expect(person).toEqual(
      expect.objectContaining({
        name: "Jack",
        age: 31,
        life: 70,
        mercuryAge: 129,
        venusAge: 50,
        marsAge: 16,
        jupiterAge: 2,
      })
    );
  });

  test("should correctly calcualte years left to live on each planet", () => {
    const person = new Cosmic("Jack", 31, 70);
    person.lifeExpectancy();
    expect(person).toEqual(
      expect.objectContaining({
        name: "Jack",
        age: 31,
        life: 70,
        mercuryYearsLeft: 162,
        venusYearsLeft: 62,
        marsYearsLeft: 21,
        jupiterYearsLeft: 3,
      })
    );
  });
});
