const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model( 'User', new Schema(
    {
        indexid: String,
        name: String,
        password: String,
        email: String,
        twitter: String,
        about: String,
        magazines: Array
    },
    {
       timestamps: true
    })
);