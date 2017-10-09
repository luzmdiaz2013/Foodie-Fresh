
let questionDiv = $('.question')
let start = $('#startButton')
let categoriesDiv = $('.categoriesSpot')
let categoriesButton = $('.categories')
let counter = $('#counter')
let answer = document.getElementsByClassName('.ansButton')
let count = 0;


// --------------------------- This function has the start button disappear on click, and the 5 categories divs appear ----------------------//
$("#startButton").click(function(){
  console.log('click works');
  start.attr('id','ques'); //adds the #'ques'  visibility:hidden
  console.log('set atrr id works');
  categoriesDiv.removeAttr('id'); //removes the #categories with visibility:hidden categories buttons now appear
  console.log('works!');
});

//---------------------------- This function has the categories buttons trigger the question card appearance -------------------//

$(".categories").click(function(){ //any of the category buttons triggers the question card
    console.log('click works');
    questionDiv.removeAttr('id'); //removes the id ques2 with visibility: hidden
    console.log('question shows!');
});

function counting(){
  console.log(counter);
  counter.html(count);
}
counting();

function adding(){
    for(i = 0; i < answer.length; i++) {
      answer[i].addEventListener('click', function() {

         counter.html(++count);

      })

  }

adding()};

// counter.html(++count)  needs to be added to logic function
// function giveAnswer(answer){
//   if (answer = correct)
// }


//  function question1(){

//  }


//////////////////////
//   REVERSE ENGINEER THEN DELETE
//////////////////////


// let greens = ['arugula', 'frisee', 'radicchio', 'watercress', 'mizuna'];
// let fruits = [];
// let vegetables = [];
// let grains = [];
// let spices = [];
// let count = 0;

// function questionCard(question,pic,answerA,answerB,answerC,answerD,answerE,correct){
//   this.question = question;
//   this.pic = pic;
//   this.answerA = answerA;
//   this.answerB = answerB;
//   this.answerC = answerC;
//   this.answerD = answerD;
//   this.answerE = answerE;
//   this.correct = correct;
// }

// let questionCard1 = new questionCard("Can you identify this ingredient?","./images/i_dont_exist.jpg","ingredient A","ingredient b","ingredient c","ingredient d","ingredient e","e");
// console.log(questionCard1);

// greens[0] = questionCard1;
// console.log(greens[0]);

///////////////////
// Significant assistance by Patrick
///////////////////

// function showCard(category,cardIndex){
//   //category[cardIndex] greens[0  /*meaning arugula*/]
//   let container = document.querySelector('#cardSpot');
//   let currentCard = document.createElement('div');
//   currentCard.className = "question";
//   currentCard.id = "ques";
//   container.appendChild(currentCard);

// function questionAppear(category, cardIndex){
// let questionContainer = $('#cardSpot')
// let currentCard = document.createElement('div');
// currentCard.className = "question";
// currentCard = "ques";
// conatiner.appendChild(currentCard);
// }

//   let currentCardQuestion = document.createElement('h4');
//   currentCardQuestion.innerHTML = category[cardIndex].question;
//   currentCard.appendChild(currentCardQuestion);
//   let currentCardPic = document.createElement('div');
//   currentCardPic.className = 'picDiv';
//   currentCardPic.innerHTML = "Picture";
//   currentCard.appendChild(currentCardPic);
//   let currentCardButtonContainer = document.createElement('div');
//   currentCardButtonContainer.id = "ansDiv";
//   currentCard.appendChild(currentCardButtonContainer);

// //Dry this up
    // const baddies = [
    //   'Sauron',
    //   'Saruman',
    //   'The Uruk-hai',
    //   'Orcs'
    // ];
//     function makeBaddies() {
//   // display an unordered list of baddies in Mordor
//   let mordorUl = document.createElement('ul');
//   let mordor = document.getElementById('mordor')
//   mordorUl.setAttribute('id', 'baddiesList')

//   for(let baddy of baddies){
//     let currentBaddy = document.createElement('li');
//     currentBaddy.setAttribute('class', 'baddy');
//     currentBaddy.innerHTML = baddy;
//     mordorUl.appendChild(currentBaddy);
//   }
// mordor.appendChild(mordorUl);
// }
// const buttons = [
//   'buttonA',
//   'buttonB',
//   'buttonC',
//   'buttonD',
//   'buttonE',
// ];

// function makeCardButtons() {
//   // display an unordered list of baddies in Mordor
//   let answerButtons = document.createElement('button');
//   let mordor = document.getElementById('mordor')
//   answerButtons.setAttribute('id', 'baddiesList')

//   for(let button of baddies){
//     let currentBaddy = document.createElement('li');
//     currentBaddy.setAttribute('class', 'baddy');
//     currentBaddy.innerHTML = baddy;
//     mordorUl.appendChild(currentBaddy);
//   }
// mordor.appendChild(mordorUl);
// }

//   let buttonA = document.createElement('button');
//   buttonA.className = 'ansButton';
//   buttonA.id = 'a';
//   buttonA.innerHTML = category[cardIndex].answerA;
//   currentCardButtonContainer.appendChild(buttonA);

//   let buttonB = document.createElement('button');
//   buttonB.className = 'ansButton';
//   buttonB.id = 'b';
//   buttonB.innerHTML = category[cardIndex].answer2;
//   currentCardButtonContainer.appendChild(buttonB);

//   let buttonC = document.createElement('button');
//   buttonC.className = 'ansButton';
//   buttonC.id = 'c';
//   buttonC.innerHTML = category[cardIndex].answer3;
//   currentCardButtonContainer.appendChild(buttonC);

//   let buttonD = document.createElement('button');
//   buttonD.className = 'ansButton';
//   buttonD.id = 'd';
//   buttonD.innerHTML = category[cardIndex].answer4;
//   currentCardButtonContainer.appendChild(buttonD);

//   let buttonE = document.createElement('button');
//   buttonE.className = 'ansButton';
//   buttonE.id = 'e';
//   buttonE.innerHTML = category[cardIndex].answer5;
//   currentCardButtonContainer.appendChild(buttonE);



//   let buttons = document.querySelectorAll('.ansButton');
//   for (let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click',function(){
//       if (this.id === category[cardIndex].correct){
//         document.querySelector("#counter").innerHTML = ++count; //++var = increment first then assign; var++ = assign then increment
//         //destroy this card
//         //get the next card
//       }
//       else{
//         alert("WRONG");
//         //destroy this card
//         //get the next card
//       }
//     })
//   }
// }

// //showCard(greens,0);  example

// /*function creating an array to store the count
// if < =










































