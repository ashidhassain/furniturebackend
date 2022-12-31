const nodemailer = require("nodemailer");
const logger = require("../utils/log");

module.exports.SMTP = {
  service: "gmail",
  port: 587,
  auth: {
    user: "farhaanjumsaifi123@gmail.com",
    pass: "bzycnahdhpjkzdbo",
  },
};

// bzycnahdhpjkzdbo
// farhaanjumsaifi123@gmail.com
module.exports.sendEmail = async ({
  from,
  to,
  bcc,
  subject,
  html,
  attachments,
}) => {
  const transporter = nodemailer.createTransport(this.SMTP);
  return transporter.sendMail({
    from,
    to,
    bcc,
    subject,
    html,
    attachments,
  });
};

module.exports.sendEmailToClient = async ({
  fullName,
  email,
  subject,
  phoneNumber,
  comment,
}) => {
  const messages = `<table border='2px'>
  <tr>
  <th >Name</th>
  <th>Email</th>
  <th>PhoneNumber</th>
  </tr>

  <tr>
  <td>${fullName}</td>
  <td>${email}</td>
  <td>${phoneNumber}</td>
  </tr>
 </table>

    <h1>${subject}</h1>
  <p>${comment}</p>`;
  return this.sendEmail({
    from: "Funiture-Web-Lead",
    to: "farhaanjumsaifi123@gmail.com",
    bcc: "rashidhassain1@gmail.com",
    subject: `Funiture-Web-Lead ${subject} `,
    html: `${messages} `,
  });
};
