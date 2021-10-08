let wallDiv = document.querySelector(".wallDiv");
let wallPath = "assets/walls/";
let logoDiv = document.querySelector(".logoDiv");
let logoPath = "assets/logos/";

addImages = (n, path, mainDiv) => {
  for (let i = 1; i <= n; i++) {
    const image = document.createElement("img");

    image.src = `${path}${i}.png`;
    image.classList.add("wall");
    image.classList.add("logo");

    mainDiv.appendChild(image);
  }
};

addImages(122, wallPath, wallDiv);
addImages(7, logoPath, logoDiv);
