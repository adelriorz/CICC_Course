window.addEventListener("load", (e) => {
  //when you should start writing JS
  console.log("Page has been loaded");
});

// Handle page closing
window.addEventListener("beforeunload", (e) => {
  const message = "The page has been unloaded!";

  //clean up functions here....

  // Standard way of showing a confirmation dialog
  console.log(message);
  // Browser-specific way of showing a confirmation dialog
  return message;
});

// Click handler on the document

document.addEventListener("click", (e) => {
  console.log("Document handler");
});

// Click handler on the paragraph

document.getElementById("para").addEventListener("click", (e) => {
  console.log("Paragraph handler");
});

// Click handler on the button

document.getElementById("propa").addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("Button handler");
});

window.addEventListener("scroll", function(){
    console.log("STOP SCROLLING!");
})
