import { Navigation } from './components/Navigation.jsx';
import { Hero } from './components/Hero.jsx';
import { ValueProposition } from './components/ValueProposition.jsx';
import { Founder } from './components/Founder.jsx';
import { Differentiators } from './components/Differentiators.jsx';
import { Mission } from './components/Mission.jsx';
import { Results } from './components/Results.jsx';
import { CTA } from './components/CTA.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <Founder />
        <Differentiators />
        <Mission />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
