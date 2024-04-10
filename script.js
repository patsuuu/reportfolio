let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
let top = window.scrollY;
let offset = sec.offsetTop -150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >= offset && top < offset + height) {
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + ']').classList.add
        ('active');
    });
};
    });
};
const btn = document.querySelector('.btn');
const ntb = document.querySelector('.ntb');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#0ef';
    btn.style.boxShadow = '0 0 40px #0ef';
    btn.style.transition = '.5s ease';
});ntb.addEventListener('click', () => {
    ntb.style.backgroundColor = '#0ef';
    ntb.style.boxShadow = '0 0 40px #0ef';
    ntb.style.transition = '.5s ease';
});





let number = document.getElementById('number');
let counter = 0;

setInterval(() => {
    if (counter == 65) {
        clearInterval;
     } else {
            counter += 1;
            number.innerHTML = '${counter}%';
        } 
    }, 30);



    