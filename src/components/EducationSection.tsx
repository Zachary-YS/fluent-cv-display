import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Star } from "lucide-react";

const scholarships = [
  "National Scholarship",
  "Tsinghua University Comprehensive Excellence Scholarship",
  "Baosteel Outstanding Student Scholarship",
  "First-Prize Scholarship for Hong Kong, Macao, and Taiwan Students",
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Education
          </p>
          <h2 className="section-heading">Academic Journey</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
            <div className="relative bg-card p-8 md:p-10 rounded-3xl border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                    Tsinghua University
                  </h3>
                  <p className="text-muted-foreground">
                    Bachelor of Engineering in Automation
                  </p>
                </div>
                <BookOpen className="w-10 h-10 text-primary" />
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-secondary rounded-full">
                  <span className="text-sm font-medium">Aug 2023 - Jul 2027</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">
                    GPA: 3.9/4.0
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">
                    Top 3% of Class (Rank 5/172)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">
                    General Artificial Intelligence Experimental Class
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scholarships Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="font-serif text-2xl font-medium">Scholarships</h3>
            </div>

            <div className="space-y-4">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{scholarship}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
