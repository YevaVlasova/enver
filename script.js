// Menu Burger //

function navToggle() {
	document.getElementById('navUl').classList.toggle("_active");
	document.getElementById('body').classList.toggle("overflow-hidden");
	document.getElementById('html').classList.toggle("overflow-hidden");
}

// Spinner //

function checkSpinner() {
	document.getElementById('spinner').classList.add("_active");
    setTimeout(() => {
        document.getElementById('spinner').classList.remove("_active");
        document.getElementById('desc').innerHTML = 'Thanks for watching! We hope you enjoyed this video. If you have any questions, we are always in touch.';
    }, 3000);
}

// Mouse move effect //

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("service-item")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}

// Owl slider //

$('.owl-carousel').owlCarousel({
    items:3,
    lazyLoad:true,
    loop:false,
    margin:24,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        592:{
            items:2,
            nav:false
        },
        991:{
            items:3,
            nav:false,
            loop:false
        }
    }
});

// Current year //

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;