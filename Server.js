const express = require('express');
const cors = require('cors');
const { connect_mongo } = require('./database/mongo_config');

class Server {
    constructor() {
        this.app = express();

        // Connecting to the database
        this.connect_db();

        // Middlewares
        this.app.use(cors());
        this.app.use(express.json());
        // this.app.use(express.static('public')); // In case your are going to use the public directory

        // Routes
        this.app.use('/api/products', require('./routes/product'));
    }

    async connect_db() { await connect_mongo(); }

    listen() {
        const port = process.env.PORT;
        this.app.listen(port, () => {
            console.log('[INFO]\tServer working in the port:', port);
        });
    }

}

module.exports = Server;