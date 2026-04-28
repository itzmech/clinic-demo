import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, Star } from "lucide-react";

const qualifications = [
  { icon: GraduationCap, text: "MBBS - NTR University" },
  { icon: Award, text: "MD (General Medicine)" },
  { icon: Award, text: "Fellowship in Diabetology" },
];

const stats = [
  {
    icon: Users,
    value: "12,000+",
    label: "Patients Treated",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Patient Rating",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-gradient-to-b from-secondary via-[oklch(0.22_0.035_252)] to-secondary"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Photo & Qualifications */}
          <div className="animate-fade-up">
            <Card className="relative overflow-hidden bg-card/95 border-border/70 shadow-xl">
              {/* Photo Placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-serif text-5xl text-primary/60">PS</span>
                </div>
              </div>

              {/* Qualifications Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary/95 p-6">
                <h3 className="font-serif text-lg text-primary-foreground mb-4">
                  Qualifications
                </h3>
                <div className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-primary-foreground/80"
                    >
                      <qual.icon className="w-4 h-4 text-accent" />
                      <span className="text-sm">{qual.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right - About Content */}
          <div>
            <div className="animate-fade-up">
              <p className="text-accent font-medium mb-3 tracking-wide">
                About Dr. Priya Sharma
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
                Dedicated to Your Health & Well-being
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed animate-fade-up-delay-1">
              <p>
                Dr. Priya Sharma is a highly experienced Consultant Physician
                based in Vijayawada, Andhra Pradesh, with over 15 years of
                expertise in internal medicine and patient care.
              </p>
              <p>
                After completing her MBBS from NTR University and MD in General
                Medicine, Dr. Sharma pursued further specialization in
                Diabetology. Her patient-centered approach and commitment to
                evidence-based medicine have earned her the trust of thousands
                of families in the region.
              </p>
              <p>
                She believes in treating patients holistically, addressing not
                just the symptoms but the root causes of health issues. Her
                clinic is equipped with modern diagnostic facilities to provide
                comprehensive care under one roof.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10 animate-fade-up-delay-2">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/95 border-border/70 text-center shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
