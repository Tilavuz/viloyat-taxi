const User = require("../bot/models/User");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;

const checkCode = async (req, res) => {
  try {
    const { loginCode } = req.body;
    const user = await User.findOne({ loginCode });

    const jwtUser = jwt.sign(
      {
        _id: user._id,
        chatId: user.chatId,
        name: user.name,
        phone: user.phone,
        driver: user.driver,
        carName: user.carName,
        carNumber: user.carNumber,
        admin: user.admin,
      },
      secretKey
    );
    res.json({
        token: jwtUser
    });
  } catch (err) {
    res.json({
      error: "Kodda xatolik bor",
    });
  }
};

module.exports = { checkCode };
