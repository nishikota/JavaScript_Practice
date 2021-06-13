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
    line2.style.display = "none";
    line3.style.transform = "translateY(-7px) rotate(-135deg)";
  } else {
    topnav.style.display = "none";
    line1.style.transform = "translateY(0) rotate(0)";
    line2.style.display = "block";
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
function blockGallery() {
  childGallery.style.display = "block";
}
function noneGallery() {
  childGallery.style.display = "none";
}
function blockBrand() {
  childBrand.style.display = "block";
}
function noneBrand() {
  childBrand.style.display = "none";
}

function addHoverEvent() {
  parentGallery.addEventListener("mouseover", blockGallery);
  parentGallery.addEventListener("mouseout", noneGallery);
  parentBrand.addEventListener("mouseover", blockBrand);
  parentBrand.addEventListener("mouseout", noneBrand);
}
function removeHoverEvent() {
  parentGallery.removeEventListener("mouseover", blockGallery);
  parentGallery.removeEventListener("mouseout", noneGallery);
  parentBrand.removeEventListener("mouseover", blockBrand);
  parentBrand.removeEventListener("mouseout", noneBrand);
}
function galleryClick() {
  if (childGallery.style.display === "none") {
    blockGallery();
    noneBrand();
  } else {
    noneGallery();
  }
}
function brandClick() {
  if (childBrand.style.display === "none") {
    blockBrand();
    noneGallery();
  } else {
    noneBrand();
  }
}
function addClickEvent() {
  parentGallery.addEventListener("click", galleryClick);
  parentBrand.addEventListener("click", brandClick);
}
function removeClickEvent() {
  parentGallery.removeEventListener("click", galleryClick);
  parentBrand.removeEventListener("click", brandClick);
}
function judgeWindow() {
  console.log("judge");
  if (windowWidth.matches === true) {
    addClickEvent();
    removeHoverEvent();
  } else {
    addHoverEvent();
    removeClickEvent();
  }
}
judgeWindow();
window.addEventListener("resize", judgeWindow);
// 最初のクリックイベントが発火しない２度目以降の発火
/* ------------- */

/* menu underline */
const contsPosition = document.querySelectorAll("div.underLineArea");
const pglink = document.querySelectorAll("a.pglink");
let windowTop = 0;
let position = 0;
function addUnderLine() {
  windowTop = window.scrollY;
  position = window.innerHeight * 0.1;
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
