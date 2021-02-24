const body = document.querySelector("body");
const image = document.querySelector("img");
function active(){
    
    body.classList.toggle('night');
    if(body.className ==='night'){
        console.log(body.className);
        clicked.value="Activate the day mode";
        document.querySelector("h1").innerHTML = "GOOD NIGHT";
        document.querySelector("h2").innerHTML = "This is the night time!";
        document.getElementById("2").innerHTML = "day";
        image.src="https://i.imgflip.com/425i4f.jpg";
        
    }else{
        console.log("day");
        clicked.value="Activate the night mode";
        document.querySelector("h1").innerHTML = "GOOD MORNING";
        document.querySelector("h2").innerHTML = "This is the day time!";
        document.getElementById("2").innerHTML = "night";
        image.src="https://pics.me.me/wow-such-a-wake-so-cereal-much-mo-many-sunshine-19578283.png";
    }
}

const clicked = document.querySelector('input');
clicked.addEventListener('click',active);
