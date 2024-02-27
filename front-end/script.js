// JavaScript to add scroll event to change navbar background
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("active");
    } else {
        document.getElementById("navbar").classList.remove("active");
    }
}
