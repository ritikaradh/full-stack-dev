//Create a system to calculate popcorn prices based on the size customer asked for:
    //if size is 'XL', price is Rs.250
    //if size is 'L', price  is Rs.200
    //if size  is 'M', price is Rs.100
    //if size is 'S', price is Rs.50

let popcorn_size = "L";

if (popcorn_size === "XL"){
    console.log("Price is 250");
}

else if (popcorn_size === "L"){
    console.log("Price is 200");
}

else if (popcorn_size === "M"){
    console.log("Price is 100");
} 

else if (popcorn_size === "S"){
    console.log("Price is 50");
}

else{
    console.log("Please select a different size.")
}