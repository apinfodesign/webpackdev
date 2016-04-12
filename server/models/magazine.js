const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model( 'Magazine', new Schema({
    name: String,
    url: String,
    comment: String,
    age: String,
    change: String,
    type: String,
    userList: Array,
    username: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    {
    timestamps: true
    })
);
