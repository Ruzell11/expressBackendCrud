const mongoose = require('mongoose');



const dataSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Data', dataSchema);