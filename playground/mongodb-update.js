const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');


  db.collection('ToDos').findOneAndUpdate({
    _id: new ObjectID('5a877d2057eb35283403265a')
  }, {
    $set: {
      name: "Ben"
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
