const { bot } = require('../bot')
const User = require('../models/User')
const { start, requestContact, getName, isDriver, getCarName, getCarNumber } = require('../helper/start')
const { login } = require('../helper/login')

bot.on('message', async msg => {

    const chatId = msg.from.id
    const text = msg.text
    const user = await User.findOne({ chatId }).lean()

    if(text === '/start') {
        start(msg)
    }

    if(user) {
        if(user.action === 'request_contact' && !user.phone) {
            requestContact(msg)
        }
        if(user.action === 'name' && !user.name) {
            getName(msg)
        }
        if(user.action === 'car-name' && !user.carName) {
            getCarName(msg)
        }
        if(user.action === 'car-number' && !user.carNumber && user.carName) {
            getCarNumber(msg)
        }

        if(user.name && user.driver === null) {
            bot.sendMessage(chatId, 'Haydovchimisiz ?', {
                reply_markup: {
                    inline_keyboard: [
                        [{text: 'Ha', callback_data: 'yes'}, {text: 'Yo\'q', callback_data: 'no'}],
                    ]
                }
            })
        }

        if(text === '/login' && user.action === '/login') {
            login(msg)
        }
    }
})

bot.on('callback_query', async (query) => {
    const chatId = query.from.id
    const user = await User.findOne({ chatId }).lean()

    if(user.action === 'driver' && !user.driver && user.name) {
        isDriver(query)
    }
})