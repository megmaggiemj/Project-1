// ROTATING CIRCULAR TEXT VIA ONLINETUTORIALS4DESIGNERS ON YOUTUBE. FULL LINK IN HTML
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
(char, i) =>
`<span style="transform:rotate(${i * 7.7}deg)">${char}</span>`
).join("")
//
// $(()=>{
// $( ".nav-link" ).on("hover", function() {
//     $(this).css("background", "red")
// });
// })
const allFacts = document.querySelector(".random-fact");//this is the html element//
const megFacts = [ //this is the array of facts to be randomized//
    "Thinks you\'re cool",
    "Eats her vegetables", 
    "Thinks omelettes are just high maintenance scrambled eggs",
    "Loves dill pickles", 
    "Is a cat person",
    "Likes sour candy", 
    "Drinks A LOT of coffee",
    "Still watches cartoons",
    "Loves learning new things!",
    "Is excellent at parallel parking", 
    "Makes great playlists",
    "Can pronounce Worcestershire sauce...sometimes",
    "Needs to go to the dentist",
    "Probably just started a new hobby",
    "Does not like reality TV" 
]
function randomFact() {
    const randomIndex = Math.floor(Math.random() * megFacts.length); //this is the number in the array
    const displayFact = megFacts[randomIndex]; //this is the random string
    allFacts.innerText = "Meagan: " + displayFact;
  }
  setInterval(randomFact, 4000);
