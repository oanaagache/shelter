async function Update() {
  try {
    // connect to the database
    await client.connect();
    console.log("CONNECTED to server");
    const db = client.db(dbName);
    // Use the collection "users"
    const collection = db.collection("users");

    // Insert the first document in the collection
    const first = await collection.updateOne({
      _id: new ObjectId(),
    });
    console.log(first);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
Update().catch(console.dir);
