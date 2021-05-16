function reverseArray(a) {
  let reversedArray = [];
  for (let i = a.length; i > 0; i--) {
    reversedArray.push(a[i - 1]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3]));
