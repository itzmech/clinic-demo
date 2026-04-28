import { Card } from "@/components/ui/card";
import {
  Stethoscope,
  Activity,
  Heart,
  Shield,
  Beaker,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Comprehensive diagnosis and treatment for common ailments, infections, fevers, and general health concerns.",
  },
  {
    icon: Activity,
    title: "Diabetes Management",
    description:
      "Expert care for Type 1 & Type 2 diabetes, including blood sugar monitoring, diet planning, and medication management.",
  },
  {
    icon: Heart,
    title: "Hypertension & BP",
    description:
      "Specialized care for blood pressure management, cardiovascular risk assessment, and lifestyle modifications.",
  },
  {
    icon: Shield,
    title: "Preventive Health",
    description:
      "Regular health checkups, vaccinations, health screenings, and personalized preventive care plans.",
  },
  {
    icon: Beaker,
    title: "Thyroid & Hormones",
    description:
      "Diagnosis and management of thyroid disorders, hormonal imbalances, and endocrine-related conditions.",
  },
  {
    icon: Users,
    title: "Family Healthcare",
    description:
      "Complete healthcare solutions for all family members, from children to elderly, under one roof.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <p className="text-accent font-medium mb-3 tracking-wide">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Providing expert medical care with a patient-centered approach for
            all your health needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`service-card p-6 lg:p-8 bg-card hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-up-delay-${
                (index % 4) + 1
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
