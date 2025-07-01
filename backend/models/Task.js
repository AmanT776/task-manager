const mongoose = require('mongoose');

const taskSchema = new mongoose.schema({
    title: {type: String,required: true},
    description: String,
    completed: {type: Boolean, default: false},
    owner: {type: mongoose.schema.type.objectId,ref:"User",required: true}
});

module.exports = mongoose.model('Task',taskSchema);