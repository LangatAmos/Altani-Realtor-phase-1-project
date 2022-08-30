const header = document.querySelector(".header");
const sticky = header.offsetTop;

function headerStick() {
    if (window.scrollY >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}

 // toggle between element classes

$(".menu-btn").click(function () {
    $(".navbar .nav-links").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
});
