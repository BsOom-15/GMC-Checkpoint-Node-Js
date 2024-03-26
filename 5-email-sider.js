const nodemailer = require("nodemailer");

// Create a transporter object using the default SMTP transport:
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: 
    {
        user: "ibtisamah15@gmail.com",
        pass: "Bsjfhgfn55"
    }
});


// // Define email options:
const mailOption = 
{
    from: "ibtisamah15@gmail.com",
    to: "ibtisamahabdulwahab583@gmail.com",
    subject: "Sending Email From Node Js",
    text: "This Is A Test Email Sent From Node Js"
};


// Send Email:
transporter.sendMail(mailOption, function(error, info){
    if(error){
        console.log("Error Massege: ", error);
    }else{
        console.log("Sent Email: ", info.response);
    }
});