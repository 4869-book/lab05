var cont=1;
function clicked(evt){
    alert(evt.currentTarget.value+" : Why you clicked me.");
    evt.currentTarget.removeEventListener('click', clicked);
    evt.currentTarget.classList.add("clicked");
    console.log(cont);
    if(cont==1){
        document.querySelector("h2").innerHTML = "Clicked!";
    }
    if(cont==2){
        document.querySelector("h2").innerHTML = "Double Clicked!!";
    }
    if(cont==3){
        document.querySelector("h2").innerHTML = "Triple Clicked!!!";
    }
    if(cont==4){
        document.querySelector("h2").innerHTML = "Dominating!!!!";
    }
    cont+=1;
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener('click',clicked);
const btn2 = document.getElementById("btn2");
btn2.addEventListener('click',clicked);
const btn3 = document.getElementById("btn3");
btn3.addEventListener('click',clicked);
const btn4 = document.getElementById("btn4");
btn4.addEventListener('click',clicked);