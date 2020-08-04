const { model, Schema } = require('mongoose')

const movieSchema = new Schema({
    title: String,
    description: String,
    imgName: String,
    imgPath: String
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

module.exports = model('Movie', movieSchema)