/* const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://zetade2112:minerva@nodeexpressprojects.aa4lzdv.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch((err) => {
    console.log(err);
  }); */

const { MongoClient } = require('mongodb');

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

main().catch(console.error);
