import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const processSteps = [
  { title: "Requirement Analysis", description: "Understanding business goals, target audience, and technical needs." },
  { title: "Design & Prototyping", description: "Creating wireframes, UI/UX designs, and interactive prototypes." },
  { title: "Development & Coding", description: "Building responsive, high-performance websites with modern technologies." },
  { title: "Testing & Debugging", description: "Ensuring cross-browser compatibility, responsiveness, and performance optimization." },
  { title: "Deployment & Hosting", description: "Deploying websites with secure and scalable hosting solutions." },
  { title: "Maintenance & Support", description: "Providing updates, security patches, and ongoing support." },
];

const plans = [
  {
    title: "Basic Website Package",
    price: "₹15,000/project",
    description: "Ideal for small businesses and personal portfolios.",
    features: [
      "Custom 5-Page Website",
      "Mobile Responsive Design",
      "Basic SEO Optimization",
      "1 Month Free Support",
    ],
    buttonText: "Get Started",
  },
  {
    title: "Advanced Website Package",
    price: "₹30,000/project",
    description: "Perfect for businesses needing dynamic features and custom development.",
    features: [
      "Custom 10+ Page Website",
      "Advanced UI/UX Design",
      "SEO & Performance Optimization",
      "3 Months Free Support",
    ],
    recommended: true,
    buttonText: "Get Started",
  },
  {
    title: "Enterprise Website Suite",
    price: "Custom Pricing",
    description: "For large-scale businesses needing high-performance web solutions.",
    features: [
      "E-commerce & Web Applications",
      "Custom CMS & API Integration",
      "Unlimited Pages & Custom Features",
      "Ongoing Support & Maintenance",
    ],
    buttonText: "Get Started",
  },
];

const faqs = [
  { question: "What industries do you serve?", answer: "We create websites for businesses across various industries, including e-commerce, healthcare, finance, and more." },
  { question: "How long does website development take?", answer: "It depends on complexity, but most projects are completed within 2-6 weeks." },
  { question: "Do you provide website maintenance?", answer: "Yes, we offer ongoing maintenance, updates, and security support." },
  { question: "Can I update my website content myself?", answer: "Absolutely! We provide easy-to-use CMS options for self-management." },
];

export default function WebsiteDevelopment() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text text-center mb-6">Website Development</h2>
      <p className="text-xl text-violet-200 max-w-3xl mx-auto mb-6 text-center">
        We design and develop high-quality, responsive websites tailored to your business needs.
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
