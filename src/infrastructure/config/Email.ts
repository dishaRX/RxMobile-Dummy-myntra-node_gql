const nodemailer = require("nodemailer");

async function sendEmail(otp: any, email: string) {
  console.log("sendEmail", email);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
<<<<<<< HEAD
=======
      // user: "appatidar09@gmail.com",
      // pass: "pyntmaaxrgvbfuky",
>>>>>>> 04bf28353fb2f2908b86955f0990e57191bec689
      user: "radixdt.2530@gmail.com",
      pass: "slonasgjwugkkbkc",
    },
  });

  let info = await transporter.sendMail(
    {
      from: "radixdt.2530@gmail.com", // sender address
      to: email, // list of receivers
      subject: "OTP", // Subject line
      text: `This is your OTP ${otp} to reset your password`,
    },
    function (err: any, info: any) {
      console.error("error in send mail ", err);
      console.error("success in send mail ", info.response);
    }
  );

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export = sendEmail;
