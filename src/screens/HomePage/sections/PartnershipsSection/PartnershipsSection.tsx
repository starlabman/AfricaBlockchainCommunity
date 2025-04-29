import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Conferences & Panels",
    text: "Join industry-leading experts and thought leaders as we explore emerging trends and opportunities in the Web3 space.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
    date: "Monthly Events",
  },
  {
    title: "Workshops & Bootcamps",
    text: "Intensive hands-on training sessions designed to transform beginners into skilled Web3 developers and builders.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
    date: "Bi-weekly Sessions",
  },
  {
    title: "University Outreach",
    text: "Empowering the next generation through campus events, workshops, and engaging blockchain discussions.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
    date: "Ongoing Program",
  },
  {
    title: "Innovation Hackathons",
    text: "48-hour intensive building sessions where teams collaborate to create groundbreaking blockchain solutions.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
    date: "Quarterly Events",
  },
  {
    title: "Expert Webinars",
    text: "Weekly live sessions featuring industry experts sharing insights on blockchain technology and Web3 development.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
    date: "Every Saturday at 7PM",
    webinarContents: [
      {
        badge: "Next Session",
        host: "Kodjo Labore",
        role: "Lead Blockchain Developer",
        text: "Mastering Smart Contract Development: From Basics to Advanced Patterns",
        ctaText: "Reserve Your Spot",
        ctaLink: "https://example.com/webinar"
      },
      {
        badge: "Upcoming AMA",
        host: "Guest Expert Panel",
        role: "Industry Leaders",
        text: "Web3 Career Paths: Opportunities and Growth in Blockchain",
        ctaText: "Register Now",
        ctaLink: "https://example.com/ama"
      }
    ]
  },
  {
    title: "Builder Talks",
    text: "Technical deep-dives and case studies presented by active builders in the Web3 ecosystem.",
    image: "/corporate-businessman-giving-presentation-large-audience-1.png",
    date: "Bi-weekly Tuesdays",
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
  }, [currentIndex]);

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
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full h-[500px] sm:h-[550px] md:h-[600px] rounded-2xl overflow-hidden bg-black relative">
          <CardContent className="p-0 h-full">
            {/* Background Image avec overlay */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Progress Bars */}
            <div className="absolute top-6 sm:top-8 left-0 right-0 flex justify-center items-center gap-3 sm:gap-4 z-20 px-4">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className="relative h-1.5 w-12 sm:w-16 bg-white/20 rounded-full overflow-hidden"
                >
                  {index === currentIndex && (
                    <motion.div
                      layoutId="progress-bar"
                      className="absolute inset-0 bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Contenu principal */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-x-4 sm:inset-x-8 bottom-16 sm:bottom-20 z-20"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Bloc principal */}
                  <div className="w-full lg:w-1/2 bg-black/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
                    <div className="inline-block px-3 py-1 bg-[#2d6ef7] text-white text-xs sm:text-sm mb-4 rounded-full">
                      {slide.date}
                    </div>
                    <h2 className="font-medium text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {slide.text}
                    </p>
                  </div>

                  {/* Blocs secondaires pour les webinaires */}
                  {slide.title === "Expert Webinars" && slide.webinarContents && (
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                      {slide.webinarContents.map((item, index) => (
                        <div
                          key={index}
                          className="bg-black/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="bg-[#2d6ef7] text-white text-xs px-3 py-1 rounded-full mb-2 inline-block">
                                {item.badge}
                              </div>
                              <h3 className="text-white text-lg sm:text-xl font-medium mb-1">
                                {item.host}
                              </h3>
                              <p className="text-white/60 text-sm">{item.role}</p>
                            </div>
                          </div>
                          <p className="text-white/80 text-sm sm:text-base mb-4">
                            {item.text}
                          </p>
                          {item.ctaText && item.ctaLink && (
                            <a
                              href={item.ctaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#2d6ef7] hover:text-[#2d6ef7]/90 text-sm font-medium transition-colors"
                            >
                              {item.ctaText}
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 flex gap-2 z-20">
              <button
                onClick={goToPrev}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm border border-white/10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm border border-white/10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};