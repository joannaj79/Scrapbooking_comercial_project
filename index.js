new WOW().init();

const firstLine = () => {
  const test = document.getElementById("borderLine");
  let windowTop = window.pageYOffset - 500;
  let testTop = test.getBoundingClientRect().top;
  if (windowTop > testTop) {
    test.style.animation = "mymove 3s linear";
    test.style.display = "block";
  }
};

const secondLine = () => {
  const testTwo = document.getElementById("borderLineTwo");
  let windowTop = window.pageYOffset - 1500;
  let testTwoTop = testTwo.getBoundingClientRect().top;
  if (windowTop > testTwoTop) {
    testTwo.style.animation = "mymove 3s linear";
    testTwo.style.display = "block";
  }
};
const thirdLine = () => {
  const testThree = document.getElementById("borderLineThree");
  let windowTop = window.pageYOffset - 2000;
  let testThreeTop = testThree.getBoundingClientRect().top;
  console.log(testThreeTop);
  if (windowTop > testThreeTop) {
    testThree.style.animation = "mymove 3s linear";
    testThree.style.display = "block";
  }
};

window.onscroll = function () {
  firstLine();
  secondLine();
  thirdLine();
};

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navigationContainer");
    $(".navigationLinksWrap").toggleClass(
      "scrolled",
      $(this).scrollTop() > $nav.height()
    );
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

require(["./lightgallery.js"], function () {
  require(["./lg-zoom.js", "./lg-thumbnail.js"], function () {
    lightGallery(document.getElementById("lightgallery"));
  });
});
