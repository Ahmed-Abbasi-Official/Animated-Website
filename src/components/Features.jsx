import { useState, useRef } from "react";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const MessageCard = ({ title, message, icon, className = "" }) => (
  <div className={`relative size-full p-6 md:p-8 flex flex-col justify-between ${className}`}>
    <div>
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-3">{title}</h3>
      <p className="text-blue-50 text-sm md:text-base leading-relaxed">{message}</p>
    </div>
  </div>
);

const Features = () => (
  <section id="message" className="bg-eid-green pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32 text-center">
        <p className="font-circular-web text-2xl md:text-3xl text-yellow-300 mb-4" style={{ fontFamily: 'serif' }}>
          میرے پیارے ساتھیوں
        </p>
        <p className="max-w-2xl mx-auto font-circular-web text-lg text-blue-50 opacity-80">
          To all my dear classmates at UBIT KU - May this Eid bring 
          endless happiness, success in exams, and beautiful memories 
          with your loved ones!
        </p>
      </div>

      {/* Main Message Card */}
      <BentoTilt className="border border-yellow-300/30 relative mb-7 h-auto md:h-[50vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-eid-darkGreen to-eid-green">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-6" style={{ fontFamily: 'serif' }}>
              عید مبارک ہو!
            </h2>
            <p className="text-blue-50 text-lg md:text-xl leading-relaxed mb-4">
              اللہ تعالیٰ آپ کی زندگی میں خوشیاں، کامیابی اور برکتیں نازل فرمائے۔
            </p>
            <p className="text-blue-50/80 text-base">
              May Allah shower His blessings upon you and your family. 
              Wishing you a joyous celebration filled with love, laughter, and delicious food!
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <svg className="w-40 h-40 md:w-56 md:h-56" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="bigMoonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>
              <path
                d="M50 5 A45 45 0 1 1 50 95 A35 35 0 1 0 50 5"
                fill="url(#bigMoonGradient)"
              />
              <circle cx="78" cy="22" r="4" fill="#FFD700" />
              <circle cx="85" cy="35" r="2" fill="#FFD700" />
            </svg>
          </div>
        </div>
      </BentoTilt>

      {/* Message Grid */}
      <div className="grid h-auto md:h-[80vh] w-full grid-cols-1 md:grid-cols-2 gap-7">
        <BentoTilt className="border border-yellow-300/30 overflow-hidden rounded-2xl bg-gradient-to-br from-eid-darkGreen/80 to-eid-green/80 min-h-[200px]">
          <MessageCard
            icon="🤲"
            title="Dua for You"
            message="May Allah accept your good deeds, forgive your sins, and grant you success in this world and the Hereafter. آمین"
          />
        </BentoTilt>

        <BentoTilt className="border border-yellow-300/30 overflow-hidden rounded-2xl bg-gradient-to-br from-eid-darkGreen/80 to-eid-green/80 min-h-[200px]">
          <MessageCard
            icon="📚"
            title="For Our Batch"
            message="To all BSCS students - may we succeed in our exams, graduate with flying colors, and achieve all our dreams! Class of 2027! 🎓"
          />
        </BentoTilt>

        <BentoTilt className="border border-yellow-300/30 overflow-hidden rounded-2xl bg-gradient-to-br from-eid-darkGreen/80 to-eid-green/80 min-h-[200px]">
          <MessageCard
            icon="👨‍👩‍👧‍👦"
            title="Family Wishes"
            message="May this Eid strengthen your bonds with family. Enjoy the biryani, sewiyan, and quality time with your loved ones! 🍽️"
          />
        </BentoTilt>

        <BentoTilt className="border border-yellow-300/30 overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-300/20 to-yellow-300/10 min-h-[200px]">
          <div className="p-6 md:p-8 h-full flex flex-col justify-center items-center text-center">
            <span className="text-5xl mb-4">🌙</span>
            <h3 className="bento-title special-font text-yellow-300 text-2xl md:text-4xl">
              Eid <b>2</b>0<b>2</b>6
            </h3>
            <p className="text-blue-50 mt-3 text-sm">
              From your classmate with love ❤️
            </p>
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;