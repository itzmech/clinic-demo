import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, Calendar, Star, Users, Award } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "12K+", label: "Happy Patients" },
  { icon: Star, value: "4.9", label: "Patient Rating" },
];

const clinicHours = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Dark Navy */}
        <div className="bg-primary flex items-center py-16 lg:py-0">
          <div className="container mx-auto px-4 lg:px-8 lg:pr-12">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto animate-fade-up">
              <p className="text-accent font-medium mb-4 tracking-wide">
                Welcome to Care You Can Trust
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight text-balance">
                Dr. Priya Sharma
              </h1>
              <p className="text-primary-foreground/70 text-lg mb-2">
                MBBS, MD (General Medicine)
              </p>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Providing compassionate and comprehensive healthcare in
                Vijayawada for over 15 years. Specializing in internal medicine,
                diabetes management, and preventive healthcare.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="#contact">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="tel:+919876543210">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Clinic
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center animate-fade-up-delay-${index + 1}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-primary-foreground/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Light Background */}
        <div className="bg-secondary flex items-center py-16 lg:py-0">
          <div className="container mx-auto px-4 lg:px-8 lg:pl-12">
            <div className="max-w-md mx-auto lg:mx-0 space-y-8">
              {/* Clinic Hours Card */}
              <Card className="p-6 shadow-lg animate-fade-up-delay-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    Clinic Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {clinicHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-muted-foreground">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-medium ${
                          schedule.time === "Closed"
                            ? "text-destructive"
                            : "text-card-foreground"
                        }`}
                      >
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Doctor Avatar Placeholder */}
              <Card className="relative overflow-hidden shadow-lg animate-fade-up-delay-2">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-6xl text-primary/60">
                      PS
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <p className="text-primary-foreground font-serif text-xl">
                    Dr. Priya Sharma
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    MBBS, MD (Medicine)
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
