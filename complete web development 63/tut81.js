// Inserting data in mongo db

// use harshitkart -->create database

//Inserting single item
db.items.insertOne({'name':'Samsung 30s','price':22000,'Rating':4.5,'Qty':233,'Sold':98})

//Checking items in db
//Use db.items.find()


//inserting Multiple items 
db.items.insertMany([{'name':'Samsung 30s','price':22000,'Rating':4.5,'Qty':233,'Sold':98},{'name':'Moto 30s','price':20000,'Rating':3.5,'Qty':238,'Sold':58},{'name':'Oppo 30s','price':30000,'Rating':7.5,'Qty':838,'Sold':57,isBig:true}])












// Windows PowerShell
// Copyright (C) Microsoft Corporation. All rights reserved.

// Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

// Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

// PS C:\Users\DELL> mongosh
// Current Mongosh Log ID: 64cd0038b28a410b960f58d8
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3
// Using MongoDB:          6.0.8
// Using Mongosh:          1.10.3

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2023-08-04T19:11:15.133+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
//    2023-08-04T19:11:15.134+05:30: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
// ------

// test>
// test> use harshitkart
// switched to db harshitkart
// harshitkart> db.items.insertOne({'name':'Samsung 30s','price':22000,'Rating':4.5,'Qty':233,'Sold':98})
// {
//   acknowledged: true,
//   insertedId: ObjectId("64cd026db28a410b960f58d9")
// }
// harshitkart> db.items.find()
// [
//   {
//     _id: ObjectId("64cd026db28a410b960f58d9"),
//     name: 'Samsung 30s',
//     price: 22000,
//     Rating: 4.5,
//     Qty: 233,
//     Sold: 98
//   }
// ]
// harshitkart> db.items.find(_
// ... )
// Stopping execution...
// harshitkart> db.items.find()
// MongoNotConnectedError: Client must be connected before running operations
// harshitkart>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// harshitkart>
// PS C:\Users\DELL>
// PS C:\Users\DELL>
// PS C:\Users\DELL>
// PS C:\Users\DELL> mongosh
// Current Mongosh Log ID: 64cd04465fcfabf58a11cd09
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3
// Using MongoDB:          6.0.8
// Using Mongosh:          1.10.3

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2023-08-04T19:29:22.548+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
//    2023-08-04T19:29:22.549+05:30: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
// ------

// test> show dbs
// admin         40.00 KiB
// config       108.00 KiB
// harshit       72.00 KiB
// harshitkart   40.00 KiB
// local         72.00 KiB
// test> use harshitkart
// switched to db harshitkart
// harshitkart> db.items.find()
// [
//   {
//     _id: ObjectId("64cd026db28a410b960f58d9"),
//     name: 'Samsung 30s',
//     price: 22000,
//     Rating: 4.5,
//     Qty: 233,
//     Sold: 98
//   }
// ]
// harshitkart>
// harshitkart>
// harshitkart> db.items.insertMany([{'name':'Samsung 30s','price':22000,'Rating':4.5,'Qty':233,'Sold':98},{'name':'Moto 30s','price':20000,'Rating':3.5,'Qty':238,'Sold':58},{'name':'Oppo 30s','price':30000,'Rating':7.5,'Qty':838,'Sold':57}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("64cd05665fcfabf58a11cd0a"),
//     '1': ObjectId("64cd05665fcfabf58a11cd0b"),
//     '2': ObjectId("64cd05665fcfabf58a11cd0c")
//   }
// }
// harshitkart> db.items.find()
// [
//   {
//     _id: ObjectId("64cd026db28a410b960f58d9"),
//     name: 'Samsung 30s',
//     price: 22000,
//     Rating: 4.5,
//     Qty: 233,
//     Sold: 98
//   },
//   {
//     _id: ObjectId("64cd05665fcfabf58a11cd0a"),
//     name: 'Samsung 30s',
//     price: 22000,
//     Rating: 4.5,
//     Qty: 233,
//     Sold: 98
//   },
//   {
//     _id: ObjectId("64cd05665fcfabf58a11cd0b"),
//     name: 'Moto 30s',
//     price: 20000,
//     Rating: 3.5,
//     Qty: 238,
//     Sold: 58
//   },
//   {
//     _id: ObjectId("64cd05665fcfabf58a11cd0c"),
//     name: 'Oppo 30s',
//     price: 30000,
//     Rating: 7.5,
//     Qty: 838,
//     Sold: 57
//   }
// ]
// harshitkart> db.items.insertMany([{'name':'Samsung 30s','price':22000,'Rating':4.5,'Qty':233,'Sold':98},{'name':'Moto 30s','price':20000,'Rating':3.5,'Qty':238,'Sold':58},{'name':'Oppo 30s','price':30000,'Rating':7.5,'Qty':838,'Sold':57,isBig:True}])
// ReferenceError: True is not defined
// harshitkart> db.items.insertMany([{'name':'Samsung 30s','price':22000,'Rating':4.5,'Qty':233,'Sold':98},{'name':'Moto 30s','price':20000,'Rating':3.5,'Qty':238,'Sold':58},{'name':'Oppo 30s','price':30000,'Rating':7.5,'Qty':838,'Sold':57,isBig:true}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("64cd063c5fcfabf58a11cd0d"),
//     '1': ObjectId("64cd063c5fcfabf58a11cd0e"),
//     '2': ObjectId("64cd063c5fcfabf58a11cd0f")
//   }
// }
// harshitkart> db.items.find()
// [
//   {
//     _id: ObjectId("64cd026db28a410b960f58d9"),
//     name: 'Samsung 30s',
//     price: 22000,
//     Rating: 4.5,
//     Qty: 233,
//     Sold: 98
//   },
//   {
//     _id: ObjectId("64cd05665fcfabf58a11cd0a"),
//     name: 'Samsung 30s',
//     price: 22000,
//     Rating: 4.5,
//     Qty: 233,
//     Sold: 98
//   },
//   {
//     _id: ObjectId("64cd05665fcfabf58a11cd0b"),
//     name: 'Moto 30s',
//     price: 20000,
//     Rating: 3.5,
//     Qty: 238,
//     Sold: 58
//   },
//   {
//     _id: ObjectId("64cd05665fcfabf58a11cd0c"),
//     name: 'Oppo 30s',
//     price: 30000,
//     Rating: 7.5,
//     Qty: 838,
//     Sold: 57
//   },
//   {
//     _id: ObjectId("64cd063c5fcfabf58a11cd0d"),
//     name: 'Samsung 30s',
//     price: 22000,
//     Rating: 4.5,
//     Qty: 233,
//     Sold: 98
//   },
//   {
//     _id: ObjectId("64cd063c5fcfabf58a11cd0e"),
//     name: 'Moto 30s',
//     price: 20000,
//     Rating: 3.5,
//     Qty: 238,
//     Sold: 58
//   },
//   {
//     _id: ObjectId("64cd063c5fcfabf58a11cd0f"),
//     name: 'Oppo 30s',
//     price: 30000,
//     Rating: 7.5,
//     Qty: 838,
//     Sold: 57,
//     isBig: true
//   }
// ]
// harshitkart>


















