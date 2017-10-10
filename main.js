

let questionDiv = $('.question')
let start = $('#startButton')
let categoriesDiv = $('.categoriesSpot')
let categoriesButton = $('.categories')
let counter = $('#counter span')
let answer = document.getElementsByClassName('.ansButton')
let count = 0;

//jQuery assistance by the awesome Ozzie
// --------------------------- This function has the start button disappear on click, and the 5 categories divs appear ----------------------//
$("#startButton").click(function(){
  // console.log('click works');
  // start.attr('id','ques'); //adds the #'ques' for visibility:hidden
  // console.log('set atrr id works');
  // categoriesDiv.removeAttr('id'); //removes the #categories with visibility:hidden categories buttons now appear
  // console.log('works!');
    start.fadeOut();
    categoriesDiv.removeAttr('id');
});

//------------------------------- This function has the categories buttons trigger the question card appearance ------------------------//

$(".categories").click(function(){ //any of the category buttons triggers the question card
    $(".categories").fadeOut()
    $(this).fadeIn()
    console.log('click works');
    questionDiv.removeAttr('id'); //removes the id ques2 with visibility: hidden so now visible
    console.log('question shows!');

});

//------------------------------- This constructor creates the category questions -----------------------------------//

function QuestionCard(pic,answers,correct){
  this.pic = pic;
  this.answers = answers;
  this.correct = correct;
}
                //--------- This is the array that populates questions for Greens category ---------//

let greensCategory = [
  new QuestionCard('./images/arugula.jpg', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Arugula'),
  new QuestionCard('./images/watercress.png', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Watercress'),
  new QuestionCard('./images/mizuna.png', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Mizuna'),
  new QuestionCard('./images/radicchio.jpg', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Radicchio'),
  new QuestionCard('./images/frisee.jpg', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Frisee')
]
let index = 0;

             //------- This function iterates through the array to create the 5 questions -------//

function changeQuestion(index){
  document.querySelector('#pic').src =  greensCategory[index].pic;
  document.getElementById('a').innerHTML = greensCategory[index].answers[0];
  document.getElementById('b').innerHTML = greensCategory[index].answers[1];
  document.getElementById('c').innerHTML = greensCategory[index].answers[2];
  document.getElementById('d').innerHTML = greensCategory[index].answers[3];
  document.getElementById('e').innerHTML = greensCategory[index].answers[4];

}

changeQuestion(index);

//Assistance by Dom, & Patrick
let buttons = document.querySelectorAll('.ansButton');

 //------------------------- This functions creates the click conditions -------------------------//

  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
      console.log('im clicked', i)
        if(this.innerHTML === greensCategory[index].correct){ //correct answer chosen
            count++;                  //increments the counter when correct
            counter.text(count);      //shows the score increments in the counter
            index++;                  //moves index up
            console.log('index', index)

                if(index < greensCategory.length){ //checks to see if there is
                  changeQuestion(index);          //get the next card

                }

                  else{
                    alert(`${count} out of 5!`);
                    document.getElementsByClassName('questionDiv');
                    questionDiv.attr('id', 'ques2');
                    $(".categories").fadeOut();
                  }


      }

          else{
            //show x div
            alert("incorrect");
            index++;

                if(index < greensCategory.length){
                          changeQuestion(index)  //get the next card

                        }
                          else{
                            alert(`${count} out of 5!`)
                            document.getElementsByClassName('questionDiv');
                            questionDiv.attr('id', 'ques2');

                          }

            changeQuestion(index)//get the next card
          }


        })

                    if(count >=4){
                    $('#winningModal').css('display','block');
                    }
                    else{
                      // $('#losingModal').css('display','block');
                    }


      }



































