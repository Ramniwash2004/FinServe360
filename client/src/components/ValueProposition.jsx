import { CheckCircle } from 'lucide-react';

const benefits = [
  'Uncover hidden revenue opportunities in your existing operations',
  'Data-driven insights backed by proven financial analysis methods',
  'No upfront costs - we only succeed when you succeed',
  'Comprehensive audit process covering all major expense categories'
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-4 border-dashed border-[#4A7EC1] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Benefits */}
            <div>
              <h2 className="text-[#0F172A] mb-8">
                Built to Help <span className="text-[#4A7EC1]">Businesses</span>{' '}
                <span className="text-[#4A7EC1]">Thrive Smarter</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#4A7EC1] flex-shrink-0 mt-1" />
                    <p className="text-[#334155]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Why Choose Us */}
            <div className="bg-[#F0F7FF] rounded-xl p-8">
              <h3 className="text-[#0F172A] mb-6">Why Choose Us?</h3>
              <div className="space-y-4 text-[#334155]">
                <p>
                  At Finserve360, we don't just identify problems—we deliver actionable 
                  solutions that drive real financial impact. Our team of experienced 
                  auditors combines deep industry knowledge with cutting-edge analytics.
                </p>
                <p>
                  We've built our reputation on integrity, transparency, and results. 
                  Every engagement is tailored to your specific business needs, ensuring 
                  maximum value and minimal disruption to your operations.
                </p>
                <p>
                  Our success-based model means we're invested in your success from day 
                  one. When you win, we win—it's that simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
