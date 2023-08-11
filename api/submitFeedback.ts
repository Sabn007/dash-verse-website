import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "Gmail", // Example: "Gmail"
            auth: {
                user: "mhzn007@gmail.com",
                pass: "-Laptop123",
            },
        });

        const mailOptions = {
            from: "mhzn007@gmail.com",
            to: "sabin007.maharjan@gmail.com", // Change this to your destination email address
            subject: "Feedback Received",
            text: `Feedback from ${name} (${email}):\n\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ success: false, error: "Email could not be sent" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};
