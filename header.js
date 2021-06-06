/*unction openmenu() {
  const vi = document.getElementById("topnav");
  if (vi.style.visibility == "visible") {
    vi.style.visibility = "hidden";
  } else if (vi.style.visibility == "hidden") {
    vi.style.visibility = "visible";
  }
}*/

/*const targets = document.getElementsByClassName("target");
Array.prototype.forEach.call(targets, function (element) {
  const menuH = element.clientHeight;
  targets.style.height = "0px";
});*/

/* --Top Nav-- */
move = () => {
  const targets = document.getElementsByClassName("target");
  Array.prototype.forEach.call(targets, (element) => {
    element.classList.toggle("targetmenu");
    /*const menuH = element.clientHeight;
  targets.style.height = "0px";*/
  });
};

function menuline() {
  document.getElementById("line1").classList.toggle("line_1");
  document.getElementById("line2").classList.toggle("line_2");
  document.getElementById("line3").classList.toggle("line_3");
}
document.getElementById("menuicon").addEventListener("click", function () {
  menuline();
  move();
  /*targets.style.height === "0px"
    ? (targets.style.height = menuH + "px")
    : (targets.style.height = "0px");*/
});
/*---------------*/
/*-- Mega Menu --*/
/* move before
beforeIcon = () => {
  const megaMenuIcon = document.getElementsByClassName("pglink");
  Array.prototype.forEach.call(megaMenuIcon, (element) => {
    element.classList.toggle("moveIcon");
  });
};
*/
megaMenuGallery = () => {
  const Gallery = document.getElementsByClassName("childGallery");
  Gallery[0].classList.toggle("megaMenu");
};
document.getElementById("parentGallery").addEventListener("click", () => {
  megaMenuGallery();
  /*beforeIcon();*/
});
megaMenuBrand = () => {
  const Brand = document.getElementsByClassName("childBrand");
  Brand[0].classList.toggle("megaMenu");
};
document.getElementById("parentBrand").addEventListener("click", () => {
  megaMenuBrand();
  /*beforeIcon();*/
});

/* ------------- */

/* menu underline */
const contsPosition = document.getElementsByClassName("underLineArea");
let windowTop = window.scrollY;
let position = window.innerHeight * 0.8;
const pglink = document.getElementsByClassName("pglink");

/*for (let i = 0; i < contsPosition.length; i++) {
  relativePositionTop.push(contsPosition[i].getBoundingClientRect().top);
  contsPositionTop.push(relativePositionTop[i] + windowY);
  relativePositionBottom.push(
    contsPosition[i].getBoundingClientRect().bottom - window.innerHeight
  );
}*/

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

/*
        if (contsTop < position || contsBottom < position) {
          pglink[i + 1].classList.add("addLine");
        } else if (contsTop > 0 || contsBottom < 0) {
          pglink[i + 1].classList.remove("addLine");
        }
*/

/*let windowY = window.pageYOffset;
let windowH = window.innerHeight;
const underlineArea = document.querySelectorAll(".underLineArea");
const pglink = document.querySelectorAll("pglink");

const lineConts = [];
for (let i = 0; i < underlineArea.length; i++) {
  lineConts.push(underlineArea[i].getBoundingClientRect());
}
const lineContsTop = [];
for (let i = 0; i < lineConts.length; i++) {
  lineContsTop.push(lineConts[i].top + windowY);
}
window.addEventListener("resize", () => {
  windowH = window.innerHeight;
});

window.addEventListener("scroll", () => {
  windowY = window.pageYOffset;
  for (let i = 0; i < pglink.length; i++) {
    if (windowY === lineContsTop[i] - windowH) {
      pglink[i].classList.add("addLine");
    } else {
      pglink[i].classList.remove("addLine");
    }
  }
}); */
/*function resizeWindow(event) {
  if (window.matchMedia("(max-width: 799px)").matches) {
    document.getElementById("menuicon").addEventListener("click", function () {
      menuline();*/
/*openmenu();*/
/*move();
    });
  } else if (window.matchMedia("(min-width: 800px)").matches) {
  }
}

window.addEventListener("resize", resizeWindow);*/
