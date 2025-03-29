import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const processSteps = [
  { title: "Data Collection & Cleaning", description: "Gathering, structuring, and cleaning data to ensure high-quality insights." },
  { title: "Exploratory Data Analysis", description: "Analyzing patterns, trends, and anomalies to derive valuable insights." },
  { title: "Data Modeling & Visualization", description: "Creating models and visual representations to interpret complex data." },
  { title: "Predictive Analytics", description: "Using AI/ML techniques to forecast future trends and business outcomes." },
  { title: "Deployment & Reporting", description: "Implementing analytics solutions and generating actionable reports." },
  { title: "Continuous Monitoring", description: "Ensuring data accuracy and refining models for ongoing improvement." },
];

const plans = [
  {
    title: "Starter Analytics Package",
    price: "₹20,000/project",
    description: "Basic data analysis for small businesses.",
    features: [
      "Data Cleaning & Preprocessing",
      "Basic Statistical Analysis",
      "Custom Dashboards & Reports",
      "1-Month Support & Insights",
    ],
    buttonText: "Schedule a Call",
  },
  {
    title: "Advanced Analytics Package",
    price: "₹45,000/project",
    description: "Comprehensive data analytics solutions with predictive insights.",
    features: [
      "Advanced Statistical Modeling",
      "Machine Learning-Based Predictions",
      "Interactive Data Dashboards",
      "3-Month Support & Optimization",
    ],
    recommended: true,
    buttonText: "Schedule a Call",
  },
  {
    title: "Enterprise Analytics Suite",
    price: "Custom Pricing",
    description: "Enterprise-level data analytics with big data solutions.",
    features: [
      "Big Data Processing & Optimization",
      "AI-Driven Decision Support",
      "End-to-End Data Analytics Pipeline",
      "Ongoing Support & Performance Tracking",
    ],
    buttonText: "Schedule a Call",
  },
];

const faqs = [
  { question: "How does data analytics help businesses?", answer: "Data analytics enables better decision-making, improves efficiency, and uncovers hidden trends to drive business success." },
  { question: "What types of data can be analyzed?", answer: "We analyze structured and unstructured data from various sources like databases, CRM systems, IoT devices, and more." },
  { question: "Can I integrate analytics with my existing software?", answer: "Yes! We ensure seamless integration with your current tools and platforms for a smooth analytics workflow." },
  { question: "Do you provide ongoing data analytics support?", answer: "Absolutely! We offer continuous monitoring, reporting, and optimization to keep your data-driven insights accurate and up-to-date." },
];

export default function DataAnalytics() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text text-center mb-6">Data Analytics</h2>
      <p className="text-xl text-violet-200 max-w-3xl mx-auto mb-6 text-center">
        Unlock valuable insights and drive business growth with our data analytics solutions.
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