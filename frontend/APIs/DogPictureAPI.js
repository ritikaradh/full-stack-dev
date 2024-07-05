const url = "https://dog.ceo/api/breed/hound/images/random";

async function getRandomDogImage(){
    try{
        let res = await fetch(url);
        let data = await res.json();

        // console.log(data.message);
        return data.message;

    }catch(err){
        console.log("ERROR- ", err);
    }
}

async function setRandomDogImage(){
    let link = await getRandomDogImage();
    let img = document.querySelector("#random-dog-image");
    img.setAttribute("src", link);
}

setRandomDogImage();



