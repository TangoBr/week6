var heading = document.querySelector('div h1');
console.log(heading)
heading.innerHTML = 'Generic Heading'

var paragraphs = document.querySelectorAll('div p');
console.log(paragraphs)

// paragraphs.forEach()
//     paragraphs.classList.add(blue)

// copied code, dunno wtf im doing here
// https://stackoverflow.com/questions/23565551/javascript-add-remove-a-single-class-on-multiple-elements
paragraphs.forEach(function(el) {
    el.classList.add('blue')
})
    console.log(paragraphs)

var div = document.querySelector('div')
console.log(div)

// paragraphs.forEach(element =>paragraphs.length){
//     paragraphs.classList.add('blue')
// };
// console.log(paragraphs)