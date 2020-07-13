const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/yoga-express';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));


    // Make All Models Available
    module.exports = {
        Sequence: require('./Sequence'),
        Pose: require('./Pose'),
    };