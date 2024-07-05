url1 = "https://catfact.ninja/fact";

//using promise chaining
fetch(url1)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
        return fetch(url1);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
    })
    .catch((err)=>{
        console.log("Error- ", err);
    });

console.log("hello");

//using async and await keywords
async function getFacts(){
    try {
        let res1 = await fetch(url1);
        let data1 = await res1.json();
        console.log(data1.fact);

        let res2 = await fetch(url1);
        let data2 = await res2.json();
        console.log(data2.fact);

    }catch(err){
        console.log("Error- ", err);
    }
}

getFacts();