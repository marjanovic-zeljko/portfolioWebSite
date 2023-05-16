// hamburger menu mobile screen start
function hamburgerFunction() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}
//   hamburger menu mobile screen end


// Carousel start here 
function biggerScreen() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function mediumScreen() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function smallerScreen() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
window.innerWidth > 1300 ?
    biggerScreen() :
    window.innerWidth < 1300 && window.innerWidth > 991 ?
    mediumScreen() :
    window.innerWidth < 991 && smallerScreen();
// carousel end here 

// sticky navigation start here 
window.onscroll = function() { myFunction() };

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
// sticky navigation end here

// // zoom on click start
// window.onload = () => {
//     // (A) GET ALL IMAGES
//     let all = document.getElementsByClassName("zoomE");

//     // (B) CLICK TO GO FULLSCREEN
//     if (all.length > 0) {
//         for (let i of all) {
//             i.onclick = () => {
//                 // (B1) EXIT FULLSCREEN
//                 if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
//                     if (document.exitFullscreen) { document.exitFullscreen(); } else { document.webkitCancelFullScreen(); }
//                 }

//                 // (B2) ENTER FULLSCREEN
//                 else {
//                     if (i.requestFullscreen) { i.requestFullscreen(); } else { i.webkitRequestFullScreen(); }
//                 }
//             };
//         }
//     }
// };
// // zoom on click end

// animation on scroll start
function revealSections() {
    const hiddenSections = document.querySelectorAll('.hidden-section');


    hiddenSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible-section');
        }
    });
}

window.addEventListener('scroll', revealSections);

// animation on scroll end