# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
   
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

title Bug Ranch

participant data
participant main.js




participant functions

data->main.js:import from cattle.js,
drover.js, journey.js

main.js->functions:set cattleToDrive to 50
main.js->functions:invoke hireDrovers()

loop loop through our database and created a new array with random drovers

end
main.js<-functions:return drovers array
space
main.js->functions:invoke roundup()
loop loop through database and choose cow breeds randomly for cattle drive
end
main.js<-functions:return cattle array with all cattle breeds
main.js->functions:invoke journeyMaker()

loop journeyman loops through 4 functions to create the terrain for our trip
end
main.js<-functions:return journey array with the rivers, plains, mountains, and forests we will go through
box over main.js:print all the data we have processed onto the screen. for the amount of drovers and their names, the breeds of the cattle, and the types of terrain we will encounter on our trip




## Example Output

If you are able to fix all of the bugs, you will output similar to what is below. It will not be identical, but similar.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.

   > This runs the function hireDrovers, which takes 5 random drovers from our array in database.js so drovers will be an array listing the ID, first_name, last_name, gender of the 5 randomly selected drovers

2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.

   > drovers is an array of the 5 drovers we hire, and drover will go through each on in the array, then the console.log will print the first and last name from each drover of the drovers array.

3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.

   > https://www.loom.com/share/b617b5dd5c65455b83712fd4437abadd

4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.

   > We initialize a for loop, and set forestNumber to 0; set the condition for the loop while the forestNumber is less than the amount of forests we created with the createForests() function. then we add 1 to forestNumber so it knows when to stop looping. and then we push the string "forest" to the journey array.

5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.

   > database is an object which contains two main properties, cattleTypes and drovers. in cattleTypes we have two identifiers a numeric one and a string identifier for breed.
   In the drovers object, we have numeric identifier for ID and a string for first_name, last_name, and gender.

6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?

   > this is defining the total amount of cattle there are to drive, we get this value from the main.js when we initalize the variable cattleToDrive and then we pass it into the hireDrovers function it is passed as an argument and sets the value of herdSize in the function.
   
   

## When You Are Done

After you have answered all the questions above, you need to push all of your code back up to Github. Follow these instructions.

1. Be in the `bug-wrangler-ranch` directory.
2. `git add --all`
3. `git commit -m "Code complete"`
4. `git push origin main`

Then go to the Learning Platform and click the **Self-assessment Complete** button.
