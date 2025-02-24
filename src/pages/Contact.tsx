import { motion } from "framer-motion";

export function Contact() {
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

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg bg-black/30 backdrop-blur-lg border border-violet-500/40 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Get in Touch</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-violet-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500/60"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-violet-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500/60"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-violet-300 mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500/60"
              placeholder="Your message"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-violet-500 hover:to-purple-500 transition-all"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}