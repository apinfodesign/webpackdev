//like pets

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model( 'Magazine', new Schema({
    name: String,
    url: String,
    comment: String,
    type: String,
    userList: Array,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true

}
));