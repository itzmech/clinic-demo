import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AppointmentSection } from "@/components/appointment-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute top-[45rem] -right-40 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <AppointmentSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
