const User = require("../model/user");
const { Resend } = require('resend');

const resend = new Resend('re_88qSVmQD_H1jt7zdB7wwF9AzHGjHSkMSP');

const createNewUser = async (req, res) => {
    console.log(req.body);
    const { name, username, email, password, city } = req.body;
  
    
    const userObject = { name, username, email, password, city };

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Account Created',
      html: '<p>Congrats on creating your <strong>Dribble Account</strong>!</p>'
    });
  
    const user = await User.create(userObject).then(
      (resp)=>{console.log(resp)
        res.status(201).json({ message: `new user ${name} created` });

      }
    ).catch((err)=>{

      console.log(err);
      res.status(400).json({ messgae: `Invalid user data received` });
    });     
    
  
   
  };

  module.exports = {  
    createNewUser,   
  };