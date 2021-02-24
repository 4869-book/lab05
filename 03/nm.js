function active(){
    const text = document.querySelector('#texts');
    document.querySelector("h1").innerHTML = "GOOD NIGHT";
    document.querySelector("h2").innerHTML = "This is the night time!";
    text.classList.add('night');
}

const clicked = document.querySelector('input');
clicked.addEventListener('click',active);
