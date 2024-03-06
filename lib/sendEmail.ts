const sendEmail = async (email : string, verificationCode : string) => {
    console.log(`Sending email to ${email} with verification code: ${verificationCode}`);
}

export default sendEmail;