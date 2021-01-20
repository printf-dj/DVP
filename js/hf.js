$(function () {
    $('.header').load('components/header.html')
    $('#footer').load('components/footer.html')
});

//Hamburger//
window.onload=function(){
    const icon = document.querySelector('.hamburger');
    icon.addEventListener('click', () => {
        if (!icon.classList.contains('open')) {
            icon.classList.add('open');
        } else {
            icon.classList.remove('open');
        }
    });
    }

//Sticky Header//
window.addEventListener("scroll", (e) => {
    const header = document.querySelector("header");
    if (window.pageYOffset > 25) {
      header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
});