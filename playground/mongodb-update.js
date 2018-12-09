//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('St. Aidan of Lindisfarne').findOneAndUpdate({
    _id: new ObjectID('5c0ad36b3a1c685b55e72e9d')
  }, {
    $set: {
      name: 'Columba'
    },
    $inc: {
      age_of_death: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })
  //db.close();
});
