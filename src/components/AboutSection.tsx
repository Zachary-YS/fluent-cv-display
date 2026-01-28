import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Dumbbell, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Top 3%",
    description: "GPA 3.9/4.0 at Tsinghua University",
  },
  {
    icon: Brain,
    title: "AI Research",
    description: "Focused on LLMs & Reinforcement Learning",
  },
  {
    icon: Cpu,
    title: "Robotics",
    description: "VLA models & Hardware Implementation",
  },
  {
    icon: Dumbbell,
    title: "Athlete",
    description: "Track & Field Competitor",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="section-heading mb-6">
            Bridging AI & Reality
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A curious mind exploring the intersection of artificial intelligence, 
            robotics, and cognitive science at one of China's premier institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm currently pursuing my Bachelor of Engineering in Automation at 
              <span className="text-foreground font-medium"> Tsinghua University</span>, 
              where I'm also a member of the prestigious General Artificial Intelligence 
              Experimental Class.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My research interests span from large language model optimization to 
              reinforcement learning for robotics. I believe in the power of 
              interdisciplinary thinking—combining insights from cognitive neuroscience, 
              machine learning, and systems engineering to solve complex problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not in the lab, you'll find me on the track—running hurdles 
              and relays, constantly pushing my limits both mentally and physically.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 bg-background rounded-2xl shadow-sm card-hover"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
