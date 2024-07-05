//Axios

//Axios are library to make HTTP requests.
async function getFacts(){
    try{
        let  res = await axios.get(url);
        let data = await res.data.fact;

        console.log("Response from Axios...");
        console.log(data);

        //note: In axios we don't need to parse the JSON data unlike the fetch(url) and then res.json() method.
    }catch(err){
        console.log("ERROR- ", err);
    }
}

url= "https://catfact.ninja/fact";
getFacts();