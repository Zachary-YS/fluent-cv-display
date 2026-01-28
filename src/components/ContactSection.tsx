import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "yingchen23@mails.tsinghua.edu.cn",
    href: "mailto:yingchen23@mails.tsinghua.edu.cn",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+86 133 1898 9115",
    href: "tel:+8613318989115",
  },
  {
    icon: MessageCircle,
    label: "WeChat",
    value: "ZYS726655273",
    href: null,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+853 6888 6223",
    href: "https://wa.me/85368886223",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="section-heading mb-6">Let's Connect</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to say hello? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-6 bg-background rounded-2xl border border-border card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    <p className="font-medium">{method.value}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ) : (
                <div className="flex items-center gap-4 p-6 bg-background rounded-2xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    <p className="font-medium">{method.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Macao, China</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
