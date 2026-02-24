"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "שירותים", href: "#services" },
  { label: "תהליך", href: "#process" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
        setIsMobileOpen(false);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? "bg-[#08080C]/70 backdrop-blur-2xl border-b border-[#E8B931]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-lg md:text-xl font-bold text-[#F2EFE6] font-display tracking-wide">
              איתי זרם
            </span>
            <span className="w-[2px] h-5 bg-[#E8B931]/60 rotate-12" />
            <span className="text-sm md:text-base font-light text-[#E8B931] tracking-widest uppercase">
              Vibe Coder
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(link.href)}
                className="relative text-[#8A8A96] hover:text-[#F2EFE6] transition-colors duration-300 text-sm tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-[1px] bg-[#E8B931] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#E8B931] hover:bg-[#D4A82B] text-[#08080C] border-0 font-bold text-sm px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,185,49,0.3)]"
              >
                בוא נדבר
              </Button>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#F2EFE6] p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="תפריט"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#111115]/95 backdrop-blur-2xl border-b border-[#E8B931]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#8A8A96] hover:text-[#F2EFE6] transition-colors text-right py-2 text-lg tracking-wide"
                >
                  {link.label}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#E8B931] hover:bg-[#D4A82B] text-[#08080C] border-0 font-bold w-full mt-3 rounded-full"
              >
                בוא נדבר
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
