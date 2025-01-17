/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number === 0 || number % 2 === 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;

  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else if (c > a && c > b) {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;

  return (
    (a === b && a + b > c) || (a === c && a + c > b) || (b === c && b + c > a)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  const firstDigit = Math.floor(num / 10);
  const secondDigit = num % 10;

  switch (firstDigit) {
    case 3:
      result += 'XXX';
      break;
    case 2:
      result += 'XX';
      break;
    case 1:
      result += 'X';
      break;
    default:
      break;
  }

  switch (secondDigit) {
    case 9:
      result += 'IX';
      break;
    case 8:
      result += 'VIII';
      break;
    case 7:
      result += 'VII';
      break;
    case 6:
      result += 'VI';
      break;
    case 5:
      result += 'V';
      break;
    case 4:
      result += 'IV';
      break;
    case 3:
      result += 'III';
      break;
    case 2:
      result += 'II';
      break;
    case 1:
      result += 'I';
      break;
    default:
      break;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      default:
        break;
    }

    if (numberStr[i + 1]) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reservedStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    reservedStr += str[i];
  }

  return str === reservedStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === `${digit}`) {
      return true;
    }
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) return -1;

  let totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    totalSum -= arr[i];

    if (leftSum === totalSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  const maxDigital = size ** 2;
  let top = 0;
  let right = size - 1;
  let bot = size - 1;
  let left = 0;
  let num = 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  for (let i = 0; i < maxDigital; i += 1) {
    for (let j = left; j <= right; j += 1) {
      matrix[top][j] = num;
      num += 1;
    }

    top += 1;

    for (let j = top; j <= bot; j += 1) {
      matrix[j][right] = num;
      num += 1;
    }

    right -= 1;

    for (let j = right; j >= left; j -= 1) {
      matrix[bot][j] = num;
      num += 1;
    }

    bot -= 1;

    for (let j = bot; j >= top; j -= 1) {
      matrix[j][left] = num;
      num += 1;
    }

    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const resultMatrix = matrix;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix.length; j += 1) {
      const temp = matrix[i][j];
      resultMatrix[i][j] = matrix[j][i];
      resultMatrix[j][i] = temp;
    }
  }

  for (let i = 0; i < resultMatrix.length; i += 1) {
    for (let j = 0; j < Math.floor(resultMatrix.length / 2); j += 1) {
      const temp = resultMatrix[i][j];
      resultMatrix[i][j] = resultMatrix[i][resultMatrix.length - 1 - j];
      resultMatrix[i][resultMatrix.length - 1 - j] = temp;
    }
  }

  return resultMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortedArr = arr;
  const middle = Math.floor(sortedArr.length / 2);
  const left = [];
  const right = [];

  if (sortedArr.length <= 1) {
    return sortedArr;
  }

  for (let i = 0; i < middle; i += 1) {
    left[i] = sortedArr[i];
  }

  for (let i = middle; i < sortedArr.length; i += 1) {
    right[i - middle] = sortedArr[i];
  }

  sortByAsc(left);
  sortByAsc(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArr[k] = left[i];
      i += 1;
    } else {
      sortedArr[k] = right[j];
      j += 1;
    }
    k += 1;
  }

  while (i < left.length) {
    sortedArr[k] = left[i];
    i += 1;
    k += 1;
  }

  while (j < right.length) {
    sortedArr[k] = right[j];
    j += 1;
    k += 1;
  }

  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  const valuesArr = [];

  function moveOddCharsToEnd(string) {
    let evenIndexChars = '';
    let oddIndexChars = '';

    for (let i = 0; i < string.length; i += 1) {
      if (i % 2 === 0) {
        evenIndexChars += string[i];
      } else {
        oddIndexChars += string[i];
      }
    }

    return evenIndexChars + oddIndexChars;
  }

  function containsElement(arr, target) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === target) {
        return true;
      }
    }

    return false;
  }

  for (let i = 0; i < iterations; i += 1) {
    result = moveOddCharsToEnd(result);

    if (containsElement(valuesArr, result)) {
      const resultIdx = (iterations % valuesArr.length) - 1;
      result = valuesArr[resultIdx];

      break;
    }

    valuesArr[valuesArr.length] = result;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = `${number}`;
  const arrayOfDigits = [];

  for (let i = 0; i < str.length; i += 1) {
    arrayOfDigits.push(str[i]);
  }

  let i = arrayOfDigits.length - 2;
  while (arrayOfDigits[i] >= arrayOfDigits[i + 1]) {
    i -= 1;
  }

  let j = arrayOfDigits.length - 1;
  while (arrayOfDigits[j] <= arrayOfDigits[i]) {
    j -= 1;
  }

  const temp = arrayOfDigits[i];
  arrayOfDigits[i] = arrayOfDigits[j];
  arrayOfDigits[j] = temp;

  const arrAfterNumbers = arrayOfDigits
    .splice(i + 1, arrayOfDigits.length - 1)
    .sort();

  return +[...arrayOfDigits, ...arrAfterNumbers].join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
