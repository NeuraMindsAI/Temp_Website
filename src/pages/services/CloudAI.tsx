import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const processSteps = [
  { title: "Cloud Strategy & Planning", description: "Defining cloud AI goals, assessing requirements, and selecting the best cloud solutions." },
  { title: "Infrastructure Setup", description: "Configuring cloud-based AI infrastructure for scalability and efficiency." },
  { title: "AI Model Deployment", description: "Deploying AI models in cloud environments for seamless performance." },
  { title: "Optimization & Scaling", description: "Optimizing models and scaling infrastructure based on demand." },
  { title: "Security & Compliance", description: "Ensuring data privacy, compliance, and secure AI deployments." },
  { title: "Continuous Monitoring & Support", description: "Providing ongoing monitoring, updates, and performance improvements." },
];

const plans = [
  {
    title: "Starter Cloud AI Package",
    price: "₹30,000/project",
    description: "Basic AI deployment in the cloud for small businesses.",
    features: [
      "Cloud Infrastructure Setup",
      "Basic AI Model Deployment",
      "Up to 10,000 API Calls per Month",
      "1-Month Support & Maintenance",
    ],
    buttonText: "Schedule a Call",
  },
  {
    title: "Advanced Cloud AI Package",
    price: "₹75,000/project",
    description: "Advanced AI solutions with optimized cloud performance.",
    features: [
      "Cloud-Optimized AI Deployment",
      "Scalable API & Load Balancing",
      "Up to 100,000 API Calls per Month",
      "3-Month Support & Performance Optimization",
    ],
    recommended: true,
    buttonText: "Schedule a Call",
  },
  {
    title: "Enterprise Cloud AI Suite",
    price: "Custom Pricing",
    description: "Enterprise-grade cloud AI solutions for large-scale applications.",
    features: [
      "Full-Scale Cloud AI Deployment",
      "Enterprise-Level Security & Compliance",
      "Unlimited API Calls & Custom Integrations",
      "Ongoing Support & Infrastructure Management",
    ],
    buttonText: "Schedule a Call",
  },
];

const faqs = [
  { question: "Why use cloud for AI?", answer: "Cloud provides scalable, flexible, and cost-effective infrastructure for AI applications." },
  { question: "Which cloud providers do you support?", answer: "We support AWS, Google Cloud, Azure, and other leading cloud platforms." },
  { question: "Can existing AI models be migrated to the cloud?", answer: "Yes, we assist in seamless migration and optimization for cloud environments." },
  { question: "What security measures are implemented?", answer: "We ensure compliance with industry standards, data encryption, and secure access controls." },
];

export default function CloudAI() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text text-center mb-6">Cloud AI</h2>
      <p className="text-xl text-violet-200 max-w-3xl mx-auto mb-6 text-center">
        Deploy scalable AI applications with cloud-based AI and infrastructure.
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
