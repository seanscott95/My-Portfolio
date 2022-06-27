const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    try {

        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        const mail = {
            from: name,
            to: process.env.MY_EMAIL,
            subject: "Contact Form Submission",
            html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Message: ${message}</p>`,
        };
    
        contactEmail.sendMail(mail, (error, info) => {
            if (error) {
                console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });

        res.status(200).json({ status: "Message Sent" });

    } catch (err) {
        res.status(500).json(err);
    }
});