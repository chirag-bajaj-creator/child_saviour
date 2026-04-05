const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text, html) => {
  try {
    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      text,
      html,
    };
    await sgMail.send(msg);
    console.log('✓ Email sent to:', to);
    return true;
  } catch (error) {
    console.error('✗ Email sending failed:', error.message);
    return false;
  }
};

module.exports = sendEmail;
