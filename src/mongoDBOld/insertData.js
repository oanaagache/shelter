//use mongodb driver
const { MongoClient } = require("mongodb");

// connection url
const uri =
  "mongodb+srv://shelter:shelter@shelter.b0ped9k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// The database to use
const dbName = "test";

async function run() {
  try {
    await client.connect();
    console.log("CONNECTED to server");
    const db = client.db(dbName);
    // Use the collection "people"
    const col = db.collection("people");
    // Construct a document
    let user1 = {
      name: { first: "Alan", last: "Turing" },
      email: { email: "Alan@gmail.com" },
    };
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(user1);
    // // Find one document
    // const myDoc = await col.findOne();
    // // Print to the console
    // console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
