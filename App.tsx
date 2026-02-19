import React from 'react';
import { examples } from './data';
import BriefCard from './components/BriefCard';
import RewardsSection from './components/RewardsSection';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] antialiased text-[#F5F5F5] selection:bg-rose-900/30">
      <main className="max-w-[720px] mx-auto px-6 pt-16 pb-32">
        
        {/* Navigation / Header Bar */}
        <header className="mb-20">
          <div className="space-y-2 mb-8 text-center md:text-left">
            <h1 className="text-[28px] md:text-[32px] tracking-[0.05em] text-white leading-tight font-bold">
              Swanne Viral Brief
            </h1>
            <p className="text-[#C58E7E] text-[11px] uppercase tracking-[0.2em] font-semibold">
              Designed for creators scaling into serious income.
            </p>
          </div>
          
          <div className="max-w-lg space-y-8 text-center md:text-left mx-auto md:mx-0">
            <p className="text-stone-400 text-[16px] leading-relaxed font-light">
              Shaving content has consistently been one of the biggest money-makers on TikTok. You don’t need a high-production setup — you just need the right hooks. Follow the examples below and the sales are almost guaranteed.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('brief-section')}
                className="inline-block px-6 py-2.5 border border-stone-800 text-stone-400 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-600 transition-all active:scale-95"
              >
                Viral Brief
              </button>
              <button 
                onClick={() => scrollToSection('rewards-section')}
                className="inline-block px-6 py-2.5 border border-stone-800 text-stone-400 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-600 transition-all active:scale-95"
              >
                Rewards
              </button>
            </div>
          </div>
        </header>

        {/* Section 1: Viral Brief */}
        <section id="brief-section" className="mb-24">
          <h2 className="text-[#C58E7E] text-[12px] uppercase tracking-[0.5em] font-bold mb-12 text-center opacity-80">
            VIRAL BRIEF
          </h2>
          <div className="space-y-12 md:space-y-16">
            {examples.map((item, index) => (
              <BriefCard key={index} example={item} />
            ))}
          </div>
        </section>

        {/* Section 2: Rewards */}
        <div id="rewards-section">
          <RewardsSection />
        </div>

      </main>
    </div>
  );
};

export default App;