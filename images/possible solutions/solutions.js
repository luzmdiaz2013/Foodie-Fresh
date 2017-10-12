IDEAS FOR SOLVING THE CATEGORIES ISSUE:
  - Create an array of the category arrays and use the index number to loop through the changeQuestion function.
  - Grab the categories by id, create a variable that can be substituted for the this.category[index] of the change
    question function.
  - create a larger conditional statement (if-else/switch) incorporating all of the category arrays.
  - create seperate functions and assign to seperate divs for each category.

// Assistance by Kyle F.

// function test(){
//   for(let i =0; i< ok.length; i++){
//     let id = ok[i].id
//     if(id === 'greens'){
//       console.log('greensssssss')
//     }
//     else
//       console.log('nooooooooooooooooooooo')
//   }
//   console.log(ok,'the end')

// }


// console.log(fruits)
// let index = 0;

//Assistance by Josue Perez

// changeQuestion
  // for (var i = 0; i < categorias.length; i++) {
  //   categorias[i].addEventListener('click', function(){
  //          var cat = this.id;
  //         console.log(cat);


  //   });
  // }


// THIS REPETITION OF THE GAME LOGIC THROUGH WIN/LOSS FUNCTIONS FOR ANOTHER CATEGORY DOES NOT WORK!!!
// THE LAST FUNCTION OVERRIDES AND AFFECTS ALL THE CATEGORIES


 //------- This function iterates through the array to create the 5 questions -------//

// function changeQuestion(index){
//   document.querySelector('#pic').src =  grainsCategory[index].pic;
//   document.getElementById('a').innerHTML = grainsCategory[index].answers[0];
//   document.getElementById('b').innerHTML = grainsCategory[index].answers[1];
//   document.getElementById('c').innerHTML = grainsCategory[index].answers[2];
//   document.getElementById('d').innerHTML = grainsCategory[index].answers[3];
//   document.getElementById('e').innerHTML = grainsCategory[index].answers[4];

// }

// changeQuestion(index);

// //Significant Assistance by Dom F., Patrick Shannon, Shomir Uddin, & Kyle Frable, & Josue
//  let buttons = document.querySelectorAll('.ansButton');


//  //------------------------- This functions creates the click conditions -------------------------//

//   for (let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click',function(){
//       console.log('im clicked')
//         if(this.innerHTML === grainsCategory[index].correct){ //correct answer chosen
//             count++;                  //increments the counter when correct
//             counter.text(count);      //shows the score increments in the counter
//             index++;                  //moves index up
//             console.log('index', index)

//                 if(index < greensCategory.length){ //checks to see if the array is done
//                   changeQuestion(index);           //gets the next card

//                 }

//                   else{
//                     console.log('tellingOutCome()')
//                     alert(`${count} out of 5!`);
//                     document.getElementsByClassName('questionDiv'); //grabs question div
//                     questionDiv.attr('id', 'ques2'); // removes question div
//                     $(".categories").fadeOut(); // removes the category button
//                     tellingOutCome();
//                     location.reload();
//                   }


//       }

//           else{
//             alert("incorrect");
//             index++;

//                     if(index < grainsCategory.length){  //checks to see if the array is done
//                               changeQuestion(index)     //get the next card

//                             }
//                     else{
//                           console.log('tellingOutCome()')
//                           alert(`${count} out of 5!`);
//                           document.getElementsByClassName('questionDiv'); //grabs question div
//                           questionDiv.attr('id', 'ques2'); // removes question div
//                           $(".categories").fadeOut(); // removes the category button
//                           tellingOutCome();
//                           location.reload();


//                         }

//             changeQuestion(index) //get the next card
//           }


//         })




//       }

      // function tellingOutCome(){
      //                if(count >= 4){
      //                       console.log(count,'<----')
      //                       alert('Great Job Foodie! Try this winning recipe! https://www.youtube.com/watch?v=GVFMCAzs8vA');
      //                       location.reload();     //Recipe video from youTube.com
      //               }
      //                 else{
      //                       alert('Good Effort!  Learn more here: https://www.epicurious.com/archive/seasonalcooking/farmtotable/visualguidesaladgreens');
      //                       location.reload();    //link from Epicurious.com

      //               }
      // }


