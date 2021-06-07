/* --Top Nav-- */
// move = () => {
//   const targets = document.getElementsByClassName("target");
//   Array.prototype.forEach.call(targets, (element) => {
//     element.classList.toggle("targetmenu");
//   });
// };
// function menuline() {
//   document.getElementById("line1").classList.toggle("line_1");
//   document.getElementById("line2").classList.toggle("line_2");
//   document.getElementById("line3").classList.toggle("line_3");
// }
// document.getElementById("menuicon").addEventListener("click", function () {
//   menuline();
//   move();
// });

function openMenu() {
  const topnav = document.getElementById("topnav");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  if (topnav.style.display === "none") {
    topnav.style.display = "block";
    line1.style.transform = "translateY(7px) rotate(-45deg)";
    line2.style.opacity = "0";
    line3.style.transform = "translateY(-7px) rotate(-135deg)";
  } else {
    topnav.style.display = "none";
    line1.style.transform = "translateY(0) rotate(0)";
    line2.style.opacity = "1";
    line3.style.transform = "translateY(0) rotate(0)";
  }
}
const menuicon = document.getElementById("menuicon");
menuicon.onclick = openMenu;

/*---------------*/
/*-- Mega Menu --*/
megaMenuGallery = () => {
  const Gallery = document.getElementsByClassName("childGallery");
  Gallery[0].classList.toggle("megaMenu");
};
document.getElementById("parentGallery").addEventListener("click", () => {
  megaMenuGallery();
});
megaMenuBrand = () => {
  const Brand = document.getElementsByClassName("childBrand");
  Brand[0].classList.toggle("megaMenu");
};
document.getElementById("parentBrand").addEventListener("click", () => {
  megaMenuBrand();
});

/* ------------- */

/* menu underline */
const contsPosition = document.getElementsByClassName("underLineArea");
let windowTop = window.scrollY;
let position = window.innerHeight * 0.8;
const pglink = document.getElementsByClassName("pglink");

function resizeWindow(event) {
  if (window.matchMedia("(min-width: 800px)").matches) {
    window.addEventListener("scroll", () => {
      windowTop = window.scrollY;
      position = window.innerHeight * 0.8;
      for (let i = 0; i < contsPosition.length; i++) {
        let contsTop = contsPosition[i].getBoundingClientRect().top;
        let contsBottom = contsPosition[i].getBoundingClientRect().bottom;
        if (contsTop < position && contsTop > 0) {
          pglink[i + 1].classList.add("addLine");
        } else if (contsBottom < position && contsBottom > 0) {
          pglink[i + 1].classList.add("addLine");
        } else if (contsTop > 0 || contsBottom < 0) {
          pglink[i + 1].classList.remove("addLine");
        }
      }
    });
  }
}
window.addEventListener("resize", resizeWindow);
