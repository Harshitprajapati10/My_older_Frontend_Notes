
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/harshitkart',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));

// db.once("open", function(){
//     console.log("We are connected bro..")
// });


// schema<<model<<object , putibjectin db


const kittySchema = new mongoose.Schema({
    name: String
  });

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = 'My name is ' + this.name
    console.log(greeting);
  };

const Kitten = mongoose.model('harrykitty', kittySchema); //document pehle argument ka plural hoga

const harrykitty = new Kitten({ name: 'harrykitty' });
const harrykitty2 = new Kitten({ name: 'harrykitty2' });
// console.log(harrykitty.name); // 'harrykitty'
// harrykitty.speak();

harrykitty.save();
// harrykitty.speak();
harrykitty2.save();
// harrykitty.speak();




run()
async function run(){
  const kitty = await Kitten.find()
  console.log(kitty)
}