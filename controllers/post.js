const logger = require("../utils/log");
const nodemailer = require("./email");

module.exports.post = async (req, res) => {
  try {
    const reqData = req.body;
    if (
      !reqData.fullName ||
      !reqData.email ||
      !reqData.phoneNumber ||
      !reqData.comment ||
      !reqData.subject
    ) {
      throw new Error("Required Parameters!");
    }
    logger.data("dataaaaaaa", reqData);
    nodemailer
      .sendEmailToClient({
        fullName: reqData.fullName,
        email: reqData.email,
        subject: reqData.subject,
        phoneNumber: reqData.phoneNumber,
        comment: reqData.comment,
      })
      .then((res) => logger.data("Email Response..", res))
      .catch((err) => logger.error("sendEmailToClient", err));
    return res.status(200).send({
      message: "Successfully Form Submited",
      success: true,
      data: reqData,
    });
  } catch (error) {
    logger.error(error);
    return res.status(404).send({
      success: false,
      message: error.message,
    });
  }
};

// bzycnahdhpjkzdbo
// farhaanjumsaifi123@gmail.com
