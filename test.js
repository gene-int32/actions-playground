const test = require('ava');
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://mongodb:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

test('Should connect to mongodb', async t => {
  try {  
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    t.pass();
  } catch(err) {
    t.fail();
  } finally {
    await client.close();
  }
});
