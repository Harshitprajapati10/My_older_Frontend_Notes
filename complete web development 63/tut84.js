// Updating data

//CRUD --> create read update and delete


// show dbs
// use harshitkart
// show collections
db.items.find()
db.anotherCollections.InsertOne({a:66})


// updating

db.items.updateOne({name:"Samsung 30s"},{$set:{price:2}}) //first samsumg ka price 2 kardo

db.items.updateMany({name:"Samsung 30s"},{$set:{price:3,Rating:1}}) //update all Samsung items