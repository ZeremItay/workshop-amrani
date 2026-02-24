import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyMe } from "@/components/WhyMe";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080C] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
