window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 500);
});
var $li = $('nav ul li a').click(function() {
    $li.removeClass('selected');
    $(this).addClass('selected');
});
