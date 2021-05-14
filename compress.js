const STRING_TO_COMPRESS = "aaaabccdd"; //4a2b2cd

let counter = 1;
let prevChar = null;
let compressedString = "";

//Iterate
for (let index = 0; index < STRING_TO_COMPRESS.length; index++) {
  const currentChar = STRING_TO_COMPRESS[index];
  if (currentChar == prevChar) {
    counter++;
    prevChar = currentChar;
  } else if (index) {
    compressedString += `${counter == 1 ? "" : counter}${prevChar}`;
    counter = 1;
  }
  prevChar = currentChar;
}
compressedString += `${counter == 1 ? "" : counter}${prevChar}`;

console.log(`Result: ${compressedString}`);
