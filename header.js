/* --Top Nav-- */
const menuicon = document.getElementById("menuicon");
const topnav = document.getElementById("topnav");
function openMenuResize() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    menuicon.onclick = openMenu;
    topnav.style.display = "none";
  } else {
    topnav.style.display = "block";
    menuicon.onclick = sideMenu;
  }
}
menuicon.onclick = openMenu;
window.addEventListener("resize", openMenuResize);

// WindowSize under 800px
function openMenu() {
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
// WindowSize over 800px
function sideMenu() {
  topnav.style.display = "block";
}
/*---------------*/

/*-- Mega Menu --*/
function openMegaMenu(value) {
  const childGallery = document.getElementById("childGallery");
  const childBrand = document.getElementById("childBrand");
  if (value === "gallery") {
    childGallery.style.display = "block";
    childBrand.style.display = "none";
  } else if (value === "brand") {
    childBrand.style.display = "block";
    childGallery.style.display = "none";
  }
}
const parentGallery = document.getElementById("parentGallery");

// megaMenuの発動がギャラリーのみになっている現象の解消

// megaMenuGallery = () => {
//   const Gallery = document.getElementsByClassName("childGallery");
//   Gallery[0].classList.toggle("megaMenu");
// };
// document.getElementById("parentGallery").addEventListener("click", () => {
//   megaMenuGallery();
// });
// megaMenuBrand = () => {
//   const Brand = document.getElementsByClassName("childBrand");
//   Brand[0].classList.toggle("megaMenu");
// };
// document.getElementById("parentBrand").addEventListener("click", () => {
//   megaMenuBrand();
// });

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
