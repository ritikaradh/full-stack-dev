const { faker } = require("@faker-js/faker");
const mysql  = require("mysql2");

//create connection with database
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "fashion_spy_demo",
        password: "R@dhakrishna201388"
    }
);

//query database using connection
try{
    connection.query("show tables", (err, result)=>{
        if (err) throw err;
        console.log(result);
    });
}catch(err){
    console.log(err);
}

let getRandomUser = () => {
    return{
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

try{
    q = "Create table if not exists customer_info(userId varchar(50) primary key, username varchar(25), email varchar(25), password varchar(25));"
    connection.query(q, (err, result)=>{
        if (err) throw err;
        console.log(result);
    });
}catch(e){
    console.log(e);
}

try{
    q= "Insert into customer_info values( '23a', 'Tisha', ?, 'ok7');"
    let user_email = ["ritikaradh@gmail.com"];
    connection.query(q, user_email, (err, result) => {
        if (err) throw err;
        console.log("done!");
    });
}catch(e){
    console.log("Error occured", e);
}

connection.end();