const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users [name, age, location]
  db.collection('St. Aidan of Lindisfarne').insertOne({
    name: 'Aidan',
    age_of_death: '57',
    location: 'Lindisfarne'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert St. Aidan', err);
    }
    console.log(result.ops);
  });
  db.close();
});
