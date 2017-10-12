# Foodie-Fresh
GA Game - Project 1
Link:


Explanations of the technologies used
- Vanilla JS for some functions, alerts, 
- Jquery for some functions, animations( fadeIn, fadeOut)
- Used a constructor to create arrays
- Used nested if-then statements for the win/loss outcomes.


Approach taken

User stories

Wireframes

How-to-use instructions:
 - Welcome to Foodie Fresh, a culinary quiz! 
   There are Five categories with five questions each for a total of twenty-five tasty trivia. 

    1) Click the start button to begin.
    2) Pick a category and try to identify the ingredient.
    3) Use the answer buttons to navigate through the questions.
    4) After the five questions are answered, you will receive your final score and a recipe or    article about the category.
    5) When you are done with the category, the game begins again.

Unsolved problems:
JS
Can't get all of the categories to work by iterating through the changeQuestion function.  This means only the Greens Category is fully functional.  Recreating the function for each category may have been a better idea.  Win/loss modals broke repeatedly, and in new ways; settled for alerts.

CSS
Could not get the transparent effect correct, there is a problem with text and box shadow.
Could not get the opacity effect quite right.

HTML
Could not find enough png images of the ingredients.

/////////////    IDEAS FOR SOLVING THE CATEGORIES ISSUE:
  - Create an array of the category arrays and use the index number to loop through the changeQuestion function.
  - Grab the categories by id, create a variable that can be substituted for the this.category[index] of the change question function.
  - create a larger conditional statement (if-else/switch) incorporating all of the category arrays.
  - create seperate functions and assign to seperate divs for each category. ** not dry 



