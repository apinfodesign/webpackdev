const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
    name:       String,
    password:   String,
    email:      String,
    about:      String,
    },
    {
    timestamps: true
    }
);

module.exports = mongoose.model( 'User', new Schema(
    {
    name: String,
    about:  String,
    magazines: Array
    },
    {
    timestamps: true
    }
);