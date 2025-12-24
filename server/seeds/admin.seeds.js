const bcrypt = require("bcryptjs")
const User = require("../models/User")

async function createAdmin() {
  const adminExsits = await User.findOne({role: "ADMIN"});

  if(!adminExsits){
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)

     await User.create({
        username: "siva",
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: "ADMIN"
     })

  }
}

module.exports = createAdmin;