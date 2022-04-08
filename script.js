var object = [
  { person: "Mohan", age: 2, company: "Guvi" },
  { person: "Rohan", age: 3, company: "Guvi Geeks" },
  { person: "Raju", age: 4, company: "Guvi Geek Network" },
];

console.log(`Normal for loop`);
for (let i = 0; i < object.length; i++) {
  console.log(`
  ${object[i].person}
  ${object[i].age}
  ${object[i].company}`);
}

console.log(`for each loop`);
object.forEach((item) => {
  console.log(`
  ${item.person}
  ${item.age}
  ${item.company}
  `);
});

console.log(`for in loop`);
for (let key in object) {
  console.log(`
  ${object[key].person}
  ${object[key].age}
  ${object[key].company}
  `);
}

console.log(`for of loop`);
for (let index of object) {
  console.log(`
  ${index.person}
  ${index.age}
  ${index.company}`);
}
