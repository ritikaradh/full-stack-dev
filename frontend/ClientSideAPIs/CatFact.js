url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getCatFact();
    
    let para = document.querySelector("p");
    para.innerText = fact;
});

async function getCatFact(){
    try{
        let res = await axios.get(url);

        return res.data.fact;
    }catch(err){
        console.log("Error occured- ", err);
    }   
}