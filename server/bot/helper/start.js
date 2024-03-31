const User = require('../../models/User')
const { bot } = require('../bot')

const start = async (msg) => {

    const chatId = msg.from.id
    const user = await User.findOne({ chatId }).lean()

    if(!user) {
        const newUser = new User({
            chatId,
            name: '',
            phone: '',
            driver: null,
            carName: '',
            carNumber: '',
            action: 'request_contact',
        })
        await newUser.save()

        bot.sendMessage(chatId, 'Botdan foydalanish uchun telefon raqamingizni yuboring!', {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: 'Send phone number',
                            request_contact: true
                        }
                    ]
                ],
                resize_keyboard: true
            }
        })
    }
}

const requestContact = async (msg) => {
    
    const chatId = msg.from.id

    if(msg.contact?.phone_number) {

        let user = await User.findOne({ chatId }).lean()
        
        user.phone = msg.contact.phone_number
        user.action = 'name'

        if(user.phone === "998908827251" || user.phone === "+998908827251") {
            user.admin = true
        }
        await User.findByIdAndUpdate(user._id, user, { new: true })

        bot.sendMessage(chatId, "Ismingizni kiriting: ", {
            reply_markup: {
                remove_keyboard: true
            }
        })

    }
}

const getName = async (msg) => {

    const chatId = msg.from.id
    const text = msg.text
    let user = await User.findOne({ chatId }).lean()
    user.name = text.trim()
    user.action = 'driver'
    await User.findByIdAndUpdate(user._id, user, { new: true })

    bot.sendMessage(chatId, 'Haydovchimisiz ?', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Ha', callback_data: 'yes'}, {text: 'Yo\'q', callback_data: 'no'}],
            ]
        }
    })
}

const isDriver = async (query) => {
    const chatId = query.from.id
    const data = query.data

    let user = await User.findOne({chatId}).lean()

    if(data === 'yes') {
        user.driver = true
        user.action = 'car-name'

        bot.sendMessage(chatId, 'Mashinangizning nomini kiriting:\nNamuna: Nexia 2')
    }
    if(data === 'no') {
        user.driver = false
        user.action = '/login'
        bot.sendMessage(chatId, 'Bot ishga tushdi!')
    }
    
    await User.findByIdAndUpdate(user._id, user, { new: true })
}

const getCarName = async (msg) => {
    const chatId = msg.from.id
    const text = msg.text
    let user = await User.findOne({ chatId }).lean()
    
    user.action = 'car-number'
    user.carName = text
    await User.findByIdAndUpdate(user._id, user, { new: true })
    bot.sendMessage(chatId, 'Mashina raqamini kiriting:\nNamuna: 70A717AA')
}

const getCarNumber = async (msg) => {
    const chatId = msg.from.id
    const text = msg.text
    let user = await User.findOne({ chatId }).lean()

    user.action = '/login'
    user.carNumber = text
    await User.findByIdAndUpdate(user._id, user, { new: true })
    bot.sendMessage(chatId, 'Bot ishga tushdi.')
}

module.exports = { start, requestContact, getName, isDriver, getCarName, getCarNumber }