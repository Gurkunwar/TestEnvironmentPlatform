const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    selections: {
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
        required: true,
        },
        option: {
            type: String,
            required: true
        },
        savedAt: {
            type: Date,
            default: Date.now,
            required: true
        }
    },
    endedAt: {
        type: Date,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

const Submission = mongoose.model("Test", submissionSchema);

module.exports = Submission;