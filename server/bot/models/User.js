const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    chatId: Number,
    name: String,
    phone: String,
    driver: Boolean,
    carName: String,
    carNumber: String,
    action: String,
    admin: {
        type: Boolean,
        default: false
    },
    loginCode: String
})

const User = model("User", UserSchema)

module.exports = User
