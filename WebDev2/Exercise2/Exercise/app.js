function newElement() {

    var li = document.createElement("li");
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var i = document.createElement("i");
    var i2 = document.createElement("i");
    var inp = document.createElement("input");

    i.className += "fa fa-pencil-square-o";
    i2.className += "fa fa-times";
    li.className += "task";
    inp.className += "text" ;
    inp.className += "edit-note";

    // Appending elements to their parents
    var inputValue = document.getElementById("addInput").value;
    var input = document.createTextNode(inputValue);
    li.appendChild(p);
    p.appendChild(input);
    li.appendChild(p2);
    p2.appendChild(i);
    p2.appendChild(i2);
    p2.appendChild(inp);


    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("addInput").value = "";
}