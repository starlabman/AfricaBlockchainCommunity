import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { Users, Handshake, Calendar } from "lucide-react";

export const StatisticsSection = (): JSX.Element => {
  const statisticsData = [
    {
      number: "1000",
      title: "Community members",
      description:
        "More than 1,000 blockchain enthusiasts and experts gathered to transform the digital ecosystem in Africa.",
      hasAvatars: true,
      icon: <Users className="w-10 h-10 text-[#2d6ef7]" />,
    },
    {
      number: "20",
      title: "Strategic Partnerships and Collaborations",
      description:
        "Collaborations with leading companies, academic institutions, blockchain startups, and government organizations. These partnerships strengthen our network, allowing us to offer exceptional resources and opportunities to our members.",
      icon: <Handshake className="w-10 h-10 text-[#2d6ef7]" />,
    },
    {
      number: "30",
      title: "Organized Programs and Events",
      description:
        "Including conferences, hackathons and trainings, bringing together leaders, innovators and enthusiasts to discuss the latest advancements in the blockchain universe.",
      icon: <Calendar className="w-10 h-10 text-[#2d6ef7]" />,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-16 w-full bg-white">
      <h2 className="text-5xl text-center tracking-[-0.72px] leading-[52.8px] text-[#060606] font-normal [font-family:'Product_Sans-Regular',Helvetica]">
        Our Impact in Figures
      </h2>

      <div className="flex flex-wrap justify-center items-stretch gap-10 w-full px-4">
        {statisticsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 16px rgba(45, 110, 247, 0.15)",
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out max-w-sm flex-1 h-full"
          >
            <Card className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-[#f9f9ff] h-full flex flex-col justify-between min-h-[420px]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-5">
                  {/* Icon centered */}
                  <div className="flex justify-center">{stat.icon}</div>

                  {/* Stat number */}
                  <div className="flex justify-center items-baseline space-x-1 text-[#2d6ef7]">
                    <span className="text-4xl font-bold">+</span>
                    <span className="text-5xl font-bold">{stat.number}</span>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-lg font-semibold text-[#060606] text-center">
                    {stat.title}
                  </h3>
                  <p className="text-[#6d6d88] text-base leading-relaxed text-center">
                    {stat.description}
                  </p>
                </div>

                {/* Optional avatars */}
                {stat.hasAvatars && (
                  <div className="flex justify-center items-center mt-6">
                    <div className="w-6 h-6 bg-[#132ad2] rounded-full z-30" />
                    <div className="w-6 h-6 bg-[#3c52f4] rounded-full -ml-2 z-20" />
                    <div className="w-6 h-6 bg-[#95a4ff] rounded-full -ml-2 z-10" />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
