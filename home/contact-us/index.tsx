"use client";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitFeedback.ts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600">
        Get in touch with us at
        <a href="mailto: dashverse1@gmail.com" className="text-blue-700 ml-2">
          {" "}
          dashverse1@gmail.com
        </a>{" "}
        or call us at
        <a href="tel: +977-9807374413" className="text-blue-700 ml-2">
          +977-9807374413
        </a>
      </p>
      <form className="mt-6 max-w-md w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded p-2 mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded p-2 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded p-2 mb-2"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          {submitted ? "Submitted" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
