url = "https://icanhazdadjoke.com/";

async function getRandomJokes(){
    try{

        let res = await axios.get(url);
        // let data = await res.json();
        console.log(res);

        //since the api is sending data in the XML format, res.json() won't work in this case
        //so we need to send headers(additional information) with the api call as followings

        let config = {headers:{accept:"application/json"}};
        let res1 = await axios.get(url, config);
        console.log(res1.data.joke);

    }catch(err){
        console.log("Error occured- ", err);
    }
}

getRandomJokes();