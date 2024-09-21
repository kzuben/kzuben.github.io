const images = [
  "bg.png","bg2.png","bg3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]

console.log(chosenImage);
const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;

//document.body.appendChild(bgImage)

const bg = document.querySelector(".page-wrapper");
bg.style.background = "url(" + `images/${chosenImage}` + ") no-repeat center";
bg.style.backgroundSize = "cover"
console.log()


