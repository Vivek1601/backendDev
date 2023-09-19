const nodemailer = require("nodemailer");


const sendMail = async(req,res) => {
    let testAccount =  await nodemailer.createTestAccount();

    // connect with smtp 
    let transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'dewitt73@ethereal.email',
          pass: 'Y8n4eNEqn4n94WUq6c'
        }
      });

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <vivekkhandelwal1609@gmail.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      res.json(info);
    
    // res.send("I am sending mail");
}

module.exports = sendMail;