window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
/* --Top Nav-- */
let windowWidth = window.matchMedia("(max-width:800px)");
const menuicon = document.getElementById("menuicon");
const topnav = document.getElementById("topnav");

function sideMenu() {
  topnav.style.display = "block";
}
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
function menuMove() {
  if (windowWidth.matches === true) {
    topnav.style.display = "none";
    menuicon.onclick = openMenu;
  } else {
    topnav.style.display = "block";
    menuicon.onclick = sideMenu;
  }
}
menuMove();
window.addEventListener("resize", menuMove);

/*---------------*/

/*-- Mega Menu --*/
const childGallery = document.getElementById("childGallery");
const childBrand = document.getElementById("childBrand");
const parentGallery = document.getElementById("parentGallery");
const parentBrand = document.getElementById("parentBrand");

function hoverMenu() {
  parentGallery.addEventListener("mouseenter", () => {
    childGallery.style.display = "block";
  });
  parentGallery.addEventListener("mouseleave", () => {
    childGallery.style.display = "none";
  });
  parentBrand.addEventListener("mouseenter", () => {
    childBrand.style.display = "block";
  });
  parentBrand.addEventListener("mouseleave", () => {
    childBrand.style.display = "none";
  });
}

parentGallery.addEventListener(
  "click",
  () => {
    if (childGallery.style.display === "none") {
      childGallery.style.display = "block";
      childBrand.style.display = "none";
    } else {
      childGallery.style.display = "none";
    }
  },
  false
);
parentBrand.addEventListener(
  "click",
  () => {
    if (childBrand.style.display === "none") {
      childBrand.style.display = "block";
      childGallery.style.display = "none";
    } else {
      childBrand.style.display = "none";
    }
  },
  false
);

/* ------------- */

/* menu underline */
const contsPosition = document.querySelectorAll("div.underLineArea");
const pglink = document.querySelectorAll("a.pglink");
let windowTop = 0;
let position = 0;
function addUnderLine() {
  windowTop = window.scrollY;
  position = window.innerHeight * 0.1;
  console.log(position);
  console.log(!position);
  for (let i = 0; i < contsPosition.length; i++) {
    let contsTop = contsPosition.item(i).getBoundingClientRect().top;
    let contsBottom = contsPosition.item(i).getBoundingClientRect().bottom;
    if (contsBottom < position && contsBottom > 0) {
      pglink.item(i).style.color = "grey";
      pglink.item(i).style.textDecoration = "underline";
    } else if (contsTop < position && contsTop > 0) {
      pglink.item(i).style.color = "grey";
      pglink.item(i).style.textDecoration = "underline";
    } else if (contsTop > 0 || contsBottom < 0) {
      pglink.item(i).style.color = "black";
      pglink.item(i).style.textDecoration = "none";
    }
  }
}

function resizeWindow() {
  window.addEventListener("scroll", () => {
    if (window.matchMedia("(min-width: 800px)").matches) {
      addUnderLine();
    } else {
      for (let i = 0; i < contsPosition.length; i++) {
        pglink.item(i).style.color = "black";
        pglink.item(i).style.textDecoration = "none";
      }
    }
  });
}
window.addEventListener("resize", resizeWindow());
// 周辺の変化を外せない → 表示判定域を上部40％にすることで擬似的に再現
// 判定域を下部にも追加できればより正確に表現ができる？
// 初回ロード時に表示されない、リサイズしないと発火しない
