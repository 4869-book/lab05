function addlist() {
    var text = document.getElementById("myText");
    var node = document.createElement("li");
    var textnode = document.createTextNode(" "+text.value);
    var image = document.createElement('img');
    image.src="https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_640.png";
    if(text.value!==""){
      node.appendChild(image);
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      text.value="";
      node.addEventListener('click',addDone);
      image.addEventListener('click',delList);
    }
    
  }
  
var input = document.getElementById("myText");
input.addEventListener("keypress", function(event) {
if (event.keyCode === 13) {
    addlist();
  }
});

function addDone(evt){
    evt.currentTarget.classList.toggle('done');
}

function delList(evt){
  evt.currentTarget.parentElement.remove();
}

