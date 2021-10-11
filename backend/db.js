const mongoose = require('mongoose');
const mongooseUri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const conn = () => {
    mongoose.connect(mongooseUri, () => {
        console.log('database successfully connected')
    })
}

module.exports = conn