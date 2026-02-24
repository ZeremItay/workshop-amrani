"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-[#23232D]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg text-[#F2EFE6]">איתי זרם</span>
            <span className="w-[2px] h-4 bg-[#E8B931]/40 rotate-12" />
            <span className="text-xs text-[#E8B931]/60 tracking-widest uppercase">Vibe Coder</span>
          </div>

          {/* Copyright */}
          <p className="text-[#8A8A96] text-sm">
            &copy; {new Date().getFullYear()} כל הזכויות שמורות
          </p>

          {/* Built with */}
          <p className="text-[#8A8A96]/50 text-xs tracking-wide">
            נבנה עם{" "}
            <span className="text-[#E8B931]/60">תשוקה</span>{" "}
            בישראל
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
