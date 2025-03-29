import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const processSteps = [
  { title: "Discovery & Strategy", description: "Understanding business objectives, gathering requirements, and defining the AI/ML strategy." },
  { title: "Data Collection & Processing", description: "Gathering and cleaning data to ensure high-quality inputs for training models." },
  { title: "Model Development & Training", description: "Building and training AI/ML models tailored to business needs." },
  { title: "Testing & Optimization", description: "Ensuring models are accurate, efficient, and optimized for performance." },
  { title: "Deployment & Integration", description: "Deploying AI/ML models into production and integrating with business systems." },
  { title: "Monitoring & Maintenance", description: "Continuous model improvement, updates, and performance tracking." },
];

const plans = [
  {
    title: "Starter AI Package",
    price: "₹25,000/project",
    description: "Basic AI/ML model development for small businesses.",
    features: [
      "Custom AI Model Development",
      "Basic Data Preprocessing & Cleaning",
      "Up to 10,000 Data Points",
      "1-Month Support & Monitoring",
    ],
    buttonText: "Schedule a Call",
  },
  {
    title: "Advanced AI Package",
    price: "₹50,000/project",
    description: "Advanced AI/ML solutions with enhanced features.",
    features: [
      "Complex AI/ML Model Development",
      "Advanced Data Processing & Feature Engineering",
      "Up to 100,000 Data Points",
      "3-Month Support & Optimization",
    ],
    recommended: true,
    buttonText: "Schedule a Call",
  },
  {
    title: "Enterprise AI Suite",
    price: "Custom Pricing",
    description: "Enterprise-grade AI/ML solutions for large-scale applications.",
    features: [
      "End-to-End AI/ML Model Development",
      "Big Data Processing & Scalable Solutions",
      "Unlimited Data Points & Custom Integrations",
      "Ongoing Support & Performance Optimization",
    ],
    buttonText: "Schedule a Call",
  },
];

const faqs = [
  { question: "What industries benefit from AI/ML?", answer: "AI/ML is widely used in healthcare, finance, retail, manufacturing, and many more industries to optimize processes and enhance decision-making." },
  { question: "How long does it take to develop an AI/ML model?", answer: "The timeline varies based on complexity, but typically ranges from a few weeks to a few months." },
  { question: "Do you provide post-deployment support?", answer: "Yes, we offer ongoing support and maintenance to ensure optimal model performance." },
  { question: "Can AI/ML be integrated with existing business software?", answer: "Absolutely! We ensure smooth integration with your existing systems and workflows." },
];

export default function AIMLDevelopment() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text text-center mb-6">AI/ML Development</h2>
      <p className="text-xl text-violet-200 max-w-3xl mx-auto mb-6 text-center">
        We provide cutting-edge AI/ML development services, building intelligent models to enhance automation and decision-making for businesses.
      </p>

      {/* Process Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {processSteps.map((step, index) => (
          <div key={index} className="group cursor-pointer bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all">
            <h3 className="text-xl font-bold text-violet-100 mb-2">{step.title}</h3>
            <p className="text-violet-300">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing Plans */}
      <h3 className="text-4xl md:text-4xl font-bold mt-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text text-center mb-6">Pricing Plans</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className={`relative bg-gradient-to-b from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg flex flex-col h-full ${plan.recommended ? "border-4 border-purple-300" : ""}`}>
            {plan.recommended && (
              <span className="absolute top-4 right-4 bg-purple-300 text-gray-900 px-3 py-1 text-xs rounded-md font-bold">Recommended</span>
            )}
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold my-2 text-yellow-300">{plan.title}</h3>
              <p className="text-lg font-bold mb-2">{plan.price}</p>
              <p className="mb-4 text-sm">{plan.description}</p>
              <ul className="mb-6 space-y-2 text-sm flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-yellow-300">
                    <span className="mr-2 text-yellow-400">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
              <Link to="https://calendly.com/neuramindsai/30min" target="_blank" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition block text-center w-full">
                {plan.buttonText}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <h3 className="text-4xl md:text-4xl font-bold mt-12 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text text-center mb-6">FAQs</h3>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-violet-900/20 p-4 rounded-lg border border-violet-500/20 cursor-pointer" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
            <div className="flex justify-between items-center">
              <h4 className="text-violet-200 text-lg font-semibold">{faq.question}</h4>
              {openFAQ === index ? <ChevronUp className="text-violet-400" /> : <ChevronDown className="text-violet-400" />}
            </div>
            {openFAQ === index && <p className="text-violet-300 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
