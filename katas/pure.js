const removeLastNumber = (array) => {
  //return new array and dont mutate original
  const copyArray = [...array];
  copyArray.pop();

  //return same array and mutute array
  //   array.pop();

  return array.length === 0 ? array : copyArray;

  //return new array but mutate original
  //   return array.length === 0
  //     ? array
  //     : array.map((number, index) => {
  //         if (index !== array.length - 1) {
  //           return number;
  //         } else {
  //           number = 10;
  //         }
  //       });
};

module.exports = removeLastNumber;
