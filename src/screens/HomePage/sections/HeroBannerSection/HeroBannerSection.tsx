import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const HeroBannerSection = (): JSX.Element => {
  const [showDonateDialog, setShowDonateDialog] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
      },
    }),
  };

  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:h-[707px] bg-[#060606]">
      <div className="relative h-full bg-[url(/44420740-9067415-1-1.png)] bg-cover bg-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />

        {/* Content container */}
        <div className="relative flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-[803px] gap-4 md:gap-5 text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight md:leading-[88px] tracking-[-0.58px] font-normal [font-family:'Product_Sans-Regular',Helvetica] flex flex-wrap justify-center gap-x-2">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white whitespace-nowrap"
              >
                Let&apos;s build
              </motion.span>
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white whitespace-nowrap"
              >
                the future of
              </motion.span>
              <motion.span
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-[#2d6ef7] whitespace-nowrap"
              >
                Blockchain
              </motion.span>
              <motion.span
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white whitespace-nowrap"
              >
                in Africa
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-[600px] text-base md:text-lg text-[#989898] tracking-[-0.72px] [font-family:'Product_Sans_Light-Regular',Helvetica] px-4 md:px-8"
            >
              Join the community shaping the future of blockchain in Africa.
              Connect, collaborate, and innovate with Web3 enthusiasts, experts,
              and entrepreneurs to build a vibrant and inclusive technology
              ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4 justify-center mt-6 md:mt-8"
            >
              <a 
                href="https://bento.me/africablockchaincommunity" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="px-8 md:px-10 py-2.5 bg-[#2d6ef7] rounded-[200px] text-sm shadow-[0px_0px_50px_#1e5effd4] [font-family:'Product_Sans-Regular',Helvetica] hover:bg-[#2d6ef7]/90 transition-colors">
                  Join us
                </Button>
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="px-8 md:px-10 py-2.5 bg-[#f72d2d] rounded-[200px] text-sm shadow-[0px_0px_50px_#ff1e1ed4] [font-family:'Product_Sans-Regular',Helvetica] hover:bg-[#f72d2d]/90 transition-colors">
                    Donate
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white text-black">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">Support Our Mission</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h3 className="font-semibold mb-2">Mobile Money</h3>
                      <p className="text-sm">+123 456 7890</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h3 className="font-semibold mb-2">EVM Address</h3>
                      <p className="text-sm break-all">0x1234567890abcdef1234567890abcdef12345678</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h3 className="font-semibold mb-2">Solana Address</h3>
                      <p className="text-sm break-all">ABC123DEF456GHI789JKL0...</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <a 
                href="https://calendly.com/africablockchaincommunity/partnership"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="px-8 md:px-10 py-2.5 bg-transparent border-2 border-[#2d6ef7] text-[#2d6ef7] rounded-[200px] text-sm [font-family:'Product_Sans-Regular',Helvetica] hover:bg-[#2d6ef7] hover:text-white transition-colors">
                  Partnership
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};