const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail= (email,name) => {
    sgMail.send({
        to:email,
        from:'vincentlikefunny@gmail.com',
        subject:'Welcome to the Task App',
        text:`Hello ${name} Welcome to the Task App.Let me know how you get along with the app`
    })
}

const sendCancellationEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'vincentlikefunny@gmail.com',
        subject:'Sorry for heard it',
        text:`Hello ${name} , we are so sorry for losing you temporally.Anyway ,we are still here to look forward your back!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}