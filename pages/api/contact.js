import nodemailer from "nodemailer";

export default function contactApi(req, res) {
    if(req.method === "POST"){
        let error;
        let information;

        const transporter = nodemailer.createTransport({
            port: parseInt(process.env.PORT, 10),
            host: process.env.HOST_SMTP,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD_EMAIL,
            },
            secure: true,
          });
        
          const mailData = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Message From ${req.body.name}`,
            text: req.body.message + " | Sent from: " + req.body.email,
            html: `<div>${req.body.message}</div><p>Sent from:
            ${req.body.email}</p>`
          }
        
          transporter.sendMail(mailData, function (err, info) {
            if(err)
              error = err;
            else
            information = info;
            res.status(200).json({ message: "Message sent", information, err });
          })
    } else {
        return res.status(405).json(`Method not allowed /${req.method}`);
    }
}
