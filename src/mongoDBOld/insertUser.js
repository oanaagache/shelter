//insert data to DB from Form
//use mongodb driver
const { MongoClient } = require("mongodb");

// connection url
const uri =
  "mongodb+srv://shelter:shelter@shelter.b0ped9k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// The database to use
const dbName = "shelter";

async function Add() {
  try {
    await client.connect();
    console.log("CONNECTED to server");
    const db = client.db(dbName);
    // Use the collection "users"
    const collection = db.collection("users");

    let user1 = {
      firstName: { firstName: "Alan" },
      surname: { surname: "Alan" },
      email: { email: "Alan@gmail.com" },
      address1: { address1: "Alan" },
      city: { city: "Alan" },
      code: { code: "Alan" },
      status: { status: "Alan" },
      routine: { routine: "Alan" },
    };

    // Insert the first document in the collection
    const first = await collection.insertOne(user1);
    console.log(first);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
Add().catch(console.dir);
