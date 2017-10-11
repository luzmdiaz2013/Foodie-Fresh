

let questionDiv = $('.question')
let start = $('#startButton')
let categoriesDiv = $('.categoriesSpot')
let categoriesButton = $('.categories')
let counter = $('#counter span')
let answer = document.getElementsByClassName('.ansButton')
// let categorias = document.getElementsByClassName("categories");
let count = 0;
let index = 0;

//jQuery assistance by the awesome Ozzie Osman
// --------------------------- This function has the start button disappear on click, and the 5 categories divs appear ----------------------//
$("#startButton").click(function(){
    start.fadeOut();
    categoriesDiv.removeAttr('id');
});

//------------------------------- This function has the categories buttons trigger the question card appearance ------------------------//

let ok = $(".categories").click(function(){ //any of the category buttons triggers the question card
    $(".categories").fadeOut()     //all categories except the chosen one disappear
    $(this).fadeIn()               //category chosen remains
    questionDiv.removeAttr('id'); //removes the id ques2 with visibility: hidden so it's now visible
    // console.log(this.id,'this')


});

//------------------------------- This constructor creates the category questions -----------------------------------//

function QuestionCard(pic,answers,correct){

  this.pic = pic;
  this.answers = answers;
  this.correct = correct;
}
                //--------- This is the array that generates questions for Fruits category ---------//

let fruitsCategory = [
  new QuestionCard('./images/fruitAcai.jpg', ['Soursop', 'Acai', 'Goji', 'Kumquat', 'Mangosteen'], 'Acai'),
  new QuestionCard('./images/fruitGoji.jpeg', ['Soursop', 'Acai', 'Goji', 'Kumquat', 'Mangosteen'], 'Goji'),
  new QuestionCard('./images/fruitMangosteen.jpg', ['Soursop', 'Acai', 'Goji', 'Kumquat', 'Mangosteen'], 'Mangosteen'),
  new QuestionCard('./images/fruitSoursop.jpg', ['Soursop', 'Acai', 'Goji', 'Kumquat', 'Mangosteen'], 'Soursop'),
  new QuestionCard('./images/fruitKumquat.jpeg', ['Soursop', 'Acai', 'Goji', 'Kumquat', 'Mangosteen'], 'Kumquat')
]
                //--------- This is the array that generates questions for Vegetables category ---------//

let vegetablesCategory = [
  new QuestionCard('./images/vegChayote.jpg', ['Caulerpa', 'Chayote', 'Fiddlehead', 'Kohlrabi', 'Romanesco'], 'Chayote'),
  new QuestionCard('./images/vegCaulerpa.jpg', ['Caulerpa', 'Chayote', 'Fiddlehead', 'Kohlrabi', 'Romanesco'], 'Caulerpa'),
  new QuestionCard('./images/vegRomanesco.png', ['Caulerpa', 'Chayote', 'Fiddlehead', 'Kohlrabi', 'Romanesco'], 'Romanesco' ),
  new QuestionCard('./images/vegFiddlehead.png', ['Caulerpa', 'Chayote', 'Fiddlehead', 'Kohlrabi', 'Romanesco'], 'Fiddlehead'),
  new QuestionCard('./images/vegKohlrabi.jpg', ['Caulerpa', 'Chayote', 'Fiddlehead', 'Kohlrabi', 'Romanesco'], 'Kohlrabi')
]
                //--------- This is the array that generates questions for Greens category ---------//

let greensCategory = [
  new QuestionCard('./images/arugula.jpg', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Arugula'),
  new QuestionCard('./images/watercress.png', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Watercress'),
  new QuestionCard('./images/mizuna.png', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Mizuna'),
  new QuestionCard('./images/radicchio.jpg', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Radicchio'),
  new QuestionCard('./images/frisee.jpg', ['Arugula', 'Frisee', 'Radicchio', 'Watercress', 'Mizuna'], 'Frisee')
]

                //--------- This is the array that generates questions for Grains category ---------//

let grainsCategory = [
  new QuestionCard('./images/grainsSpelt.jpg', ['Barley', 'Bulgur', 'Millet', 'Quinoa', 'Spelt'], 'Spelt'),
  new QuestionCard('./images/grainsBarley.jpg', ['Barley', 'Bulgur', 'Millet', 'Quinoa', 'Spelt'], 'Barley'),
  new QuestionCard('./images/grainsQuinoa.jpg', ['Barley', 'Bulgur', 'Millet', 'Quinoa', 'Spelt'], 'Quinoa'),
  new QuestionCard('./images/grainsBulgur.png', ['Barley', 'Bulgur', 'Millet', 'Quinoa', 'Spelt'], 'Bulgur'),
  new QuestionCard('./images/grainsMillet.png', ['Barley', 'Bulgur', 'Millet', 'Quinoa', 'Spelt'], 'Spelt')
]

                //--------- This is the array that generates questions for Spices category ---------//

let spicesCategory = [
  new QuestionCard('./images/spiceBrownMustard.jpg', ['Allspice', 'Annatto', 'Mustard', 'Caraway', 'Nigella'], 'Mustard'),
  new QuestionCard('./images/spiceNigella.jpg', ['Allspice', 'Annatto', 'Mustard', 'Caraway', 'Nigella'], 'Nigella'),
  new QuestionCard('./images/spiceAllspice.jpg', ['Allspice', 'Annatto', 'Mustard', 'Caraway', 'Nigella'], 'Allspice'),
  new QuestionCard('./images/spiceCaraway.jpg', ['Allspice', 'Annatto', 'Mustard', 'Caraway', 'Nigella'], 'Caraway'),
  new QuestionCard('./images/spiceAnnatto.jpg', ['Allspice', 'Annatto', 'Mustard', 'Caraway', 'Nigella'], 'Annatto')
]

// console.log(fruits)
// let index = 0;



  // for (var i = 0; i < categorias.length; i++) {
  //   categorias[i].addEventListener('click', function(){
  //          var cat = this.id;
  //         console.log(cat);


  //   });
  // }

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

//Significant Assistance by Dom F., Patrick Shannon, Shomir Uddin, & Kyle Frable, & Josue
 let buttons = document.querySelectorAll('.ansButton');
 // for(let i = 0; i < buttons.length; i++){
 //  buttons[i].addEventListener('click',function(){
 //     console.log('hi')
 //  })
 // }
 // console.log(buttons)

 //------------------------- This functions creates the click conditions -------------------------//

  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
      console.log('im clicked')
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




      }

      function tellingOutCome(){
                     if(count >= 4){
                            console.log(count,'<----')
                            alert('Great Job Foodie! Try this winning recipe! https://www.youtube.com/watch?v=GVFMCAzs8vA');
                            location.reload();     //Recipe video from youTube.com
                    }
                      else{
                            alert('Good Effort!  Learn more here: https://www.epicurious.com/archive/seasonalcooking/farmtotable/visualguidesaladgreens');
                            location.reload();    //link from Epicurious.com

                    }
      }






function test(){
  for(let i =0; i< ok.length; i++){
    let id = ok[i].id
    if(id === 'greens'){
      console.log('greensssssss')
    }
    else
      console.log('nooooooooooooooooooooo')
  }
  console.log(ok,'the end')

}



































