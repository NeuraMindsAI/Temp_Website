import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Pricing() {
  const plans = [
    {
      title: "Basic",
      description:
        "Choose a bot from a wide variety of NeuraMindsAI templates.",
      features: [
        "24/7 availability",
        "5 day delivery",
        "NeuraMindsAI consultation for automations (add-ons)",
        "Webchat deployment",
        "Pay-as-you-go monthly billing",
      ],
      buttonText: "Schedule a Call",
    },
    {
      title: "Standard",
      description:
        "Hyper personalised bots, exclusively designed for your business needs",
      features: [
        "24/7 availability",
        "Tailored workflow and for a specific use case",
        "Choose from a variety of automations and integrations",
        "Multiple deployment platforms",
        "Dynamic File, Image, Video sharing",
      ],
      recommended: true,
      buttonText: "Schedule a Call",
    },
    {
      title: "Premium",
      description: "Enterprise-grade bots with wide range of functionality",
      features: [
        "Everything in Standard",
        "Centralised conversational hub for diverse use-cases",
        "Multiple data sources integration",
        "Advanced multi-step custom automations",
        "Priority Support",
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
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg ${
                plan.recommended ? "border-4 border-purple-300" : ""
              }`}
            >
              {plan.recommended && (
                <span className="absolute top-2 right-2 bg-purple-300 text-gray-900 px-4 py-1 text-sm rounded-md font-bold">
                  Recommended
                </span>
              )}
              <h3 className=" text-2xl font-semibold mb-4 text-yellow-300">
                {plan.title}
              </h3>
              <p className="mb-4">{plan.description}</p>
              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-yellow-300">
                    <span className="mr-2 text-yellow-400">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
              >
                <Link
                  target="_blank"
                  to="https://calendly.com/neuramindsai/30min"
                  className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition w-full text-center"
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
