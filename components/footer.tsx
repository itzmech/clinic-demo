import Link from "next/link";
import { Stethoscope } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.12_0.02_250)] py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="text-primary-foreground">
              <p className="font-serif text-lg font-semibold leading-tight">
                Dr. Priya Sharma
              </p>
              <p className="text-xs text-primary-foreground/60">
                Consultant Physician
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {currentYear} Dr. Priya Sharma Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
