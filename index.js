$(function () {
    $('.marquee').marquee({
      start: 100,
         duration: 9000,
         duplicated: true,
         gap: 10,
         direction: 'left',
         pauseOnHover: false,
    });
});

// for (var i = 0, i < document.querySelectorAll(".project-img-home").length) {
//   document.querySelectorAll(".project-img-home")[i].addEventListener("click", function () {
//       console.log("I got clicked!");
//   });
// };

// document.querySelector(".button-cooking").addEventListener("mouseover", function() {
//   document.querySelector(".button-cooking").style.backgroundColor = "#400E8F";
//   document.querySelector(".button-cooking").innerHTML = "#FFFFFF";
// });
