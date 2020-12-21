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

// var n = Math.random();
// n = 2*n;
// n = Math.floor(n);
//
// var headerImages = {"headerimg1", "headerimg2"};
// var bgColors = {"#5857F1", "#3937F9"};
//
// $(".header-img").src = headerImages[n];

// function setHeaderImage() {
//   var index = Math.floor(Math.random() * 2) + 1;
//   var headerImage = "headerimg.png";
//   console.log(index);
//   if(index == 1)
//     headerImage = "headerimg1.png";
//   if(index == 2)
//     headerImage = "headerimg.png";
//   document.querySelectorAll(".header-img")[0].setAttribute("src", "images\\home\\" + headerImage);
// }
//
// function setHeaderImageMob() {
//   var index2 = Math.floor(Math.random() * 2) + 1;
//   var headerImage2 = "headerimgmob.png";
//   console.log(index);
//   if(index2 == 1)
//     headerImage2 = "headerimgmob1.png";
//   if(index2 == 2)
//     headerImage2 = "headerimgmob2.png";
//   document.querySelectorAll(".header-img-mob")[0].setAttribute("src", "images\\home\\" + headerImage2);
// }
