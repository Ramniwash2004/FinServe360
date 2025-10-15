import React from "react";
import { CheckCircle2, TrendingUp, Shield, Lightbulb } from "lucide-react";

// Custom Users icon (from your original code)
function Users({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function Mission() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Integrity First",
      description:
        "We operate with unwavering honesty and transparency in every engagement. Our clients trust us with their most sensitive financial data, and we take that responsibility seriously.",
      bgColor: "bg-blue-50",
      iconColor: "text-[#4A7EC1]",
      iconBg: "bg-[#4A7EC1]/10",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Your success is our success. We tailor every solution to your unique needs and work as an extension of your team to deliver maximum value.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      iconBg: "bg-green-600/10",
    },
    {
      icon: TrendingUp,
      title: "Drive with Purpose",
      description:
        "We're passionate about helping businesses reach their full potential. Every audit, every insight, every recommendation is driven by our commitment to your growth.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-600/10",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description:
        "The financial landscape is always evolving, and so are we. We invest in cutting-edge technology and training to stay ahead of industry trends.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-600/10",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#0F172A] text-4xl font-bold mb-4">
            Our Mission & <span className="text-[#4A7EC1]">Values</span>
          </h2>
          <p className="text-[#64748B] max-w-3xl mx-auto text-lg">
            We're guided by core principles that shape every decision we make
            and every relationship we build.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`${value.bgColor} rounded-xl p-8 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${value.iconBg} p-3 rounded-full flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${value.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#334155] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
