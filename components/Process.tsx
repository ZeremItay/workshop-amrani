"use client";

import { motion, type Variants } from "framer-motion";
import { Coffee, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Coffee,
    number: "01",
    title: "פגישת היכרות",
    description: "נשב (פיזית או בזום), נבין את הצרכים של העסק שלך, ונגדיר יעדים ברורים.",
    tag: "חינם",
  },
  {
    icon: Palette,
    number: "02",
    title: "הצעה ועיצוב",
    description: "תקבל הצעת מחיר מפורטת וקונספט עיצובי שמתאים בדיוק לעסק שלך.",
    tag: "2 ימים",
  },
  {
    icon: Code,
    number: "03",
    title: "פיתוח ובניה",
    description: "אני בונה את האתר עם הטכנולוגיות הכי מתקדמות. תקבל עדכונים שוטפים.",
    tag: "5-7 ימים",
  },
  {
    icon: Rocket,
    number: "04",
    title: "השקה ומסירה",
    description: "האתר עולה לאוויר, אתה מקבל הדרכה מלאה, ואני כאן לכל שאלה.",
    tag: "יום 1",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Process() {
  return (
    <section id="process" className="py-24 md:py-36 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E8B931]/4 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#E8B931] text-sm tracking-[0.2em] uppercase font-medium">תהליך</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFE6] mt-4 mb-5">
            מהרעיון לאתר חי
          </h2>
          <p className="text-[#8A8A96] text-lg max-w-xl mx-auto">
            4 שלבים פשוטים, שקיפות מלאה, ותוצאות מהירות
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-[60px] right-[calc(12.5%)] left-[calc(12.5%)] h-[1px]">
            <div className="w-full h-full bg-gradient-to-l from-[#E8B931]/30 via-[#E8617A]/20 to-[#E8B931]/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number circle */}
                  <div className="relative mb-8">
                    <div className="w-[72px] h-[72px] rounded-full bg-[#111115] border border-[#E8B931]/20 flex items-center justify-center relative z-10">
                      <step.icon size={28} className="text-[#E8B931]" />
                    </div>
                    <span className="absolute -top-1 -left-1 w-7 h-7 bg-[#E8B931] rounded-full flex items-center justify-center text-[#08080C] text-[10px] font-bold z-20">
                      {step.number}
                    </span>
                    {/* Glow */}
                    <div className="absolute inset-0 w-[72px] h-[72px] rounded-full bg-[#E8B931]/10 blur-xl" />
                  </div>

                  <h3 className="font-display text-xl text-[#F2EFE6] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#8A8A96] text-sm leading-relaxed mb-4 max-w-[240px]">
                    {step.description}
                  </p>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#E8B931]/60 bg-[#E8B931]/8 px-3 py-1 rounded-full">
                    {step.tag}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
