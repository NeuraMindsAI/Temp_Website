

const features = [
  {
    title: "Modern Web Design",
    description:
      "Our team specializes in creating cutting-edge websites that captivate visitors and drive results. With expertise in the latest technologies, we ensure your website stands out.",
  },
  {
    title: "Custom Solutions",
    description:
      "We believe every business is unique. That’s why we design and develop websites that reflect your brand identity and cater to your specific needs.",
  },
  {
    title: "User Experience",
    description:
      "Our designs prioritize user satisfaction with intuitive layouts and seamless navigation. We ensure your audience enjoys an engaging and hassle-free online experience.",
  },
  {
    title: "End-to-End Service",
    description:
      "From initial planning to post-launch support, we offer a complete range of services. You can count on us to handle every aspect of your website design journey.",
  },
  {
    title: "Quality Focused",
    description:
      "We deliver high-quality websites that are visually appealing, functional, and optimized for performance. Your satisfaction is our top priority.",
  },
  {
    title: "Timely Delivery",
    description:
      "We maintain clear communication at every step and stick to deadlines. You’ll always know where your project stands and can trust us to deliver on time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold my-8 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all"
            >
              <h3 className="text-xl font-bold text-violet-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-violet-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
