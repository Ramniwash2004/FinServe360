import React from "react";
import { TrendingUp, Shield, Users } from "lucide-react";

export function Differentiators() {
  const features = [
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description:
        "We leverage advanced analytics and industry benchmarks to identify opportunities others miss. Our proprietary algorithms analyze millions of data points to uncover hidden savings in your operations.",
    },
    {
      icon: Shield,
      title: "Proven Process",
      description:
        "Our battle-tested methodology has been refined over thousands of audits. We follow a systematic approach that ensures nothing falls through the cracks while maintaining the highest standards of accuracy.",
    },
    {
      icon: Users,
      title: "Trusted Network",
      description:
        "Benefit from our extensive network of industry experts and strategic partners. We bring specialized knowledge from every sector, ensuring you get insights tailored to your specific business challenges.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-semibold mb-4">
            What Makes <span className="text-[#6BA3E8]">Finserve360 Different</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            We go beyond traditional auditing to deliver transformational insights
            that create lasting value for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#2A4A6F] rounded-xl p-8 hover:bg-[#345A7F] transition-all hover:shadow-xl group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-[#6BA3E8]/20 p-4 rounded-full group-hover:bg-[#6BA3E8]/30 transition-colors">
                    <Icon className="w-12 h-12 text-[#6BA3E8]" />
                  </div>
                </div>
                <h3 className="text-white text-center text-xl font-medium mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <button className="bg-[#6BA3E8] hover:bg-[#5A92D7] text-white px-10 py-4 rounded-md shadow-lg transition-all hover:shadow-xl">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
