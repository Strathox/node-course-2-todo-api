const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');

  db.collection('ToDos').find({location: 'Abuja'}).toArray().then((docs) => {
    console.log('ToDos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch ToDos', err);
  });

  //db.close();
});
