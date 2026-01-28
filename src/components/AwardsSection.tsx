import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Timer } from "lucide-react";

const technicalAwards = [
  { title: "Champion", event: "Tsinghua University 2023 Creativity Competition", role: "Team Leader" },
  { title: "Second Prize", event: "3rd Tsinghua University Robotic Dog Development Competition", role: "Team Leader" },
  { title: "Excellence Award", event: "7th Tsinghua University Artificial Intelligence Challenge", role: "Team Leader" },
];

const athleticAwards = [
  { title: "Third Place", event: '10,000m Relay, 67th Tsinghua "Ma John Cup"' },
  { title: "Fifth Place", event: '4x400m Relay, 67th Tsinghua "Ma John Cup" Track and Field Meet' },
  { title: "Seventh Place", event: '110m Hurdles, 67th Tsinghua "Ma John Cup" Track and Field Meet' },
];

const highSchoolHonors = [
  "First Place, Macau Regional Applied Physics Competition",
  "Gold Medal (Individual), Hong Kong and Macao Cup Mathematical Olympiad",
  "First Prize, Inter-School Mathematics Competition (High School Group)",
  "Gold Medal, 1500m & 3000m, High School Track and Field Meet",
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Recognition
          </p>
          <h2 className="section-heading mb-6">Awards & Honors</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technical Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-6 rounded-3xl border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium">Technical</h3>
            </div>

            <div className="space-y-4">
              {technicalAwards.map((award, index) => (
                <motion.div
                  key={award.event}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-primary">{award.title}</span>
                    {award.role && (
                      <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                        {award.role}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{award.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Athletic Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card p-6 rounded-3xl border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Timer className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium">Athletic</h3>
            </div>

            <div className="space-y-4">
              {athleticAwards.map((award, index) => (
                <motion.div
                  key={award.event}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-secondary/50 rounded-xl"
                >
                  <span className="text-sm font-semibold text-primary block mb-1">
                    {award.title}
                  </span>
                  <p className="text-sm text-muted-foreground">{award.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* High School Honors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card p-6 rounded-3xl border border-border md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Medal className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium">High School</h3>
            </div>

            <div className="space-y-3">
              {highSchoolHonors.map((honor, index) => (
                <motion.div
                  key={honor}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{honor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
