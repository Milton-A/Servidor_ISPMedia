const nodemailer = require("nodemailer");

type sendProps = {
  sendTo: string;
  subject: string;
  text: string;
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "robertomarcelogongo@gmail.com",
    pass: "cxbl msin bflk gisq",
  },
});

export const SendEmail = (sendTo: string) => {
  const mailOptions = {
    from: "ISPMedia",
    to: sendTo,
    subject: "Activação de conta",
    text: "A sua senha para fazer login na plataforma ISPMedia é 123456",
  };

  transporter.sendMail(mailOptions, (error: Error, info: Response) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info);
    }
  });
};
