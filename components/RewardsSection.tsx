import React from 'react';

const RewardsSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="mt-16">
      <h2 className="text-[#C58E7E] text-[12px] uppercase tracking-[0.5em] font-bold mb-12 text-center">
        REWARDS
      </h2>
      
      <div className="space-y-6 md:space-y-8">
        {/* Card 1 */}
        <div className="bg-[#111111] border border-[#C58E7E]/35 rounded-[20px] p-8 md:p-10 text-center shadow-2xl">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold tracking-tight uppercase">
              FREE SWANNE RAZOR
            </h3>
            <p className="text-stone-400 text-[15px] font-medium leading-relaxed">
              Make 1 sale with our Swanne razor tagged and your razor is fully refunded.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111111] border border-[#C58E7E]/35 rounded-[20px] p-8 md:p-10 text-center shadow-2xl">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold tracking-tight uppercase">
              A YEAR OF SHAVING — ON US
            </h3>
            <p className="text-stone-400 text-[15px] font-medium leading-relaxed">
              Any tagged video that reaches 10K+ views with our Swanne razor tagged earns you a full year of blades.
            </p>
          </div>
        </div>

        {/* Elite Card: PRIVATE SWANNE CREATOR CIRCLE */}
        <div className="bg-[#050505] border-[1.5px] border-[#C58E7E] rounded-[24px] p-10 md:p-14 text-center shadow-[0_0_60px_rgba(197,142,126,0.1)] mt-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-[#C58E7E] text-[12px] uppercase tracking-[0.3em] font-bold mb-8">
              PRIVATE SWANNE CREATOR CIRCLE
            </h2>
            
            <p className="text-white text-[18px] md:text-[20px] font-medium leading-relaxed mb-10">
              Each month, our <span className="text-[#C58E7E]">Top 10</span> Creators are invited into the Private Swanne Creator Circle.
            </p>

            <p className="text-stone-500 text-[13px] uppercase tracking-widest font-semibold mb-8">
              TOP PERFORMERS CAN EARN:
            </p>

            <div className="flex justify-center mb-12">
              <ul className="inline-flex flex-col text-left space-y-4 text-white text-[16px] font-medium">
                <li className="flex items-center gap-3">
                  <span className="text-[#C58E7E]">•</span>
                  iPhone 17 Pro
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#C58E7E]">•</span>
                  MacBook Pro
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#C58E7E]">•</span>
                  Luxury travel experiences
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#C58E7E]">•</span>
                  Designer bags & clothing
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#C58E7E]">•</span>
                  Cash bonuses
                </li>
              </ul>
            </div>

            <p className="text-white/90 text-[14px] leading-relaxed border-t border-stone-900 pt-8">
              Inside this circle, creators are replacing their 9–5s with full-time content careers at Swanne.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-24 flex flex-col items-center space-y-12">
        <button 
          onClick={scrollToTop}
          className="px-8 py-3 bg-stone-900 text-stone-400 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-stone-800 hover:text-white transition-all active:scale-95"
        >
          Back to top
        </button>

        <a 
          href="https://calendly.com/creators-swanne/new-meeting" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-4 bg-[#F5F5F5] text-black text-[12px] font-bold uppercase tracking-[0.15em] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:bg-white transition-all active:scale-95 text-center border border-[#C58E7E]/20"
        >
          BOOK MY 5-MIN STRATEGY CALL
        </a>

        <div className="text-center space-y-2 pb-12">
          <p className="text-stone-600 text-[12px] font-normal">
            Have a question?
          </p>
          <p className="text-stone-600 text-[12px] font-normal">
            Email us at <a href="mailto:creators@swanne.co.uk" className="text-stone-400 hover:text-[#C58E7E] transition-colors border-b border-stone-800">creators@swanne.co.uk</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;