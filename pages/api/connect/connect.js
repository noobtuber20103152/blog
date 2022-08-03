const mongoose = require('mongoose');
const connection = {};
const uri = `${process.env.uri}`
async function connectToMongo() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

module.exports = connectToMongo;
