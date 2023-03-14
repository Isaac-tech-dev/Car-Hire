const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('app-show')
        }else{
            entry.target.classList.remove('app-show')
        }
    })
})


const hiddenElements1 =document.querySelectorAll('.app-hidden');
hiddenElements.forEach((el) => observer.observe(el));

// mobile = document.querySelectorAll(".mobile");
// mobile.onClick = function(){
//     navBar = document.getElementById('navbar');
//     navBar.classList.toggle("active");
// }