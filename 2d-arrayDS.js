// const inputArray = [
//   [-9, -9, -9, 1, 1, 1],
//   [0, -9, 0, 4, 3, 2],
//   [-9, -9, -9, 1, 2, 3],
//   [0, 0, 8, 6, 6, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

const inputArray = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
];

const hourglassSum = (valueArray) => {
  return valueArray.reduce((previous, current) => {
    return previous + current;
  });
};

const getHourglassFromArray = (array) => {
  const arrayXSize = array.length;
  const arrayYSize = array[0].length;

  let maxHourglassValue = null;

  for (let cordY = 1; cordY < arrayYSize - 1; cordY++) {
    for (let cordX = 1; cordX < arrayXSize - 1; cordX++) {
      let hourglassArray = [
        array[cordY - 1][cordX - 1],
        array[cordY - 1][cordX],
        array[cordY - 1][cordX + 1],
        array[cordY][cordX],
        array[cordY + 1][cordX - 1],
        array[cordY + 1][cordX],
        array[cordY + 1][cordX + 1],
      ];
      let hourglassValue = hourglassSum(hourglassArray);
      if (maxHourglassValue == null) maxHourglassValue = hourglassValue;
      if (hourglassValue > maxHourglassValue)
        maxHourglassValue = hourglassValue;
    }
  }
  console.log(maxHourglassValue);
  return maxHourglassValue;
};

getHourglassFromArray(inputArray);
