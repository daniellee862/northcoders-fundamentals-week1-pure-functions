// ```js
// raiseSalaries(
//   [
//     { name: "Alice", salary: 3000 },
//     { name: "Bob", salary: 2000 },
//     { name: "Vel", salary: 4500 },
//   ],
//   10
// );
// /* should return
// [{ name: 'Alice', salary: 3300 },
//  { name: 'Bob', salary: 2200 },
//  { name: 'Vel', salary: 4950 }
// ]
// */
// ```;

const raiseSalaries = (array, raise) => {
  const newArray = [...array];

  newArray.forEach((person) => {
    const percent = Math.ceil((person.salary / 100) * raise);
    person.salary = person.salary + percent;
  });

  return array.length > 0 ? newArray : array;
};

module.exports = raiseSalaries;
