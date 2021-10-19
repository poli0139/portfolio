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

  // getPositions(topLeftBox, topRightBox, bottomRightBox);
  // const lines = document.querySelector("#lines");
}

let newPath = document.createElement("path");

// newPath.setAttribute("d", "M470 160 H1300")

function SetTopLeft(shape) {
  shape.setAttribute("width", "100%");
  shape.setAttribute("height", "100%");
  shape.setAttribute("viewBox", "0 0 1500 600");
}
function setTopRight(shape) {
  shape.setAttribute("width", "100%");
  shape.setAttribute("height", "100%");
  shape.setAttribute("viewBox", "0 0 500 1200");
}

function setBottomRight(shape) {
  shape.setAttribute("width", "100%");
  shape.setAttribute("height", "100%");
  shape.setAttribute("viewBox", "0 0 1000 400");
}

function getPositions(topLeft, topRight, bottomRight) {
  const pathStartHor = topLeft.getBoundingClientRect();
  // console.log("horizontal path start", pathStartHor);
  const pathEndHor = topRight.getBoundingClientRect();
  // console.log("Horizontal path end", pathEndHor);
  const pathStartVer = topRight.getBoundingClientRect();
  // console.log("vertical path start", pathStartVer);
  const pathEndVer = bottomRight.getBoundingClientRect();
  // console.log("vertical path end", pathEndVer);
  drawPath(pathStartHor, pathEndHor, pathStartVer, pathEndVer);
}

function drawPath(pos1, pos2, pos3, pos4) {
  console.log(
    "position1",
    pos1,
    "position2",
    pos2,
    "position3",
    pos3,
    "position4",
    pos4
  );
  // const newPath = document.querySelector("#lines path");
  // newPath.setAttributeNS(
  //   null,
  //   "d",
  //   `M${Math.round(pos1.right)} ${Math.round(pos1.bottom)} H${Math.round(
  //     pos2.left
  //   )}`
  // );
  // newPath.setAttributeNS(null, "stroke", "red");
  // newPath.setAttributeNS(null, "fill", "none");
  // newPath.setAttribute("d", `M${pos1.right} ${pos1.bottom} H${pos2.left}`);
  // newPath.setAttribute("stroke", "red");
  // newPath.setAttribute("stroke-width", "1");
  // console.log(newPath);
}
