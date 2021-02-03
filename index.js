var test = document.getElementById("borderLine");

window.onscroll = function () {
  if (document.documentElement.scrollTop > test.getBoundingClientRect().top) {
    test.style.animation = "mymove 3s linear";
  }
};
window.onscroll = function () {
  if (document.documentElement.scrollTop > test.getBoundingClientRect().top) {
    test.style.animation = "mymove 3s linear";
  }
};
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navigationContainer");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
new WOW().init();
