let compliment = '';
let subjectNounArr = ['You', 'I', 'My Baby'];
let verb = '';
let complimentBodyArr = [['a captivating smile', 'twinkling eyes', 'a contagious smile', 'a brilliant mind', 'the most colorful imagination', 'an extremely soothing voice', 'a beautiful soul'], ['the best at giving hugs', 'a great kisser', 'an inspiration to others', 'the smartest person in the room', 'full of love and joy', 'so patient and kind', 'creative and inquisitive']];
let randomIndex;
let subjectNoun;
let complimentBody;

const randomIndexGen = (arr) => {
    randomIndex = Math.floor(Math.random() * (arr.length));
}

randomIndexGen(subjectNounArr);
subjectNoun = subjectNounArr[randomIndex];

if (subjectNoun === 'You') {
    if (randomIndex % 2 === 0) {
        verb = 'are';
    } else {
        verb = 'have';
    }
} else if (subjectNoun === 'I') {
    if (randomIndex % 2 === 0) {
        verb = 'am';
    } else {
        verb = 'have';
    } 
} else if (subjectNoun === 'My Baby') {
    if (randomIndex % 2 === 0) {
        verb = 'is';
    } else {
        verb = 'has';
    }
}


 let i;
 if (verb === 'have' || verb === 'has') {
       i = Math.floor(Math.random() * (complimentBodyArr[0].length));
        complimentBody = complimentBodyArr[0][i];
  } else if (verb === 'are' || verb === 'am' || verb === 'is') {
        i = Math.floor(Math.random() * (complimentBodyArr[1].length));
        complimentBody = complimentBodyArr[1][i];
  } 





compliment = subjectNoun + ' ' +  verb + ' ' + complimentBody + '!';
console.log(compliment);
