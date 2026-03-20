import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadVideos, setLoadVideos] = useState(0);
  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadVideos]);

  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#next-video', { visibility: 'visible' })
      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        ease: 'power1.inOut',
        duration: 1,
        width: '100%',
        height: '100%',
        onStart: () => nextVideoRef.current.play(),
      })

      gsap.from('#current-video', {
        transform: 'center center',
        scale: 0,
        ease: 'power1.inOut',
        duration: 1.5,
        width: '100%',
        height: '100%',
      })
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true });

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 14% 10%'
    })
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true
      }
    })
  })

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-eid-cream">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-eid-green"
      >
        {/* Video Background */}
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />
          <video
            src={getVideoSrc(currentIndex === 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 size-full object-cover"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-30"></div>

        {/* Eid Content Overlay */}
        <div className="absolute top-0 left-0 z-40 size-full flex flex-col justify-center items-center text-center px-5">
          {/* Crescent Moon */}
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20">
            <svg width="80" height="80" viewBox="0 0 100 100" className="sm:w-32 sm:h-32 opacity-90">
              <defs>
                <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>
              <path
                d="M50 5 A45 45 0 1 1 50 95 A35 35 0 1 0 50 5"
                fill="url(#moonGradient)"
              />
            </svg>
          </div>

          <div className="mb-8">
            {/* Arabic Eid Mubarak */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-yellow-300 mb-4 drop-shadow-lg" style={{ fontFamily: 'serif' }}>
              عید مبارک
            </h1>
            {/* English */}
            <h2 className="special-font hero-heading text-blue-50 drop-shadow-lg">
              E<b>i</b>d Mub<b>a</b>rak
            </h2>
          </div>

          <p className="max-w-xl font-robert-regular text-blue-50 text-lg sm:text-xl opacity-90 mb-6 drop-shadow-md">
            میرے تمام ساتھیوں کو عید مبارک!
            <br />
            <span className="text-yellow-300">Wishing you joy, peace & blessings</span>
          </p>

          <div className="mt-4 px-6 py-3 bg-yellow-300/30 backdrop-blur-sm rounded-full border border-yellow-300/50">
            <p className="text-yellow-300 font-general text-sm uppercase tracking-wider drop-shadow-sm">
              From Ahmed Abbasi | UBIT KU
            </p>
          </div>

          {/* Click hint */}
          <p className="absolute bottom-32 text-blue-50/60 text-xs sm:text-sm">
            👆 Click the center to change video
          </p>
        </div>

        {/* Bottom Year */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-50/30">
          20<b>2</b>6
        </h1>
      </div>

      {/* Background text */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-eid-green/30">
        E<b>i</b>d
      </h1>
    </div>
  );
};

export default Hero;
