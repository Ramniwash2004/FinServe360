import React from "react";
import { TrendingUp } from "lucide-react";

export function Footer() {
  const company = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Results", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Free Tools", href: "#" },
    { name: "Guides", href: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold text-xl">
                FinServe<span className="font-light">360</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Unlocking hidden profits, preserving business legacy.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#6BA3E8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#6BA3E8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#6BA3E8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">
            © 2025 FinServe360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
