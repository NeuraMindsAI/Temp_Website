import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Pricing() {
  const plans = [
    {
      title: "Basic Plan",
      price: "₹999/month (Billed ₹11,988 per year)",
      description: "Starter AI Chatbot for small businesses & startups.",
      features: [
        "1,000 Queries/Month (~1M input tokens, ~500K output tokens)",
        "Pre-Built RAG-Based Chatbot – Industry-specific templates",
        "Single Data Source Support – PDFs or website content",
        "Webchat Integration – Basic chatbot setup",
        "Multi-Language Chat – Ask in any language, get responses in another",
      ],
      buttonText: "Schedule a Call",
    },
    {
      title: "Pro Plan",
      price: "₹2,999/month (Billed ₹35,988 per year)",
      description: "Smart & customizable AI chatbot for growing businesses.",
      features: [
        "5,000 Queries/Month (~5M input tokens, ~2.5M output tokens)",
        "Customizable RAG Model – Train on business documents, FAQs, reports",
        "Multi-Source Retrieval – PDFs, books, websites",
        "Web & WhatsApp Integration – Deploy across multiple channels",
        "AI File Search – Retrieve data from uploaded documents",
      ],
      recommended: true,
      buttonText: "Schedule a Call",
    },
    {
      title: "Ultimate Plan",
      price: "₹7,999/month (Billed ₹95,988 per year)",
      description: "Enterprise-grade AI chatbot with advanced features.",
      features: [
        "20,000 Queries/Month (~20M input tokens, ~10M output tokens)",
        "Advanced RAG Retrieval – Multi-source, structured & unstructured data",
        "Enterprise-Level Integrations – Connect with databases, CRMs, APIs",
        "Multi-Step Query Processing – Handles complex questions",
        "Priority Support & AI Monitoring – Faster response & performance tracking",
      ],
      buttonText: "Schedule a Call",
    },
  ];

  return (
    <section className="pt-24 flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Flexible Pricing -{" "}
          <span className="text-purple-600">Tailored to your needs.</span>
        </h2>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg flex flex-col h-full ${
                plan.recommended ? "border-4 border-purple-300" : ""
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <span className="absolute top-4 right-4 bg-purple-300 text-gray-900 px-3 py-1 text-xs rounded-md font-bold">
                  Recommended
                </span>
              )}

              {/* Plan Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{plan.title}</h3>
                <p className="text-lg font-bold mb-2">{plan.price}</p>
                <p className="mb-4 text-sm">{plan.description}</p>

                {/* Features List */}
                <ul className="mb-6 space-y-2 text-sm flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-yellow-300">
                      <span className="mr-2 text-yellow-400">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button (Aligned at Bottom) */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                <Link
                  target="_blank"
                  to="https://calendly.com/neuramindsai/30min"
                  className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition block text-center w-full"
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
