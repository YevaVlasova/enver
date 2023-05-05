function navToggle() {
	var links = document.getElementById('navUl');
	links.classList.toggle("_active");
}


// footer toggle

function infoToggle() {
    var footerInfo = document.getElementById("footerInfo");
    footerInfo.classList.toggle("db");
}


function contactsToggle() {
    var footerContacts = document.getElementById("footerContacts");
    footerContacts.classList.toggle("db");
}

function hourToggle() {
    var footerHours = document.getElementById("footerHours");
    footerHours.classList.toggle("db");
}


document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("service-item")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}


$('.owl-carousel').owlCarousel({
    items:3,
    lazyLoad:true,
    loop:false,
    margin:24
});