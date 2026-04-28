import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    initials: "RK",
    rating: 5,
    quote:
      "Dr. Priya Sharma has been managing my diabetes for the past 5 years. Her dedication and expertise have helped me lead a normal, healthy life. Highly recommended!",
  },
  {
    name: "Lakshmi Devi",
    initials: "LD",
    rating: 5,
    quote:
      "The entire family has been consulting Dr. Sharma for years. She takes time to listen, explains everything clearly, and genuinely cares about her patients.",
  },
  {
    name: "Venkat Rao",
    initials: "VR",
    rating: 5,
    quote:
      "After struggling with high blood pressure for years, Dr. Sharma helped me get it under control with the right medication and lifestyle changes. Excellent doctor!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "text-amber-400 fill-amber-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <p className="text-accent font-medium mb-3 tracking-wide">
            Patient Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Read testimonials from patients who have experienced our
            compassionate care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 bg-card shadow-md hover:shadow-lg transition-shadow animate-fade-up-delay-${
                index + 1
              }`}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-medium text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <p className="font-medium text-card-foreground">
                  {testimonial.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
