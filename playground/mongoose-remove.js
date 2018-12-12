const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5c105afecffed31f6c18cdb1'}).then((todo) => {
  
});

Todo.findByIdAndRemove('5c105afecffed31f6c18cdb1').then((todo) => {
  console.log(todo);
})
;
