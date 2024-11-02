// Your code here
class Person {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static introducePeople(persons) {
    if (!Array.isArray(persons)) {
      throw new Error("introducePeople only takes an array as an argument.");
    } else {
      for (let idx = 0; idx < persons.length; idx++) {
        let person = persons[idx];

        if (!(person instanceof Person)) {
          throw new Error("All items in array must be Person class instances.");
        } 
      }

      persons.forEach((person) => {
        person.introduce();
      });
    }
    return;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
}

class Book {};

const p1 = new Person("Yinka", "Adeniji", 30);
const p2 = new Person("Rahmon", "Adeniji", 30);
const p3 = new Book();

try {
  Person.introducePeople([p1, p2]);
} catch (err) {
  console.error(`${err.name}: ${err.message}`);
}

// console.log(Person.introducePeople([p1, p2, p3]));
// console.log(p1.introduce());

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}