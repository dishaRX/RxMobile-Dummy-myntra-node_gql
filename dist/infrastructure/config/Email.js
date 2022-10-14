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
function sendEmail(otp, email) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("sendEmail", email);
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "radixdt.2530@gmail.com",
                pass: "slonasgjwugkkbkc",
            },
        });
        let info = yield transporter.sendMail({
            from: "radixdt.2530@gmail.com",
            to: email,
            subject: "OTP",
            text: `This is your OTP ${otp} to reset your password`,
        }, function (err, info) {
            console.error("error in send mail ", err);
            console.error("success in send mail ", info.response);
        });
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
}
module.exports = sendEmail;
