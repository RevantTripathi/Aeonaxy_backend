const User = require("../model/user");

const createNewUser = async (req, res) => {
    console.log(req.body);
    const { name, username, email, password, city } = req.body;
  
    
    const userObject = { name, username, email, password, city };
  
    const user = await User.create(userObject);     // to insert data
  
    if (user) {
      res.status(201).json({ message: `new user ${username} created` });
    } else {
      res.status(400).json({ messgae: `Invalid user data received` });
    }
  };

  module.exports = {  
    createNewUser,   
  };