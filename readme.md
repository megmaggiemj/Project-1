
## Project Description

Essentially I'd like my portfolio site to reflect my personality. A bit of whimsy, a little chaos, and at least one personal fact you didn’t really need to know. Also really clean code. 

I'll be including at least one animated element. Preferably the words "Hello World"
rotating around a profile picture. In the mobile view, navigation will be a dropdown hamburger menu and the project section will be a scroll arrow (idk if that's the correct term...)

here are a few keywords and ideas I'm using as inspiration on the design so far. I'm sure this will change though!

Neon lights (words or line art self portrait)
Light bulb flickering on when page loads
80s trapper keeper
8 or 16 bit design
Lisa Frank meets Bob's Burgers

The following are sites that I've found inspiring or that have elements I'd like to include in my project. The last link is a CodePen portfolio template project I completed a few months ago 

https://www.kemiadeleke.com [Link](https://www.kemiadeleke.com)

https://www.jason.af [Link](https://www.jason.af)

https://moonfarmer.com/?ref=hackernoon.com [Link](https://moonfarmer.com/?ref=hackernoon.com)

https://kuon.space/?ref=hackernoon.com#top [Link](https://kuon.space/?ref=hackernoon.com#top)

https://www.seanhalpin.design [Link](https://www.seanhalpin.design)

https://lynnandtonic.com/archive/ [Link](https://lynnandtonic.com/archive/)

https://sanjoo.in [Link](https://sanjoo.in)

https://coryhughart.com/ [Link](https://coryhughart.com/)

https://codepen.io/megmaggiemj/full/NWgjdVP [Link](https://codepen.io/megmaggiemj/full/NWgjdVP)


## Wireframes
link to figma wireframe https://www.figma.com/file/ev5BAG7lgtwYjm9w2GE8JA/Project-1-Wireframe?node-id=0%3A1

## Time/Priority Matrix 

[Link](https://res.cloudinary.com/jkeohan/image/upload/a_270/v1591621734/project1_matrix_ocy5gc_h1kg0m.jpg)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into smaller components.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the portfolio. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the portfolio must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | did not include |
| About me section  | 1.5H | 1hr | hr |
| Regular Nav | 1.5H | 1hr | hr |  
| Contact Form | H | 2.5hr|  hr | 
| CSS Grid| 7H | 5hr | hr|
| Rotating text | 8H | 2hrs|  hr | 
| Responsive | 6H | 5hr | hr | hr |
| Social Media Icons | .5L | .5hr |  hr |
| Total | H | 18 hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Nav Hover | M | 2hr | -hr | hr |
| Page load animation | L | 3hr | hr |
| Project section slider | H | 4hr | hr |
| Hero image/animation | M | 6hr | -hr | hr |
| Scroll animation | H | 4hr | hr |
| Text effects | L | 3hr | hr |
| Total | H | 22 hrs| hrs |

## Additional Libraries
Circular text code via tutorial from "OnlineTutorials4Designers" youtube video https://youtu.be/zwl3kZPZ8H8
jquery 
bootstrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  
```const allFacts = document.querySelector(".random-fact");//this is the html element//
const megFacts = [ //this is the array of facts to be randomized//
    "Thinks you\'re cool",
    "Eats her vegetables", 
    "Thinks omelettes are high maintenance scrambled eggs",
    "Loves dill pickles", 
    "Is a cat person",
    "Likes sour candy", 
    "Drinks a lot of coffee",
    "Still watches cartoons",
    "Loves learning new things!",
    "Is excellent at parallel parking", 
    "Makes great playlists",
    "Can pronounce Worcestershire sauce…sometimes",
    "Needs to go to the dentist",
    "Probably just started a new hobby",
    "Does not like reality tv" 
]
function randomFact() {
    const randomIndex = Math.floor(Math.random() * megFacts.length); //this is the number in the array
    const displayFact = megFacts[randomIndex]; //this is the random string
    allFacts.innerText = "Meagan: " + displayFact;
  }
  setInterval(randomFact, 4000);
```


