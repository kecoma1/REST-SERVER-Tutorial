const mongoose = require('mongoose');

const connect_mongo = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('[INFO]\tBase de datos online');
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    connect_mongo
}