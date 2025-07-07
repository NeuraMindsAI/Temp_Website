import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const BACKEND_URL = "https://temp-website-2.onrender.com/"; // Replace with actual Render URL

    const response = await fetch(`${BACKEND_URL}api/contact/submit/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
            Get in touch with us to explore how AI can transform your business.
          </p>
        </motion.div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg bg-black/30 backdrop-blur-lg border border-violet-500/40 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Get in Touch
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-violet-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500/60"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-violet-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500/60"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-violet-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500/60"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-violet-500 hover:to-purple-500 transition-all">
            Send Message
          </button>
        </div>
        {status && <p className="text-center text-white mt-4">{status}</p>}
      </motion.form>
    </section>
  );
}
