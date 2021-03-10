var heading = document.querySelector('div h1');
console.log(heading)
heading.innerHTML = 'Generic Heading'

var paragraphs = document.querySelectorAll('div p');
console.log(paragraphs)
console.log(paragraphs.length)
// var div = querySelector(body.div);

// paragraphs.forEach()
//     paragraphs.classList.add(blue)

for (var i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
    paragraphs[i].classList.add
}

// paragraphs.forEach(function(el) {
    // el.classList.add('blue')
// })
    console.log(paragraphs)

var div = document.querySelector('div')
console.log(div)


// div.createTextNode("New paragraph");

var newpara = document.createElement('p');
console.log(newpara);
var text = document.createTextNode('New paragraph');
console.log(text);
newpara = newpara.appendChild(text) ;
console.log(newpara);

div.appendChild(newpara);
console.log(div);

// document.createElement('p'), createTextNode('New paragrah'), & appendChild



// paragraphs.forEach(element =>paragraphs.length){
//     paragraphs.classList.add('blue')
// };
// console.log(paragraphs)

