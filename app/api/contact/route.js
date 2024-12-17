import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const POST = async (req, res) => {
  const { emailfrom, name, message } = await req.json();
  const emailto = "teakaybee97@gmail.com";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailto,
      pass: "fmwmarpjoezfjvdx", 
    },
    tls: {
      rejectUnauthorized: false, // This allows using self-signed certificates
    },
  });

  try {
    await transporter.sendMail({
      from: emailfrom,
      to: emailto,
      subject: `New Message from ${name}`, // Use backticks
      text: `${name} Email: ${emailfrom} & Message: ${message}`, // Use backticks
    });

    return new Response(
      JSON.stringify({ message: "Email sent Successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500 } // Use 500 for internal server error
    );
  }
};
