let sentence = "I am not a bad woman";
let wordNot = sentence.indexOf('not');
console.log(wordNot);

let wordbad = sentence.indexOf('bad');
console.log(wordbad);

if
 (wordNot <  wordbad){
    console.log(sentence.replace('not a bad', 'good '));

 } else{
    console.log(sentence);
 }

 