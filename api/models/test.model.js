const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descriptions: {
        type: String,
        required: true
    },
    questions: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

const Test = mongoose.model("Test", testSchema);

module.exports = Test;