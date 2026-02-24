"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -60, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
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
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#E8B931]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#E8617A]/4 rounded-full blur-[130px]" />
      </div>

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 stripe-pattern opacity-50" />

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 right-[8%] w-16 h-16 border border-[#E8B931]/10 rounded-2xl rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-1/3 right-[5%] w-10 h-10 border border-[#E8617A]/10 rounded-full animate-float-delayed hidden lg:block" />
      <div className="absolute top-[65%] left-[8%] w-3 h-3 bg-[#E8B931]/30 rounded-full animate-float hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-28">

          {/* Right side — Text (RTL: start side) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-medium text-[#E8B931] bg-[#E8B931]/8 rounded-full border border-[#E8B931]/15 backdrop-blur-sm">
                <Sparkles size={14} />
                בניית אתרים בגישת Vibe Coding
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-[#F2EFE6] leading-[1.1] mb-6 tracking-tight"
            >
              אתר מקצועי
              <br />
              שמביא{" "}
              <span className="text-[#E8B931] glow-text">לקוחות</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#8A8A96] max-w-xl mb-10 leading-relaxed font-light"
            >
              אני בונה אתרים ו-Landing Pages לעסקים קטנים ובינוניים שרוצים
              להיראות מקצועיים ולהביא לקוחות חדשים.{" "}
              <span className="text-[#F2EFE6]/70">
                בלי בירוקרטיה, בלי המתנות.
              </span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-[#E8B931] hover:bg-[#D4A82B] text-[#08080C] border-0 text-lg px-10 py-7 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,185,49,0.3)]"
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
                className="border-[#23232D] text-[#8A8A96] hover:text-[#F2EFE6] hover:border-[#E8B931]/30 text-lg px-10 py-7 rounded-full bg-transparent transition-all duration-300"
              >
                ראה שירותים
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-10 pt-8 border-t border-[#23232D]/60"
            >
              {[
                { value: "50+", label: "פרויקטים" },
                { value: "7", label: "ימי עבודה" },
                { value: "100%", label: "שביעות רצון" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl text-[#E8B931]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8A8A96] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Left side — Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-2 flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer ambient glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#E8B931]/15 via-transparent to-[#E8617A]/8 blur-3xl" />

              {/* Decorative corner brackets */}
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#E8B931]/60 rounded-tr-lg z-20" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#E8B931]/60 rounded-bl-lg z-20" />
              <div className="absolute -top-3 -left-3 w-5 h-5 border-t border-l border-[#E8617A]/40 rounded-tl z-20" />
              <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b border-r border-[#E8617A]/40 rounded-br z-20" />

              {/* Image container */}
              <div className="relative w-72 h-[380px] sm:w-80 sm:h-[420px] lg:w-[360px] lg:h-[460px] rounded-3xl overflow-hidden border border-[#E8B931]/15 shadow-[0_0_60px_rgba(232,185,49,0.08)]">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer z-10 pointer-events-none" />

                <Image
                  src="/itay.jpg"
                  alt="איתי זרם - Vibe Coder"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#08080C]/70 to-transparent z-10" />
              </div>

              {/* Floating "available" badge — bottom right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-6 bg-[#111115] border border-[#E8B931]/20 rounded-2xl px-4 py-3 z-20 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#F2EFE6] text-xs font-medium whitespace-nowrap">
                    זמין לפרויקטים
                  </span>
                </div>
              </motion.div>

              {/* Floating "7 days" badge — top left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -left-6 bg-[#111115] border border-[#E8617A]/20 rounded-2xl px-4 py-3 z-20 shadow-2xl backdrop-blur-sm"
              >
                <p className="font-display text-lg text-[#E8B931] leading-none">7 ימים</p>
                <p className="text-[#8A8A96] text-xs mt-1">מהרעיון לאתר חי</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080C] to-transparent" />
    </section>
  );
}
