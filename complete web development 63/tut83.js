//Deleting data

// show dbs
// use harshitkart
// show collections


db.items.find({price:20000})

//Deleting data from the Mongo Database

db.items.deleteOne({price:20000}) 
//deleteOne will delete the first entry and will delete the first entry in case of Multi document match

db.items.deleteMany({price:20000})
