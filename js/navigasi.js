const MenuToggle = document.querySelector('.menu-toggle input');
const Navigasi = document.querySelector('nav');
const nav = document.querySelector('nav ul');
const clickNav = document.querySelector('nav ul li a');

MenuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

let sticky = Navigasi.offsetTop;
const navbarScroll = () => {
    if(window.pageYOffset >= sticky) {
        Navigasi.classList.add('sticky');
    }
    else {
        Navigasi.classList.remove('sticky');
    }
};
window.onscroll = navbarScroll;

var $li = $('nav ul li a').click(function () {
    $li.removeClass('selected');
    $(this).addClass('selected');
});

$('nav ul li a').click(function (e) {
    var linkHref = $(this).attr("href");
    var idElement = linkHref.substr(linkHref.indexOf("#"));
    $('html, body').animate({
        scrollTop: $(idElement).offset().top
    }, 1000);
    return false;
});