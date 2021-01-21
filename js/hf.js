$(function () {
    $('#header').load('components/header.html')
    $('#footer').load('components/footer.html')
});

//Hamburger Menu//
    function Menu() {
    const noScroll = document.querySelector("body");
    noScroll.classList.toggle("noscroll");
  }