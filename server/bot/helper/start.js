const User = require('../models/User')
const { bot } = require('../bot')


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
    let text = msg.text.trim()
    const pattern = /^[a-zA-Z]+$/

    if(!pattern.test(text)) {
        return bot.sendMessage(chatId, 'Ismingiz faqatgina harflardan tashkil topishi kerak!')
    }

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
    const pattern = /^[a-zA-Z0-9\s]+$/; 

    if(!pattern.test(text)) {
        return bot.sendMessage(chatId, 'Mashina nomi faqatgina harflar va raqamlardan tashkil topishi kerak!')
    }

    let user = await User.findOne({ chatId }).lean()
    
    user.action = 'car-number'
    user.carName = text
    await User.findByIdAndUpdate(user._id, user, { new: true })
    bot.sendMessage(chatId, 'Mashina raqamini kiriting:\nNamuna: 70A717AA')
}

const getCarNumber = async (msg) => {
    const chatId = msg.from.id
    const text = msg.text.toUpperCase()
    const pattern = /^[a-zA-Z0-9]+$/; 

    if(!pattern.test(text)) {
        return bot.sendMessage(chatId, 'Mashina raqami faqatgina harflar va raqamlardan tashkil topishi kerak!')
    }

    let user = await User.findOne({ chatId }).lean()
    user.action = '/login'
    user.carNumber = text
    await User.findByIdAndUpdate(user._id, user, { new: true })
    bot.sendMessage(chatId, 'Bot ishga tushdi.')
}



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
    }else if(user && !user.phone) {
        bot.sendMessage(chatId, 'Botga telefon raqamingizni yuboring!', {
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

    if(user) {
        if(user.name && user.driver === null) {
            bot.sendMessage(chatId, 'Haydovchimisiz ?', {
                reply_markup: {
                    inline_keyboard: [
                        [{text: 'Ha', callback_data: 'yes'}, {text: 'Yo\'q', callback_data: 'no'}],
                    ]
                }
            })
        }
        if(user.driver && !user.carName) {
            getCarName(msg)
        }
        if(user.carName && !user.carNumber) {
            getCarNumber(msg)
        }
    }
}



module.exports = { start, requestContact, getName, isDriver, getCarName, getCarNumber }
