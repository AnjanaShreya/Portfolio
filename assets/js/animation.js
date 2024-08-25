document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const animationClasses = {
        'fadeInUp': 'animate__fadeInUp',
        'fadeInDown': 'animate__fadeInDown',
        'fadeInLeft': 'animate__fadeInLeft',
        'fadeInRight': 'animate__fadeInRight',
        'ZoomInUp': 'animate_ZoomInUp',
        'zoomInDown': 'animate__ZoomInDown',
        'ZoomInLeft': 'animate_ZoomInLeft',
        'rollIn': 'animate__rollIn',
        'flip': 'animate__flip',
        'slideInLeft': 'animate__slideInLeft',
        'rotateIn': 'animate__rotateIn'
        // Add more animation classes as needed
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.getAttribute('data-animation');
                const animationClass = animationClasses[animationType] || 'animate__fadeInDown'; // Default animation if not specified

                entry.target.classList.add('visible');
                entry.target.classList.add('animate__animated');
                entry.target.classList.add(animationClass);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// var typed = new Typed("#ele", {
// 	strings: ["I am Anjana Shreya"],
// 	typeSpeed: 25,   // Speed in milliseconds to type each character
//     backSpeed: 25,    // Speed in milliseconds to erase each character
//     backDelay: 1000,  // Delay before starting to erase
//     startDelay: 500,  // Delay before starting typing
//     loop: true,       // Loop the typing effect
//     loopCount: 2,
// })

let epals = document.getElementById('epals');
let profwebsite = document.getElementById('profwebsite');
let organise = document.getElementById('organise');
let DLproject = document.getElementById('DLproject');

let proj1 = document.getElementById('proj1');
let proj2 = document.getElementById('proj2');
let proj3 = document.getElementById('proj3');
let proj4 = document.getElementById('proj4');

proj1.addEventListener('click', function() {
    epals.style.display = 'block';
    profwebsite.style.display = 'none';
    organise.style.display = 'none';
    DLproject.style.display = 'none';
});
proj2.addEventListener('click', function() {
    profwebsite.style.display = 'block';
    organise.style.display = 'none';
    DLproject.style.display = 'none';
    epals.style.display = 'none';
});
proj3.addEventListener('click', function() {
    organise.style.display = 'block';
    DLproject.style.display = 'none';
    epals.style.display = 'none';
    profwebsite.style.display = 'none';
});
proj4.addEventListener('click', function() {
    DLproject.style.display = 'block';
    epals.style.display = 'none';
    profwebsite.style.display = 'none';
    organise.style.display = 'none';
});

// Close buttons event listeners
document.getElementById('close-btn-epals').addEventListener('click', function() {
    epals.style.display = 'none';
});

document.getElementById('close-btn-profwebsite').addEventListener('click', function() {
    profwebsite.style.display = 'none';
});

document.getElementById('close-btn-organise').addEventListener('click', function() {
    organise.style.display = 'none';
});

document.getElementById('close-btn-DLproject').addEventListener('click', function() {
    DLproject.style.display = 'none';
});
