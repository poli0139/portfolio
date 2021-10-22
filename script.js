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
gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -300,
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#scrollSection",
    start: "top top",
    end: "+=1000%",
    scrub: true,
    pin: true,
  },
});

gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

window.addEventListener("scroll", onScroll);

function onScroll() {
  console.log("scrolling");
  // let svgToAnimate = document.querySelectorAll(".zebraBox svg");
  // svgToAnimate.classList.add("animate");
  // console.log(svg);
}

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
document
  .querySelectorAll(".projectName")
  .forEach((project) => project.addEventListener("click", openPopUp));
function openPopUp(event) {
  const target = event.currentTarget;
  const project = target.dataset.project;
  console.log(project);
  document.querySelector(`#${project}`).classList.remove("hidden");
  document;
}
