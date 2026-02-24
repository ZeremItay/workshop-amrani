"use client";

import { motion, type Variants } from "framer-motion";
import { FileText, Globe, ShoppingCart, ArrowLeft } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Landing Page ממיר",
    description: "דף נחיתה שנבנה להמיר מבקרים ללקוחות. עיצוב ממוקד המרה, טעינה מהירה, ומותאם לכל מסך.",
    price: "החל מ-₪2,500",
    accent: "#E8B931",
  },
  {
    icon: Globe,
    title: "אתר עסקי מלא",
    description: "אתר תדמית מקצועי עם מספר עמודים, עיצוב ייחודי, וחוויית משתמש מעולה שמייצגת את העסק שלך.",
    price: "החל מ-₪5,000",
    accent: "#E8617A",
  },
  {
    icon: ShoppingCart,
    title: "חנות אונליין",
    description: "פתרון e-commerce מותאם לעסק שלך. ניהול מוצרים, סליקה, ומערכת הזמנות מלאה.",
    price: "החל מ-₪8,000",
    accent: "#10B981",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 relative">
      {/* Subtle bg element */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8B931]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-[#E8B931] text-sm tracking-[0.2em] uppercase font-medium">שירותים</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFE6] mt-4 mb-5">
            מה אני בונה
          </h2>
          <p className="text-[#8A8A96] text-lg max-w-xl leading-relaxed">
            פתרונות דיגיטליים מותאמים אישית לכל סוג של עסק
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-2xl p-8 md:p-10 h-full group cursor-pointer relative overflow-hidden"
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: service.accent }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110"
                  style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}20` }}
                >
                  <service.icon size={26} style={{ color: service.accent }} />
                </div>

                <h3 className="font-display text-2xl text-[#F2EFE6] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#8A8A96] mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="text-sm font-bold tracking-wide"
                    style={{ color: service.accent }}
                  >
                    {service.price}
                  </span>
                  <ArrowLeft
                    size={18}
                    className="text-[#8A8A96] group-hover:text-[#F2EFE6] transition-all duration-300 group-hover:-translate-x-1"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
