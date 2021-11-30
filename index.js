var readlineSync = require('readline-sync');

var yourScore = 0;

console.log(`Welcome to Santhosh's quiz on FREINDS.`);

const options = [
  {
    optionOne : 'Bangalore',
    optionTwo : 'Hyderbad',
    optionThree : 'Mumbai'
  },{
    optionOne : 'Action',
    optionTwo : 'Love',
    optionThree : 'Thriller'
  },{
    optionOne : 'Football',
    optionTwo : 'Cricket',
    optionThree : 'Badminton'
  }
]

const questions = [
  'Which place Santhosh live in India',
  'What type movies seen by Santhosh',
  'What is the favourite of the Santhosh'
]

const correctAnswers = [ 'a','a','b']

let Score = 0;
console.log("You selected");
console.log(questions[1]+"? ");
console.log(`a: `,options[0].optionOne);
console.log(`b: `,options[0].optionTwo);
console.log(`c: `,options[0].optionThree);
var userOption = readlineSync.question('Enter your answer  ');
console.log(`You answerd: `,userOption);
if(userOption == correctAnswers[0] ){
  console.log(`right answer`)
  Score = Score+1;
}
else{
  console.log(`wrong answer`)
}


console.log('--------------------------')

console.log("You selected");
console.log(questions[1]+"? ");
console.log(`a: `,options[1].optionOne);
console.log(`b: `,options[1].optionTwo);
console.log(`c: `,options[1].optionThree);
var userOption = readlineSync.question('Enter your answer  ');
console.log(`You answerd: `,userOption);
if(userOption == correctAnswers[1] ){
  console.log(`right answer`)
  Score = Score+1;
}
else{
  console.log(`wrong answer`)
}

console.log('--------------------------')

console.log("You selected");
console.log(questions[2]+"? ");
console.log(`a: `,options[2].optionOne);
console.log(`b: `,options[2].optionTwo);
console.log(`c: `,options[2].optionThree);
var userOption = readlineSync.question('Enter your answer  ');
console.log(`You answerd: `,userOption);
if(userOption == correctAnswers[2] ){
  console.log(`right answer`)
  Score = Score+1;
}
else{
  console.log(`wrong answer`)
}

console.log(`YAY Your Total Score ${Score}`)
