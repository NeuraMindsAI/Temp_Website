import { motion } from "framer-motion";
import { TeamMember } from "../components/TeamMember";

export function Team() {
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
            Meet Our Team
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
            The brilliant minds behind NeuraMindsAI's innovation and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMember
            photo="kalash-jain.png"
            name="Kalash Jain"
            role="Co-founder and AI/ML Engineer"
            email="kalash.jain.211086@gmail.com"
            phone="8890713878"
            github="https://github.com/kalashjain9"
            linkedin="https://www.linkedin.com/in/kalash-jain-3b3210202"
            twitter="https://x.com/KalashJain001?t=hamXlon63A-0U2I9uGmfqg&s=09"
            delay={0.1}
          />
          <TeamMember
            photo="abhijeet-sapar.png"
            name="Abhijeet Sapar"
            role="Co-Founder & ML Expert"
            email="abhijeetsapar17@gmail.com"
            phone="9136625777"
            github="https://github.com/Abhijeet17o"
            linkedin="https://www.linkedin.com/in/abhijeet-sapar-08b8a3282/"
            delay={0.2}
          />
          <TeamMember
            photo="rishabh-makwana.png"
            name="Rishabh Makwana"
            role="Co-Founder and ML Engineer"
            email="rxa6169@gmail.com"
            phone="9619226169"
            github="https://github.com/Rishabhpm23"
            linkedin="https://www.linkedin.com/in/rishabhpm23/"
            delay={0.3}
          />
          <TeamMember
            photo="jaimeen-bhagat.png"
            name="Jaimeen Bhagat"
            role="Co-Founder and Web Development Head"
            email="jbhagat2005@gmail.com"
            phone="8291800906"
            github="https://github.com/jaimeenbhagat"
            linkedin="https://www.linkedin.com/in/jaimeen-bhagat"
            twitter="https://x.com/jbhagat2005"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
