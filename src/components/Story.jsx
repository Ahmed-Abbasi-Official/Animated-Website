import gsap from "gsap";
import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="dua" className="min-h-dvh w-screen bg-eid-cream text-eid-green">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px] text-eid-gold">
          🤲 Dua & Blessings
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="May All<b>a</b>h <br /> Bless Y<b>o</b>u"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container" style={{ filter: 'none' }}>
            <div className="story-img-mask">
              <div 
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                className="story-img-content flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1B4332 0%, #0D2818 50%, #1B4332 100%)',
                  borderRadius: '20px'
                }}
              >
                <div className="text-center p-8 md:p-12">
                  {/* Arabic Dua */}
                  <p className="text-2xl md:text-4xl text-yellow-300 mb-6 leading-relaxed" style={{ fontFamily: 'serif' }}>
                    رَبَّنَا تَقَبَّلْ مِنَّا
                    <br />
                    إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ
                  </p>
                  
                  {/* Translation */}
                  <p className="text-blue-50 text-sm md:text-lg italic mb-4">
                    "Our Lord, accept from us. Indeed You are 
                    <br className="hidden md:block" />
                    the All-Hearing, the All-Knowing."
                  </p>
                  
                  <p className="text-yellow-300/70 text-xs md:text-sm">
                    — Surah Al-Baqarah (2:127)
                  </p>
                </div>
              </div>
            </div>

            {/* SVG filter removed - not needed for this design */}
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-eid-green md:text-start">
              May this blessed occasion of Eid bring you closer to Allah, 
              fill your heart with gratitude, and your life with countless blessings.
            </p>

            <div className="mt-5 px-6 py-3 bg-eid-green text-yellow-300 rounded-full">
              <p className="font-general text-sm uppercase">
                تقبل الله منا ومنكم
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;