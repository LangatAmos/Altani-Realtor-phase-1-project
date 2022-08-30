const header = document.querySelector(".header");
const sticky = header.offsetTop;

function headerStick() {
    if (window.scrollY >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}
