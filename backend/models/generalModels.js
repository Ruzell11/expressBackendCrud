const mongoose = require('mongoose');



const dataSchema = mongoose.Schema(

    {
        text: {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Data', dataSchema);