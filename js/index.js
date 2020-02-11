// Your code goes here
const body = document.querySelector('body');
body.addEventListener('click', () => {
    body.style.backgroundColor = 'lightblue';
})

const logoStuff = document.querySelector('.logo-heading');
logoStuff.addEventListener('mouseenter', () => {
    logoStuff.style.transform = "scale(1.2)";
    logoStuff.style.transition = "transform 1s";
})
logoStuff.addEventListener("mouseleave", () => {
    logoStuff.style.transform = "scale(1)";
})

const bus = document.querySelector('.intro img');
bus.addEventListener('drag', () => {
    body.style.backgroundColor = 'rebeccapurple';

})

const buttons = document.querySelectorAll('a');
buttons.forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'lightgreen';

    })
})

const para = document.querySelectorAll('p');
para.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'gold';

    })
})

const keys = document.querySelector('.content-section img');
document.addEventListener('keydown', () => {
    keys.style.transform = 'rotate(20deg)';

})


document.addEventListener('keyup', () => {
    keys.style.transform = 'rotate(340deg)';

})

const lastImg = document.querySelector('.content-destination img');
lastImg.addEventListener('dblclick', () => {
    lastImg.src = "img/vaca.jpg";
})
const navB = document.querySelector('.main-navigation');
window.addEventListener('resize', () => {
        navB.style.backgroundColor = 'yellow';

    })
    // const header = document.querySelector('.intro h2');
    // header.addEventListener('click', () => {
    //     gsap.to(header, {
    //         duration: 1,
    //         rotate: 180,
    //         ease: "elastic(1, 0.75)"
    //     });
    // })