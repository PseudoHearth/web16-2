
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');


function handleMouseover(event) {
    event.target.setAttribute('title', event.target.textContent);
}

link1.addEventListener('mouseover', handleMouseover);
link2.addEventListener('mouseover', handleMouseover);
link3.addEventListener('mouseover', handleMouseover);