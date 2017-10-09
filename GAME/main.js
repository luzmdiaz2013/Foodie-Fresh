
// let theDiv = $(".question")
// let start = $('#startButton')
// // let a =
// // let b =
// let counter = $('#counter')
// let answer = document.getElementsByClassName('ansButton')
// let count = 0;



// function counting(){

//   console.log(counter)
//   counter.html(count)
// }
// counting()

// function adding(){
//   console.log(answer)
//   for(i = 0; i < answer.length; i++){
//     answer[i].addEventListener('click', function() {
//        counter.html(count ++)    //this is testing
//     })
//     }
//   }
// adding()
// // counter.html(count ++)  needs to be added to logic function

// $("#startButton").click(function(){
//     console.log('hello');
//     console.log(start)
// start.attr('id','ques')
// theDiv.removeAttr('id')

// });

// function giveAnswer(answer){
//   if (answer = correct)
// }


//  function question1(){

//  }


//////////////////////
//   REVERSE ENGINEER THEN DELETE
//////////////////////


// let greens = [];
// let fruits = [];
// let vegetables = [];
// let count = 0;

// function questionCard(question,pic,answer1,answer2,answer3,answer4,answer5,correct){
//   this.question = question;
//   this.pic = pic;
//   this.answer1 = answer1;
//   this.answer2 = answer2;
//   this.answer3 = answer3;
//   this.answer4 = answer4;
//   this.answer5 = answer5;
//   this.correct = correct;
// }

// let questionCard1 = new questionCard("Can you identify this ingredient?","./images/i_dont_exist.jpg","ingredient A","ingredient b","ingredient c","ingredient d","ingredient e","e");
// console.log(questionCard1);

// greens[0] = questionCard1;
// console.log(greens[0]);

///////////////////
// jQuery conversion starts here.
///////////////////

// function showCard(category,cardIndex){
//   //category[cardIndex] greens[0  /*meaning arugula*/]
//   let container = document.querySelector('#cardSpot');
//   let currentCard = document.createElement('div');
//   currentCard.className = "question";
//   currentCard.id = "ques";
//   container.appendChild(currentCard);
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

// //Dry this shit up

//   let buttonA = document.createElement('button');
//   buttonA.className = 'ansButton';
//   buttonA.id = 'a';
//   buttonA.innerHTML = category[cardIndex].answer1;
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

/*function creating an array to store the count
if < =










































