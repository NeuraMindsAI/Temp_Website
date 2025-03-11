import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import lottie from 'lottie-web';

const features = [
  "AI-Powered Business Transformation",
  "Industry-Focused Customization",
  "Seamless Integration & Scalability",
  "Real-Time Data & Predictive Insights",
  "Cost-Effective & Efficient Solutions",
  "Security & Ethical AI",
];

const industries = [
  {
    title: "Hospitality & Travel",
    features: [
      "AI-powered chatbots for instant guest support",
      "Smart pricing & revenue optimization",
      "Customer sentiment analysis",
      "Automated inventory management",
    ],
  },
  {
    title: "Event Management",
    features: [
      "Smart ticketing & crowd management",
      "AI-driven audience engagement",
      "Virtual & hybrid event solutions",
      "Sponsorship matching",
    ],
  },
  {
    title: "Finance & FinTech",
    features: [
      "AI-driven fraud detection",
      "Predictive analytics",
      "Automated loan approvals",
      "Blockchain security",
    ],
  },
  {
    title: "HealthCare & MedTech",
    features: [
      "AI-powered disease diagnosis",
      "Automated medical chatbots",
      "AI-driven drug discovery",
      "Smart Electronic Health Records (EHR) management & automation",
    ],
  },
  {
    title: "Agriculture & AgriTech",
    features: [
      "AI-Powered Precision Farming",
      "AI-Driven Pest Detection",
      "AI-Powered Supply Chain & Logistics",
      "Weather Prediction & Climate Analysis",
    ],
  },
  {
    title: "Cross-Industry AI Solutions",
    features: [
      "AI-Powered Chatbots & Customer Support",
      "HR & Talent Management AI",
      "Business Process Automation",
      "AI & ML Consulting Services",
    ],
  },
];

export function Home() {
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (lottieContainerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/chat-animation.json', // Load from public folder
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!lottieContainerRef.current || !animationRef.current) return;

        const rect = lottieContainerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        gsap.to(animationRef.current, {
          animationSpeed: 0.5 + x,
          duration: 0.5,
        });

        gsap.to(lottieContainerRef.current, {
          rotationY: (x - 0.5) * 10,
          rotationX: (y - 0.5) * -10,
          duration: 0.5,
        });
      };

      const handleMouseLeave = () => {
        if (!lottieContainerRef.current || !animationRef.current) return;

        gsap.to(animationRef.current, {
          animationSpeed: 1,
          duration: 0.5,
        });

        gsap.to(lottieContainerRef.current, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
        });
      };

      lottieContainerRef.current.addEventListener('mousemove', handleMouseMove);
      lottieContainerRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (lottieContainerRef.current) {
          lottieContainerRef.current.removeEventListener('mousemove', handleMouseMove);
          lottieContainerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-20 md:py-16">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
          Your AI Automation Journey Begins Here!!
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white">
          Transform your business with powerful AI solutions. 
          Automate workflows, boost efficiency, and stay ahead in the AI-powered future.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link className="w-full sm:w-auto text-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 text-lg rounded-md shadow-md transition" to="/services">
              Integrate AI with Neura
            </Link>
            <Link className="w-full sm:w-auto text-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 text-lg rounded-md shadow-md transition" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div ref={lottieContainerRef} className="w-full h-[300px] sm:h-[400px] md:h-[500px] perspective-1000" />
        </div>
      </section>
        {/* Features Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
              What Makes NeuraMindsAI Different?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg bg-violet-900/10"
              >
                <CheckCircle2 className="w-6 h-6 text-violet-400 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-violet-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-violet-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
              Industries We Transform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm border border-violet-500/20"
              >
                <h3 className="text-lg sm:text-xl font-bold text-violet-100 mb-3 md:mb-4">
                  {industry.title}
                </h3>
                <ul className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm sm:text-base text-violet-300"
                    >
                      <span className="text-violet-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm sm:text-base text-violet-200 mb-6 md:mb-8">
              Join the AI revolution with NeuraMindsAI and experience
              Where Intelligence Meets Innovation.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/pricing"
                className="inline-block w-full sm:w-auto bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-violet-500 hover:to-purple-500 transition-all"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}