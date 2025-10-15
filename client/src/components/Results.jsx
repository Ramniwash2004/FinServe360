import { DollarSign, Users, TrendingUp, Shield } from 'lucide-react';

const stats = [
  { icon: DollarSign, number: '$23M+', label: 'Revenue Recovered', color: 'text-[#4A7EC1]', bgColor: 'bg-[#4A7EC1]/10' },
  { icon: Users, number: '500+', label: 'Happy Clients', color: 'text-green-600', bgColor: 'bg-green-600/10' },
  { icon: TrendingUp, number: '15-45%', label: 'Profit Increase', color: 'text-purple-600', bgColor: 'bg-purple-600/10' },
  { icon: Shield, number: '98%', label: 'Client Retention', color: 'text-orange-600', bgColor: 'bg-orange-600/10' },
];

export function Results() {
  return (
    <section id="testimonials" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0F172A] mb-4">
            The Proof is in Our <span className="text-[#4A7EC1]">Results</span>
          </h2>
          <p className="text-[#64748B] max-w-3xl mx-auto text-lg">
            Our track record speaks for itself. Here's what we've achieved for businesses just like yours.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {stats.map(({ icon: Icon, number, label, color, bgColor }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all text-center group hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className={`${bgColor} p-4 rounded-full group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
              </div>
              <div className={`text-4xl mb-2 ${color}`}>{number}</div>
              <div className="text-[#64748B]">{label}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#64748B] italic">
          *Results vary by industry and engagement scope. Past performance does not guarantee future results. All statistics represent cumulative totals since 2010.
        </p>
      </div>
    </section>
  );
}
