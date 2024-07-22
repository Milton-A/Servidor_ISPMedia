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
    user: "exemple@gmail.com",
    pass: ""
  },
});

export const SendEmail = (sendTo: string, text: string) => {
  const mailOptions = {
    from: "ISPMedia",
    to: sendTo,
    subject: "Activação de conta",
    text,
  };

  transporter.sendMail(mailOptions, (error: Error, info: Response) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info);
    }
  });
};
