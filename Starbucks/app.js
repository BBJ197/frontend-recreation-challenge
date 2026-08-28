const navMenu = document.getElementById("navMenu");
const starSelection = document.getElementById("star");
const s25 = document.getElementById("s25");
const s50 = document.getElementById("s50");
const s100 = document.getElementById("s100");
const s200 = document.getElementById("s200");

function showMenue() {
  navMenu.style.right = "0";
}

function hideMenue() {
  navMenu.style.right = "-200px";
}

function S25() {
  starSelection.style.setProperty("--underline-position", "-25px");
  s25.style.display = "flex";
  s50.style.display = "none";
  s100.style.display = "none";
  s200.style.display = "none";
}

function S50() {
  starSelection.style.setProperty("--underline-position", "70px");
  s25.style.display = "none";
  s50.style.display = "flex";
  s100.style.display = "none";
  s200.style.display = "none";
}

function S100() {
  starSelection.style.setProperty("--underline-position", "170px");
  s25.style.display = "none";
  s50.style.display = "none";
  s100.style.display = "flex";
  s200.style.display = "none";
}

function S200() {
  starSelection.style.setProperty("--underline-position", "280px");
  s25.style.display = "none";
  s50.style.display = "none";
  s100.style.display = "none";
  s200.style.display = "flex";
}
