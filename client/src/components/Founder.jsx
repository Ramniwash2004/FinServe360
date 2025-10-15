import React from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Founder() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0F172A] text-4xl font-semibold">
            Meet Our <span className="text-[#4A7EC1]">Founder</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc2MDU0NjI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Founder headshot"
                className="w-full aspect-square object-cover"
              /> */}
              <img src="./src/assets/image.png" alt="Ramniwash"/>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <h3 className="text-[#0F172A] text-2xl font-semibold mb-6">
              A Vision Born from <span className="text-[#4A7EC1]">Experience</span>
            </h3>
            <div className="space-y-4 text-[#334155] mb-8 leading-relaxed">
              <p>
                Founded in 2010, Finserve360 emerged from a simple but powerful observation:
                most businesses were leaving money on the table without even knowing it.
                Our founder, with over 20 years in corporate finance and audit, recognized
                that traditional financial reviews were missing critical opportunities.
              </p>
              <p>
                What started as a consultancy helping small businesses optimize their
                expense management has grown into a full-service profit recovery firm
                serving companies of all sizes. Our approach combines forensic accounting
                techniques with modern data analytics to find every dollar of potential savings.
              </p>
              <p>
                Today, we're proud to have helped over 500 businesses recover more than
                $23 million in lost revenue, all while maintaining a 98% client retention
                rate. Our mission remains the same: help businesses thrive by unlocking
                their hidden potential.
              </p>
            </div>

            <button className="bg-[#4A7EC1] hover:bg-[#3D6AA8] text-white px-8 py-3 rounded-md shadow-md transition-all hover:shadow-lg inline-flex items-center gap-2">
              Read Our Story
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
