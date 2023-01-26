//Selecting individual elements
//-- getElementById

const list = document.getElementById("list")
// console.log(list)
// list.textContent = "Hello World!!!!!"
// list.textContent = "<h1>Hello World</h1>"
// list.innerHTML = "<h1>Hello World</h1>"

//--querySelector

const el = document.querySelector("ul li:nth-child(2)")
const icon = el.querySelector("p .fa-times")
icon.style.color = "yellow"

//-- loop over getElementsByClassName

const icons = document.getElementsByClassName("fa")
// console.log(icons)

for(let i = 0; i < icons.length; i++){
//  console.log(icons[i])
 icons[i].style.color = "blue"
}

// DOM Styles and Classes
const headerh2 = document.querySelector('header h2') //node
// console.log(headerh2);
// headerh2.className = "changeBg"
// headerh2.className = "changeFt"
// headerh2.className += " changeBg" //concatenation

headerh2.classList.add('changeBg')
headerh2.classList.add('changeFt')
headerh2.classList.remove('changeBg')

// Get and Set and Remove attributes

const divWrapper = document.querySelector('div.wrapper')
console.log(divWrapper.getAttribute('class'));
divWrapper.setAttribute('style', 'background-color: coral')
divWrapper.setAttribute('alt', 'this is a div')
divWrapper.removeAttribute('alt')

const btn = document.querySelector('#add-btn')
const input = document.querySelector('#add-input')

btn.addEventListener("click", function(event){
    event.preventDefault()
    // console.log("clicked!")
    input.setAttribute("value", "Hello World")
})

// DOM Navigation - traversing
const listItem = document.getElementById('list')
//who's your daddy?
console.log(listItem.parentNode);
//who's your daddy's daddy?
console.log(listItem.parentNode.parentNode);
// console.log(listItem.parentNode.parentNode.parentNode.parentNode.parentNode);

//who's your child?
console.log(listItem.childNodes);
console.log(listItem.children);

//who's yøur next sibling
console.log(listItem.nextSibling)
console.log(listItem.nextElementSibling)
console.log(listItem.previousElementSibling)

