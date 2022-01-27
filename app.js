// ROTATING CIRCULAR TEXT VIA ONLINETUTORIALS4DESIGNERS ON YOUTUBE. FULL LINK IN HTML
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
(char, i) =>
`<span style="transform:rotate(${i * 7.7}deg)">${char}</span>`
).join("");
//
