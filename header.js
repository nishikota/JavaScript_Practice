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
// onclick １回目のクリックで発火しない２回目以降は通常通り動作する

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
function openMegaMenu(id) {
  if (id === "parentGallery") {
    if (childGallery.style.display === "none") {
      childGallery.style.display = "block";
      childBrand.style.display = "none";
    } else {
      childGallery.style.display = "none";
    }
  } else if (id === "parentBrand") {
    if (childBrand.style.display === "none") {
      childBrand.style.display = "block";
      childGallery.style.display = "none";
    } else {
      childBrand.style.display = "none";
    }
  }
}

if (parentBrand === true || parentGallery === true) {
  openMegaMenu();
} else if (parentBrand === false || parentGallery === false) {
  hoverMenu();
}
// hover 反応なし

/* ------------- */

/* menu underline */
const contsPosition = document.querySelectorAll("div.underLineArea");
let windowTop = window.scrollY;
let position = window.innerHeight;
const pglink = document.querySelectorAll("a.pglink");
function addUnderLine() {
  for (let i = 0; i < contsPosition.length; i++) {
    windowTop = window.scrollY;
    position = window.innerHeight * 0.4;
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
  if (window.matchMedia("(min-width: 800px)").matches) {
    window.addEventListener("scroll", () => {
      addUnderLine();
    });
  }
}
// 周辺の変化を外せない → 表示判定域を上部40％にすることで擬似的に再現
// 判定域を下部にも追加できればより正確に表現ができる？
// 初回ロード時に表示されない、リサイズしないと発火しない
