var test = document.getElementById("borderLine");

window.onscroll = function () {
  if (document.documentElement.scrollTop > test.getBoundingClientRect().top) {
    test.style.animation = "mymove 3s linear";
  }
};
AOS.init({
  duration: 1200,
});
