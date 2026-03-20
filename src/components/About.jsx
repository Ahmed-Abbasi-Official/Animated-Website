import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px] text-eid-green">
          🌙 About Me
        </p>
        <AnimatedTitle
          title="Ahm<b>e</b>d Abbasi <br /> B231100060<b>0</b>7"
          containerClass="mt-5 !text-eid-green text-center "
        />

        <div className="about-subtext !text-eid-green">
          <p className="text-xl font-semibold">Karachi University - UBIT</p>
          <p className="text-eid-gold mt-2">
            3rd Year | 5th Semester | Computer Science
          </p>
          <p className="mt-4 text-gray-600">
            Wishing all my classmates and teachers a blessed Eid!
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image" style={{
          background: 'linear-gradient(135deg, #1B4332 0%, #228B22 50%, #1B4332 100%)'
        }}>
          {/* Islamic Pattern Decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <svg className="w-32 h-32 mx-auto mb-4 text-yellow-300" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 5 A45 45 0 1 1 50 95 A35 35 0 1 0 50 5"
                  fill="url(#starGradient)"
                />
                <circle cx="75" cy="25" r="5" fill="#FFD700" />
              </svg>
              <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4" style={{ fontFamily: 'serif' }}>
                عید الفطر
              </h2>
              <p className="text-xl text-blue-50 opacity-90">
                May Allah accept our fasts and prayers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
