import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Conferences and Panels",
    text: "Meetings with Web3 experts and leaders to explore trends and opportunities.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
  },
  {
    title: "Workshops and Bootcamps",
    text: "Hands-on training sessions to empower the next generation of Web3 builders.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
  },
  {
    title: "University Tours",
    text: "Inspiring students through campus events and blockchain discussions.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
  },
  {
    title: "Hackathons",
    text: "Collaborative events to build innovative solutions using blockchain.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
  },
  {
    title: "Webinars",
    text: "Every Saturday at 7PM, join our live webinars to learn from top minds in Web3.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
    webinarContents: [
      {
        badge: "📅 Every Saturday – 7PM",
        host: "👤 Hosted by Kodjo Labore",
        text: "Learn the fundamentals of Blockchain every weekend.",
        ctaText: "Join the Webinar",
        ctaLink: "https://example.com/webinar"
      },
      {
        badge: "🎤 Live AMA",
        host: "🎯 With guest experts",
        text: "Get your questions answered live.",
        ctaText: "Join the AMA",
        ctaLink: "https://example.com/ama"
      }
    ]
  },

  {
    title: "Web3 Builders Talks",
    text: "Bi-weekly on Tuesdays, get technical insights directly from builders shaping the Web3 future.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
  },
];

export const PartnershipsSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const slide = slides[currentIndex];

  return (
    <section className="w-full max-w-[1134px] mx-auto my-8 relative">
      <Card className="w-full h-[469px] rounded-2xl overflow-hidden bg-black">
        <CardContent className="p-0 h-full relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </AnimatePresence>

          <div className="flex items-center gap-5 absolute top-[33px] left-1/2 -translate-x-1/2 z-10">
            {slides.map((_, index) => (
              <div
                key={index}
                className="relative w-[88px] h-[5px] bg-white/60 rounded"
              >
                {index === currentIndex && (
                  <motion.div
                    layoutId="progress-bar"
                    className="absolute top-0 left-0 h-[5px] bg-white rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Contenu animé (texte, badges, boutons, etc.) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute flex gap-4 bottom-[80px] left-10 right-10 z-10"
            >
              {/* Bloc principal */}
              <div className="w-1/2 bg-black/70 p-6 rounded-2xl shadow-lg backdrop-blur-sm group">
                <h2 className="whitespace-nowrap font-normal text-white text-[34px] tracking-[-0.72px] leading-normal mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {slide.title}
                </h2>
                <p className="font-normal text-white text-lg tracking-[-0.72px] leading-normal">
                  {slide.text}
                </p>
              </div>

              {/* Blocs secondaires si disponibles */}
              {slide.title === "Webinars" && slide.webinarContents && (
                <div className="w-1/2 flex flex-col gap-4">
                  {slide.webinarContents.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-lg text-white p-5 rounded-xl shadow-md"
                    >
                      {item.badge && (
                        <div className="bg-white text-black text-xs px-3 py-1 rounded-full mb-2 inline-block">
                          {item.badge}
                        </div>
                      )}
                      <p className="text-xl font-semibold mb-1">{item.title}</p>
                      <p className="text-sm mb-2">{item.text}</p>
                      {item.host && <p className="text-xs italic mb-1">{item.host}</p>}
                      {item.ctaText && item.ctaLink && (
                        <a
                          href={item.ctaLink}
                          className="inline-block text-yellow-400 underline text-sm"
                        >
                          {item.ctaText}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>



          <div className="absolute bottom-[30px] right-10 flex gap-4 z-10">
            <button
              onClick={goToPrev}
              className="bg-white hover:bg-gray-200 p-2 rounded-full shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="bg-white hover:bg-gray-200 p-2 rounded-full shadow"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};