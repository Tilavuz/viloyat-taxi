const User = require('../models/User')
const { bot } = require('../bot')

const loginCode = () => {
    let code = Math.floor(100000 + Math.random() * 900000)

    code = `${code}`.slice(0, 6)

    return code
}


const login = async (msg) => {
    const chatId = msg.from.id
    const user = await User.findOne({ chatId })

    let code = loginCode()
    let codeUser = User.findOne({ loginCode: code })

    while(codeUser){
        code = loginCode()
        codeUser = await User.findOne({ loginCode: code })
    }


    if(!codeUser) {
        user.loginCode = code
        await User.findByIdAndUpdate(user._id, user, { new: true })

        setTimeout(async () => {
            user.loginCode = ''
            await User.findByIdAndUpdate(user._id, user, { new: true })
            bot.sendMessage(chatId, 'Kodingizning yaroqlilik vaqti tugadi!')
        }, 180000)
    }

    bot.sendMessage(chatId, `Login code: <code>${code}</code>`, { parse_mode: 'HTML' })
}

module.exports = { login }