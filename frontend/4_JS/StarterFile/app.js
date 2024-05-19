let smallImages = document.getElementsByClassName("oldImg");

for (let i=0; i < smallImages.length; i++){
    smallImages[i].src = "assets/spiderman_img.png";
    console.log("image source changed successfully.");
}

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

let setAnchorTags = document.querySelectorAll("p a");

for (let i = 0; i < setAnchorTags.length; i++){
    setAnchorTags[i].style.color = "pink";
    console.log(`text-color of anchor tag ${i} changed successfully.`);
}

let setBoxAnchorTags = document.querySelectorAll(".box a");

for (let i = 0; i < setBoxAnchorTags.length; i++){
    setBoxAnchorTags[i].style.color = "red";
    console.log(`text-color of anchor tag ${i} changed successfully.`);
}