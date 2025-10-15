import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#E8F2FF] to-white py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-[#0F172A] text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-[#4A7EC1]">Finserve360</span>
          </h1>
          <p className="text-[#64748B] max-w-3xl mx-auto text-lg leading-relaxed">
            We specialize in profit recovery audits and comprehensive financial
            solutions that help businesses uncover hidden opportunities and
            maximize their bottom line. With over a decade of experience, we've
            helped hundreds of companies recover millions in lost revenue.
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNTMxNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional business meeting"
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
