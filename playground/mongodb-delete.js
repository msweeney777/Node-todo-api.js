//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Example text: true or false'}).then((result) => {
  //   console.log(result);
  // });
  // //deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // })

  //findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('St. Aidan of Lindisfarne').findOneAndDelete({_id: new ObjectID("5c0ad45196e4a45b59530c53")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })

  // db.collection('St. Aidan of Lindisfarne').deleteMany({name: 'Aidan'}).then((result) => {
  //   console.log(result);
  // })

  //db.close();
});
