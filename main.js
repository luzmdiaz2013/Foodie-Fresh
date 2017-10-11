

let questionDiv = $('.question')
let start = $('#startButton')
let categoriesDiv = $('.categoriesSpot')
let categoriesButton = $('.categories')
let counter = $('#counter span')
let answer = document.getElementsByClassName('.ansButton')
let count = 0;

//jQuery assistance by the awesome Ozzie Osman
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
    $(".categories").fadeOut()     //all categories except the chosen one disappear
    $(this).fadeIn()               //category chosen remains
    console.log('click works');
    questionDiv.removeAttr('id'); //removes the id ques2 with visibility: hidden so it's now visible
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

//Significant Assistance by Dom F., Patrick Shannon and Shomir Uddin
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

                if(index < greensCategory.length){ //checks to see if the array is done
                  changeQuestion(index);           //gets the next card

                }

                  else{
                    console.log('tellingOutCome()')
                    alert(`${count} out of 5!`);
                    document.getElementsByClassName('questionDiv'); //grabs question div
                    questionDiv.attr('id', 'ques2'); // removes question div
                    $(".categories").fadeOut(); // removes the category button
                    tellingOutCome();
                    location.reload();
                  }


      }

          else{
            //show x div
            alert("incorrect");
            index++;

                    if(index < greensCategory.length){  //checks to see if the array is done
                              changeQuestion(index)     //get the next card

                            }
                    else{
                          console.log('tellingOutCome()')
                          alert(`${count} out of 5!`);
                          document.getElementsByClassName('questionDiv'); //grabs question div
                          questionDiv.attr('id', 'ques2'); // removes question div
                          $(".categories").fadeOut(); // removes the category button
                          tellingOutCome();
                          location.reload();


                        }

            changeQuestion(index) //get the next card
          }


        })


        // tellingOutCome();

      }

      function tellingOutCome(){
                     if(count >= 4){
                      console.log(count,'<----')
                    //  let win = $('#openModal')
                    // console.log(win,'<--win')

                     // win.attr('id','win')
                     // win.attr('class','modalDialog')
                     // win.removeAttr('id')

                     // console.log(win)
                     alert('Great Job Foodie! Try this winning recipe! https://www.youtube.com/watch?v=GVFMCAzs8vA');
                     location.reload();
                    }
                    else{
                      alert('Good Effort!  Learn more here: https://www.epicurious.com/archive/seasonalcooking/farmtotable/visualguidesaladgreens');
                      location.reload();

                      // $('#closingModal').css('display','block');


                    }
      }

      // tellingOutCome()



































