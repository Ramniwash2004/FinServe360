import React from "react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="audit"
      className="py-20 bg-gradient-to-br from-[#4A7EC1] to-[#6BA3E8]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white mb-6 text-4xl font-semibold">
          Launch Your Profit Recovery Audit{" "}
          <span className="block mt-2">Today</span>
        </h2>

        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Don't leave money on the table. Our comprehensive audit will uncover
          hidden opportunities in your business and put you on the path to
          greater profitability.
        </p>

        <button className="bg-white text-[#4A7EC1] px-10 py-4 rounded-md shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 group hover:scale-105">
          <span>Get Your Free Audit</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-white/80 mt-6">
          Takes less than 2 minutes • 100% Confidential
        </p>
      </div>
    </section>
  );
}
