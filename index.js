const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   const arrOfArrs = tutorials.map((sentence) => sentence.split(' '));
//   const grandArray = arrOfArrs.map( arrOfWords => {
//     const resolvedArrOfWords = arrOfWords.map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     });
//     const jointSentence = resolvedArrOfWords.join(' ');
//     return jointSentence;
//   })
//   return grandArray;
// }

const titleCased = () => {
  return tutorials.map( sentence => sentence.split(' ')).map(
    arrOfWords => arrOfWords.map( word => word[0].toUpperCase() + word.slice(1)).join(' '));
}
console.log(titleCased())