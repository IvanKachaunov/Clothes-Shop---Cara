const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeButton = document.getElementById("close");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(closeButton){
    closeButton.addEventListener('click', () => {
        nav.classList.remove("active")
    })
}