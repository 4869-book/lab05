function addlist() {
    var text = document.getElementById("myText");
    var node = document.createElement("li");
    var textnode = document.createTextNode(text.value);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    text.value="";
  }

var input = document.getElementById("myText");
input.addEventListener("keypress", function(event) {
if (event.keyCode === 13) {
    addlist();
    var list = document.querySelector('li');
    list.classList.add("fa fa-trash");
  }
});

function listcross(){
    console.log(list.length);
}
var list = document.querySelectorAll('li');