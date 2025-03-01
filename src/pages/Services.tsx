import { motion } from 'framer-motion';
import { Building2, Calendar, HeartPulse, LineChart, Plane, Sprout, Bot, Code, Database, ShieldCheck, MessageCircle, Cloud } from 'lucide-react';
import { useState } from 'react';
import { ServiceModal } from '../components/ServiceModal';
import { servicesData } from '../data/services';

const iconComponents = {
  Plane,
  Calendar,
  LineChart,
  HeartPulse,
  Sprout,
  Building2,
  Bot,
  Code,
  Database,
  ShieldCheck,
  MessageCircle,
  Cloud
};

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  // New AI Services We Provide
  const aiServices = [
    { icon: "MessageCircle", title: "Chatbot Integration", description: "Seamless AI-powered chatbot solutions for customer engagement and automation." },
    { icon: "Bot", title: "AI/ML Development", description: "Custom AI and machine learning solutions for business automation and analytics." },
    { icon: "Database", title: "Data Analytics & Insights", description: "Transform raw data into actionable insights with AI-powered analytics." },
    { icon: "Cloud", title: "Cloud AI Solutions", description: "Deploy scalable AI applications with cloud-based AI and infrastructure." },
    { icon: "Code", title: "Website Development", description: "Custom-built, responsive, and SEO-friendly websites for businesses of all sizes." },
    { icon: "ShieldCheck", title: "Business Process Automation", description: "Automate repetitive tasks and optimize workflows with AI-driven automation." }
  ];
  

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
            Our Services
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
           Empowering businesses with cutting-edge AI solutions for automation, insights, and efficiency.          </p>
        </motion.div>

        {/* AI Services We Provide */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service, index) => {
            const Icon = iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all"
              >
                <Icon className="w-12 h-12 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-violet-100 mb-2">{service.title}</h3>
                <p className="text-violet-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Industries We Cater */}
      <div className="max-w-6xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
            Industries We Cater
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
          Revolutionizing industries with AI-driven innovation for smarter, scalable, and data-driven growth.          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all"
                onClick={() => setSelectedService(service)}
              >
                <Icon className="w-12 h-12 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-violet-100 mb-2">{service.title}</h3>
                <p className="text-violet-300">{service.description}</p>
                <button className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>

        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={selectedService || servicesData[0]}
        />
      </div>
    </section>
  );
}