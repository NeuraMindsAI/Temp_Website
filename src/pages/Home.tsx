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
            Where Intelligence Meets Innovation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white">
            Revolutionizing industries with AI & ML solutions. Transform your
            business with cutting-edge Artificial Intelligence.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link className="w-full sm:w-auto text-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 text-lg rounded-md shadow-md transition" to="/services">
              Explore Our Solutions
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
    </div>
  );
}