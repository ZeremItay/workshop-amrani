"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "תוך שבוע קיבלתי אתר שנראה כמו חברה גדולה. לקוחות חדשים התחילו לפנות אליי כבר ביום הראשון.",
    name: "דוד לוי",
    role: "עורך דין",
    stars: 5,
  },
  {
    quote: "הלקוחות שלי אמרו שהאתר נראה הכי מקצועי בתחום. איתי הבין בדיוק מה אני צריכה.",
    name: "שרה כהן",
    role: "מטפלת",
    stars: 5,
  },
  {
    quote: "מהיר, ישיר, ומקצועי. בדיוק מה שרציתי. בלי סיפורים מיותרים, רק תוצאות.",
    name: "משה אברהם",
    role: "קבלן",
    stars: 5,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111115]/40" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8617A]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#E8617A] text-sm tracking-[0.2em] uppercase font-medium">המלצות</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFE6] mt-4 mb-5">
            מה הלקוחות אומרים
          </h2>
          <p className="text-[#8A8A96] text-lg max-w-xl mx-auto">
            לקוחות מרוצים הם הנכס הכי חשוב שלי
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`glass-card rounded-2xl p-8 md:p-10 h-full relative overflow-hidden ${
                  i === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.stars }).map((_, j) => (
                    <Star key={j} size={16} className="fill-[#E8B931] text-[#E8B931]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#F2EFE6] text-lg leading-relaxed mb-8 font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8B931]/30 to-[#E8617A]/30 flex items-center justify-center">
                    <span className="text-[#F2EFE6] font-display text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[#F2EFE6] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#8A8A96] text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
