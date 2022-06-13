const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/authentication?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false" //MongoDB uri 
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongo successfully")
    })
}
module.exports = connectToMongo;
