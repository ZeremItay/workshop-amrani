"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#08080C]">
        {/* Warm amber glow */}
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#E8B931]/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[#E8617A]/4 rounded-full blur-[120px]" />
      </div>

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 stripe-pattern opacity-60" />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-[15%] w-20 h-20 border border-[#E8B931]/10 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-1/3 right-[10%] w-16 h-16 border border-[#E8617A]/10 rounded-full animate-float-delayed" />
      <div className="absolute top-[60%] left-[8%] w-3 h-3 bg-[#E8B931]/30 rounded-full animate-float" />
      <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-[#E8617A]/40 rounded-full animate-float-delayed" />

      {/* Horizontal decorative line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8B931]/10 to-transparent -translate-y-1/2" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-medium text-[#E8B931] bg-[#E8B931]/8 rounded-full border border-[#E8B931]/15 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#E8B931]" />
            בניית אתרים בגישת Vibe Coding
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F2EFE6] leading-[1.1] mb-8 tracking-tight"
        >
          אתר מקצועי
          <br />
          שמביא{" "}
          <span className="text-[#E8B931] glow-text">לקוחות</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[#8A8A96] max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          אני בונה אתרים ו-Landing Pages לעסקים קטנים ובינוניים שרוצים להיראות
          מקצועיים ולהביא לקוחות חדשים.{" "}
          <span className="text-[#F2EFE6]/80">בלי בירוקרטיה, בלי המתנות אינסופיות.</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-[#E8B931] hover:bg-[#D4A82B] text-[#08080C] border-0 text-lg px-10 py-7 rounded-full font-bold w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,185,49,0.3)]"
          >
            <span className="flex items-center gap-2">
              בואו נתחיל
              <ArrowLeft size={20} />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="border-[#23232D] text-[#8A8A96] hover:text-[#F2EFE6] hover:border-[#E8B931]/30 text-lg px-10 py-7 rounded-full bg-transparent w-full sm:w-auto transition-all duration-300"
          >
            ראה שירותים
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8 sm:gap-16 mt-20 pt-10 border-t border-[#23232D]/60"
        >
          {[
            { value: "50+", label: "פרויקטים" },
            { value: "7", label: "ימי עבודה" },
            { value: "100%", label: "שביעות רצון" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl sm:text-3xl text-[#E8B931]">{stat.value}</p>
              <p className="text-xs sm:text-sm text-[#8A8A96] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08080C] to-transparent" />
    </section>
  );
}
