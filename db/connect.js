const mongoose = require('mongoose');

const connectDB = (url) =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

module.exports = connectDB;

/* const { MongoClient } = require('mongodb');

async function main() {
  const uri =
    'mongodb+srv://zetade2112:minerva@nodeexpressprojects.aa4lzdv.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (e) {
    console.error('Error connecting to the database', e);
  } finally {
    await client.close();
  }
}

main().catch(console.error); */
