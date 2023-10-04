//Reading Data

// use harshitkart

//This query will return all the objects with rating equal to 3.5
db.items.find({Rating:3.5})
//{Rating:3.5} <-- This is filter object

//greater than or equal to
db.items.find({Rating:{$gte:3.5}})

//greater than
db.items.find({Rating:{$gt:3.5}})

//selecting multiple items(and operating)
db.items.find({Rating:{$gte:3.5},price:{$gt:4000}})

//selecting multiple items(or operating)
db.items.find({
    $or:[
        {Rating:{$gte:3.5}},
        {price:{$gt:25000}}
    ]
})

//query to get only rating(projection parameter)
db.items.find({Rating:{$gt:3.5}},{Rating:1})
db.items.find({Rating:{$gt:3.5}},{Rating:1,qty:1})