/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

window.onload = function() {
  const check = word => {
    if (word.length > 8) {
      return '<span class="hightlight">' + word + '</span>'
    } else {
      return word
    }
  }

  const sample = document.querySelector("#sample")
  sample.innerHTML = sample
    .innerText
    .trim()
    .split(' ')
    .map(check)
    .join(' ')
}

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
var temp_link = document.createElement("a");
temp_link.href = "http://officeipsum.com/";
temp_link.target = '_blank';
temp_link.innerHTML = "link";


var par = document.createElement("p");
par.innerHTML = "some text: ";
par.appendChild(temp_link);

document.getElementById("main_div").appendChild(par);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
