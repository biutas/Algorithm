const screen = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 1, 1, 1, 1, 1],
  [1, 2, 2, 1, 1, 3, 1, 1],
  [1, 2, 1, 3, 1, 1, 1, 1],
  [1, 2, 1, 1, 2, 2, 1, 1],
  [1, 2, 2, 2, 2, 2, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

let fill = (cordX, cordY, newColor) => {
  const oldColor = screen[cordY][cordX];
  const pixelsWithSameColorQueue = [[cordX, cordY]];
  while (pixelsWithSameColorQueue) {
    let point = pixelsWithSameColorQueue[0];
    let cordX = point ? point[0] : null;
    if (cordX == null) return;
    let cordY = point ? point[1] : null;
    if (cordY == null) return;
    // Add to queue if pixel above is same color
    if (
      screen[cordY - 1] &&
      screen[cordY - 1][cordX] &&
      screen[cordY - 1][cordX] == oldColor
    )
      pixelsWithSameColorQueue.push([cordX, cordY - 1]);
    // Add to queue if pixel below is same color
    if (
      screen[cordY + 1] &&
      screen[cordY + 1][cordX] &&
      screen[cordY + 1][cordX] == oldColor
    )
      pixelsWithSameColorQueue.push([cordX, cordY + 1]);
    // Add to queue if pixel left side is same color
    if (
      screen[cordX - 1] &&
      screen[cordY][cordX - 1] &&
      screen[cordY][cordX - 1] == oldColor
    )
      pixelsWithSameColorQueue.push([cordX - 1, cordY]);
    // Add to queue if pixel right side is same color
    if (
      screen[cordX + 1] &&
      screen[cordY][cordX + 1] &&
      screen[cordY][cordX + 1] == oldColor
    )
      pixelsWithSameColorQueue.push([cordX + 1, cordY]);

    screen[cordY][cordX] = newColor;
    pixelsWithSameColorQueue.splice(0, 1);
  }
};

console.log(screen);
fill(1, 1, 5);
console.log(screen);
