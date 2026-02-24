"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים"),
  phone: z
    .string()
    .regex(/^0\d{9}$/, "מספר טלפון חייב להכיל 10 ספרות ולהתחיל ב-0"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  message: z
    .string()
    .max(500, "ההודעה חייבת להיות עד 500 תווים")
    .optional()
    .or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

type FormStatus = "idle" | "loading" | "success" | "error";

const WHATSAPP_NUMBER = "972000000000"; // יוחלף בהמשך

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: "website",
        }),
      });

      if (!response.ok) throw new Error("שגיאה בשליחה");

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8B931]/4 rounded-full blur-[180px]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8B931]/10 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="text-[#E8B931] text-sm tracking-[0.2em] uppercase font-medium">צור קשר</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EFE6] mt-4 mb-5">
            מוכן להתחיל?
          </h2>
          <p className="text-[#8A8A96] text-lg">
            השאר פרטים ואחזור אליך תוך 24 שעות
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 amber-border-glow">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display text-3xl text-[#F2EFE6] mb-3">
                    הפנייה נשלחה!
                  </h3>
                  <p className="text-[#8A8A96]">
                    אחזור אליך בהקדם האפשרי. תודה!
                  </p>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                    <AlertCircle size={40} className="text-red-400" />
                  </div>
                  <h3 className="font-display text-3xl text-[#F2EFE6] mb-3">
                    אופס, משהו השתבש
                  </h3>
                  <p className="text-[#8A8A96] mb-6">
                    נסה שוב או שלח הודעה ב-WhatsApp
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="border-[#23232D] text-[#8A8A96] hover:text-[#F2EFE6] rounded-full"
                  >
                    נסה שוב
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-7"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#F2EFE6] text-sm tracking-wide">
                        שם מלא *
                      </Label>
                      <Input
                        id="name"
                        placeholder="השם שלך"
                        {...register("name")}
                        className="bg-[#08080C]/60 border-[#23232D] text-[#F2EFE6] placeholder:text-[#4B4B56] focus:border-[#E8B931]/50 focus:ring-[#E8B931]/20 h-12 rounded-xl transition-all duration-300"
                      />
                      {errors.name && (
                        <p className="text-[#E8617A] text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#F2EFE6] text-sm tracking-wide">
                        טלפון *
                      </Label>
                      <Input
                        id="phone"
                        placeholder="050-0000000"
                        {...register("phone")}
                        className="bg-[#08080C]/60 border-[#23232D] text-[#F2EFE6] placeholder:text-[#4B4B56] focus:border-[#E8B931]/50 focus:ring-[#E8B931]/20 h-12 rounded-xl transition-all duration-300"
                        dir="ltr"
                      />
                      {errors.phone && (
                        <p className="text-[#E8617A] text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#F2EFE6] text-sm tracking-wide">
                      אימייל *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      className="bg-[#08080C]/60 border-[#23232D] text-[#F2EFE6] placeholder:text-[#4B4B56] focus:border-[#E8B931]/50 focus:ring-[#E8B931]/20 h-12 rounded-xl transition-all duration-300"
                      dir="ltr"
                    />
                    {errors.email && (
                      <p className="text-[#E8617A] text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#F2EFE6] text-sm tracking-wide">
                      ספר לי על הפרויקט
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="מה אתה צריך? ספר לי קצת על העסק שלך..."
                      {...register("message")}
                      className="bg-[#08080C]/60 border-[#23232D] text-[#F2EFE6] placeholder:text-[#4B4B56] focus:border-[#E8B931]/50 focus:ring-[#E8B931]/20 min-h-[130px] resize-none rounded-xl transition-all duration-300"
                    />
                    {errors.message && (
                      <p className="text-[#E8617A] text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="bg-[#E8B931] hover:bg-[#D4A82B] text-[#08080C] border-0 h-13 text-base font-bold flex-1 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,185,49,0.25)]"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={20} className="ml-2 animate-spin" />
                          שולח...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="ml-2" />
                          שלח פנייה
                        </>
                      )}
                    </Button>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי, אשמח לשמוע על בניית אתר")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button
                        type="button"
                        className="bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 h-13 text-base font-bold w-full rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.2)]"
                      >
                        <MessageCircle size={18} className="ml-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
