var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    mark: {
        type: String,
        required: true,
        index: { unique: true}
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    task_to: {
        type: String
    }
});

module.exports = mongoose.model('Task', TaskSchema);