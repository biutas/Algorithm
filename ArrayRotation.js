const array = [1, 2, 3, 4, 5];

const rotateLeft = (d, arr) => {
  let tempArray = arr.slice(0, d);
  arr = arr.slice(d);
  arr = [...arr, ...tempArray];
  return arr;
};

console.log(rotateLeft(4, array));
