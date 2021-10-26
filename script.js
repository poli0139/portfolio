document.addEventListener("DOMContentLoaded", start);
async function start() {
  let response = await fetch("assets/background.svg");
  let mySvgData = await response.text();
  //Put content
  document.querySelector(" #svgTopLeft").innerHTML = mySvgData;
  document.querySelector(" #svgTopRight").innerHTML = mySvgData;
  document.querySelector("#svgBottomRight").innerHTML = mySvgData;
  //set boxes
  const topLeftBox = document.querySelector(" #svgTopLeft svg");
  SetTopLeft(topLeftBox);
  const topRightBox = document.querySelector(" #svgTopRight svg");
  setTopRight(topRightBox);
  const bottomRightBox = document.querySelector("#svgBottomRight svg");
  setBottomRight(bottomRightBox);
}

function SetTopLeft(shape) {
  shape.setAttribute("width", "100%");
  shape.setAttribute("height", "100%");
  shape.setAttribute("viewBox", "0 0 900 300");
  shape.setAttribute("class", "svgToChange");
}
function setTopRight(shape) {
  shape.setAttribute("width", "100%");
  shape.setAttribute("height", "100%");
  shape.setAttribute("viewBox", "0 0 300 300");
  shape.setAttribute("class", "svgToChange");
}

function setBottomRight(shape) {
  shape.setAttribute("width", "100%");
  shape.setAttribute("height", "100%");
  shape.setAttribute("viewBox", "0 0 1000 400");
  shape.setAttribute("class", "svgToChange");
}

//SCROLL

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  onUpdate: ({ trigger, progress }) =>
    trigger.style.setProperty("--hue", progress.toFixed(2)),
});

//SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//POPUP
document
  .querySelectorAll(".projectName")
  .forEach((project) => project.addEventListener("click", openPopUp));
function openPopUp(event) {
  const target = event.currentTarget;
  const project = target.dataset.project;
  console.log(project);
  popUp = document.querySelector(`#${project}`);
  popUp.classList.remove("hidden");
  document.querySelector("#darkCover").classList.remove("hide");
  document.querySelector("#darkCover").classList.add("darker");
  popUp.querySelector(".close").addEventListener("click", () => {
    popUp.classList.add("hidden");
    document.querySelector("#darkCover").classList.remove("darker");
    document.querySelector("#darkCover").classList.add("hide");
  });
}
