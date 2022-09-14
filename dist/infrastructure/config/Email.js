"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
function sendEmail(otp, email) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("sendEmail", email);
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "radixdt.2530@gmail.com",
                pass: "jeasgear4{Fra", // generated ethereal password
            },
        });
        // send mail with defined transport object
        let info = yield transporter.sendMail({
            from: "radixdt.2530@gmail.com",
            to: "radixdt.2530@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?", // plain text body
        }, function (err, info) {
            console.error("error in send mail ", err);
            console.error("success in send mail ", info.response);
            console.log("Message sent: %s", info.messageId);
        });
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}
module.exports = sendEmail;
