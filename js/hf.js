$(function () {
    $('#header').load('components/header.html')
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
