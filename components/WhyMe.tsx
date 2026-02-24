"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Star, MessageCircle, BadgeDollarSign } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "מהיר",
    description: "אתר מוכן תוך שבוע. בלי סחבת, בלי עיכובים מיותרים.",
    number: "01",
  },
  {
    icon: Star,
    title: "מקצועי",
    description: "עיצוב ברמה גבוהה שגורם לעסק שלך להיראות כמו חברה גדולה.",
    number: "02",
  },
  {
    icon: MessageCircle,
    title: "ישיר",
    description: "תקשורת ברורה בלי עגלגלות. אתה יודע בדיוק מה קורה בכל שלב.",
    number: "03",
  },
  {
    icon: BadgeDollarSign,
    title: "מחיר הוגן",
    description: "יחס איכות-מחיר מעולה. אתה מקבל ערך אמיתי על כל שקל.",
    number: "04",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WhyMe() {
  return (
    <section className="py-24 md:py-36 relative">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#E8617A]/3 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#E8617A] text-sm tracking-[0.2em] uppercase font-medium">למה אני</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFE6] mt-4 mb-6 leading-[1.1]">
              כי אני עושה{" "}
              <br className="hidden sm:block" />
              את זה{" "}
              <span className="text-[#E8617A]">אחרת</span>
            </h2>
            <p className="text-[#8A8A96] text-lg leading-relaxed max-w-md">
              לא סוכנות עם 20 אנשים ותהליכים ארוכים. אני עובד ישירות מולך, מבין מה אתה צריך, ומספק תוצאות.
            </p>

            {/* Decorative element */}
            <div className="hidden lg:flex items-center gap-4 mt-12">
              <div className="w-12 h-[1px] bg-[#E8B931]/40" />
              <span className="text-[#E8B931]/60 text-sm">פשוט עובד</span>
            </div>
          </motion.div>

          {/* Right side - cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {advantages.map((adv) => (
              <motion.div
                key={adv.title}
                variants={itemVariants}
                whileHover={{ x: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl p-6 flex items-start gap-5 group cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E8617A]/10 border border-[#E8617A]/15 flex items-center justify-center group-hover:bg-[#E8617A]/15 transition-all duration-300">
                  <adv.icon size={22} className="text-[#E8617A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-lg text-[#F2EFE6]">
                      {adv.title}
                    </h3>
                    <span className="text-[#8A8A96]/40 text-xs font-mono">{adv.number}</span>
                  </div>
                  <p className="text-[#8A8A96] text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
