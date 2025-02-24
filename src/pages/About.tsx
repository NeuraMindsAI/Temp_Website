import { motion } from 'framer-motion';
import { Lightbulb, Target, Zap } from 'lucide-react';

export function About() {
  return (
    <section className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
            About NeuraMindsAI
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
            We're on a mission to revolutionize industries through the power of artificial intelligence and machine learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Lightbulb,
              title: "Our Vision",
              description: "To create a future where AI enhances every aspect of business and life, making technology more accessible and impactful."
            },
            {
              icon: Target,
              title: "Our Mission",
              description: "To deliver cutting-edge AI solutions that solve real-world problems and drive innovation across industries."
            },
            {
              icon: Zap,
              title: "Our Values",
              description: "Innovation, integrity, and impact drive everything we do. We believe in creating technology that makes a difference."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20"
            >
              <item.icon className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold text-violet-100 mb-2">{item.title}</h3>
              <p className="text-violet-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-white mb-4">
          The Story of NeuraMindsAI – Where Intelligence Meets Innovation 🚀
          </p>
          <p>Once upon a time, a group of dreamers 🌟 saw a world full of challenges—hotels struggling to satisfy guests , doctors racing against time to save lives 🏥, farmers battling unpredictable weather , and businesses lost in data chaos 📊</p>
<p>They knew AI could <b>change everything</b>—not just with automation, but with <b>intelligent, human-centric solution</b> And so, <b>NeuraMindsAI</b> was born! </p>  
<p>
From <b>smart hospitality</b> to <b>AI-powered healthcare</b>, <b>seamless event management</b>, <b>precision agriculture</b>, and <b>secure FinTech solutions</b>—NeuraMindsAI is <b>shaping the future</b> one innovation at a time.
</p>
          <p>
Because here, <b>it isn’t just about technology—it’s about empowering people</b>.   
          </p><p>
<b>Welcome to NeuraMindsAI. Where Intelligence Knows No Limits 💡</b>
          </p>
          <p className="text-white">
            Today, we're proud to be at the forefront of AI innovation, helping companies across multiple industries transforming their operations and achieve unprecedented growth through intelligent automation and data-driven insights.🧠
          </p>
        </motion.div>
      </div>
    </section>
  );
}