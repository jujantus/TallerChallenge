const getRunLengthEncoding = (stringValue) => {
  let currCharCount = 1;
  let currChar = "";
  let encodedValue = "";
  for (let i = 0; i < stringValue.length; i++) {
    if (i !== 0 && (currChar !== stringValue[i] || currCharCount > 8)) {
      encodedValue += `${currCharCount}${currChar}`;
      currCharCount = 1;
    } else if (i !== 0 && currChar === stringValue[i]) {
      currCharCount++;
    }
    currChar = stringValue[i];
  }
  encodedValue += `${currCharCount}${currChar}`;
  return encodedValue;
};

const getSortedSquares = (numArray) =>
  numArray.map((num) => num * num).sort((a, b) => a - b);
