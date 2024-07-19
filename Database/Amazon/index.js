const mongoose = require("mongoose");

main()
    .then(()=>{
        console.log("Connection established successfully!")
    })
    .catch((err)=>{
        console.log("Error occured ", err);
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const clothingSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum : ["Men", "Women", "Kids", "Unisex"],
    }
});

const Clothing = mongoose.model("Clothing", clothingSchema);

///CRUD Operations

//01. Create Operation

const clothing1 = new Clothing({
    description: "coral full sleeve crop top",
    brandName : "Zara",
    price : 499,
    category : "Women",
});

clothing1.save();

Clothing.insertMany([
    {
        description: "light blue half sleeve cotton shirt",
        brandName : "Mango",
        price : 1299,
        category : "Men",
    },

    {
        description : "floral print lavender dress",
        brandName : "Dressberry",
        price : 999,
        category : "Women",
    },

    {
        description : "pink barbie gown for kids",
        brandName : "CryBaby",
        price : 1999,
        category : "Kids"
    }
]);

//02. Read Operation

Clothing.find( { price : { $gt : 999 } } )
    .then((data) => {
        console.log(data);
    })
    .catch( (err) => {
        console.log("Error occured ", err);
    });

Clothing.findOne( {price : {$gte : 999 } } )
    .then((data) => {
        console.log(data);
    })
    .catch( (err) => {
        console.log("Error occured ", err);
    });

//03. Update Operation

Clothing.updateMany(
    {price : {$gt : 999}},
    {price : 2199}
).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err);
});

Clothing.updateMany(
    {price : {$lt : 999}},
    {price : "999"},
    {runValidators : true},
).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err);
});

//04. Delete Operation

Clothing.deleteOne(
    {price : {$eq : 999}}
).then( (res) => {
    console.log(res);
}).catch( (err) => {
    console.log(err);
});