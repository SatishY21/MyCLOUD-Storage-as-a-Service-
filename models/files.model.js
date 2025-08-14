const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: [true, 'Path is required']
    },
    originalname: {
        type: String,
        required: [true, 'Original name is required']
    },
    public_id: {
        type: String,
        required: [true, 'Cloudinary public_id is required']
    },
    format: {
        type: String,
        required: [true, 'File format is required']
    },
    resource_type: {
        type: String,
        required: [true, 'Resource type is required'],
        enum: ['image', 'raw', 'video']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'User is required']
    }
}, { timestamps: true });


const file = mongoose.model('file', fileSchema)

module.exports = file

