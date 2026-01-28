import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, Server } from "lucide-react";

const researchExperience = [
  {
    icon: Bot,
    title: "RL for Robotics Research",
    period: "May 2025 - Present",
    advisor: "Prof. Huazhe Xu",
    institution: "Institute for Interdisciplinary Information Sciences, Tsinghua University",
    highlights: [
      "Researching VLA models, IL data augmentation, and training framework optimization",
      "Gained hands-on experience implementing algorithms on physical hardware",
      "Built foundation in advanced ML and RL via self-study",
    ],
  },
  {
    icon: Server,
    title: "AI Infrastructure Research",
    period: "Oct 2024 - Jun 2025",
    advisor: "Prof. Kaisheng Ma",
    institution: "Institute for Interdisciplinary Information Sciences, Tsinghua University",
    highlights: [
      "Focused on AI Infrastructure for LLMs, specializing in multi-machine cooperative optimization",
      "Investigated parallel strategies to accelerate and optimize LLM inference in distributed systems",
      "Led full-cycle experiments for optimizing multi-turn LLM dialogue systems",
      "Co-authoring a paper currently in submission",
    ],
  },
  {
    icon: Brain,
    title: "Cognitive Neuroscience Project",
    period: "Aug 2025",
    advisor: "",
    institution: "School of Psychological and Cognitive Sciences, Peking University",
    highlights: [
      "Independently designed and developed a computational framework",
      "Analyzed the 'Semantic Visual Gain' effect",
    ],
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Research
          </p>
          <h2 className="section-heading mb-6">Research Experience</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Exploring the frontiers of AI, from robotics to large-scale distributed systems.
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchExperience.map((research, index) => (
            <motion.div
              key={research.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="bg-background p-8 rounded-3xl border border-border card-hover">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <research.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="font-serif text-2xl font-medium">
                        {research.title}
                      </h3>
                      <span className="text-primary font-medium mt-1 md:mt-0">
                        {research.period}
                      </span>
                    </div>

                    {research.advisor && (
                      <p className="text-muted-foreground mb-1">
                        Advised by <span className="text-foreground">{research.advisor}</span>
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mb-4">
                      {research.institution}
                    </p>

                    <ul className="space-y-2">
                      {research.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
