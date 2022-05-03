const mongoose = require('mongoose');

require('dotenv').config();

 DB_STRING='mongodb://localhost:27017/auth'
    mongoose.connect(DB_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    });


