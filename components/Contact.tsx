"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You can integrate with email service like EmailJS, SendGrid, or your own API
      console.log("Form submitted:", formData);
      alert("Message sent successfully! (This is a demo)");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-[15%] py-20 bg-darker-bg">
      <h2 className="text-7xl font-bold text-center mb-20">
        Contact <span className="gradient-text">Me</span>
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl flex flex-col gap-12">
        {/* Input Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-10 py-6 text-1.8xl text-text-light bg-dark-bg rounded-2xl border-2 border-accent-orange placeholder-gray-500 focus:outline-none focus:shadow-orange-glow transition-shadow"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-10 py-6 text-1.8xl text-text-light bg-dark-bg rounded-2xl border-2 border-accent-orange placeholder-gray-500 focus:outline-none focus:shadow-orange-glow transition-shadow"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-10 py-6 text-1.8xl text-text-light bg-dark-bg rounded-2xl border-2 border-accent-orange placeholder-gray-500 focus:outline-none focus:shadow-orange-glow transition-shadow"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-10 py-6 text-1.8xl text-text-light bg-dark-bg rounded-2xl border-2 border-accent-orange placeholder-gray-500 focus:outline-none focus:shadow-orange-glow transition-shadow"
          />
        </div>

        {/* Message Textarea */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={10}
          className="w-full px-10 py-6 text-1.8xl text-text-light bg-dark-bg rounded-2xl border-2 border-accent-orange placeholder-gray-500 focus:outline-none focus:shadow-orange-glow transition-shadow resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-12 py-4 bg-accent-orange text-black rounded-3xl font-semibold text-1.8xl shadow-orange-glow hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
