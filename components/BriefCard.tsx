import React from 'react';
import { BriefExample } from '../types';

interface BriefCardProps {
  example: BriefExample;
}

const BriefCard: React.FC<BriefCardProps> = ({ example }) => {
  const videoId = example.videoUrl 
    ? example.videoUrl.replace(/\/$/, '').split('/').pop()?.split('?')[0] 
    : null;
    
  // Using player v1 for clean inline playback
  const embedUrl = videoId 
    ? `https://www.tiktok.com/player/v1/${videoId}?music_info=0&description=0&controls=1&autoplay=0` 
    : null;

  return (
    <div className="bg-white border border-[#C58E7E]/30 rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
      <div className="p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          
          {/* Steady Frame Section - Locked 9:16, strictly borderless */}
          <div className="space-y-6">
            <div className="relative w-full overflow-hidden bg-black rounded-2xl border-none outline-none shadow-none" style={{ paddingBottom: '177.77%' }}>
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="absolute top-0 left-0 w-full h-full border-none outline-none m-0 p-0 overflow-hidden"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="TikTok example"
                  // @ts-ignore
                  playsinline="true"
                  // @ts-ignore
                  webkit-playsinline="true"
                  style={{ border: '0', outline: 'none' }}
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-stone-700 text-[10px] uppercase tracking-widest font-medium">
                  Video Feed Locked
                </div>
              )}
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const el = document.getElementById(`content-${videoId}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="inline-block px-10 py-4 bg-white text-[#C58E7E] text-[10px] font-bold tracking-[0.2em] uppercase rounded-xl border border-[#C58E7E] hover:bg-[#C58E7E] hover:text-white transition-all duration-300 active:scale-95"
              >
                WATCH EXAMPLE
              </button>
            </div>
          </div>

          {/* Typography: Hook and Body labels must be identical size and weight */}
          <div className="space-y-12" id={`content-${videoId}`}>
            <div>
              <h3 className="text-[#C58E7E] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 opacity-90">Hook:</h3>
              <ul className="space-y-5">
                {example.hook.map((item, idx) => (
                  item && (
                    <li key={idx} className="text-[#1A1A1A] text-[16px] md:text-[17px] font-medium leading-relaxed flex items-start">
                      <span className="mr-3 text-[#C58E7E] mt-1.5">•</span>
                      {item}
                    </li>
                  )
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#C58E7E] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 opacity-90">Body:</h3>
              <ul className="space-y-5">
                {example.body.map((item, idx) => (
                  item && (
                    <li key={idx} className="text-[#1A1A1A] text-[16px] md:text-[17px] font-medium leading-relaxed flex items-start">
                      <span className="mr-3 text-[#C58E7E] mt-1.5">•</span>
                      {item}
                    </li>
                  )
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefCard;