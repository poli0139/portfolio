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
  let svg = document.querySelectorAll("#svgTopLeft ");
  // console.log(svg);
}

const delSection = document.querySelectorAll(".delayed-section");
delSection.forEach((section) => {
  const containerAnimate = gsap.to(section.querySelector(".innerContainer"), {
    y: "10vh",
    ease: "none",
  });
  const imageAnimate = gsap.to(section.querySelectorAll("img"), {
    y: "10vh",
    ease: "none",
    paused: true,
  });
  const scrub = gsap.to(imageAnimate, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true,
  });
  ScrollTrigger.create({
    animation: containerAnimate,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    },
  });
});
