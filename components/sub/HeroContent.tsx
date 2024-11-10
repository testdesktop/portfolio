"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[7px] opacity-[0.9]"
        >
          <h1 className="text-white text-2xl">Python Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-bold text-white max-w--[600px] w-auto h-auto"
        >
          <span>
            Hello i'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Sakayat Kabir Rashu
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  max-w-[600px]"
        >
          I am a Python Developer specializing in building web applications with
          Django and Django REST Framework. I also work with front-end
          technologies like React.js and Next.js, as well as server-side
          rendering using Node.js.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-3 button-primary text-center text-black bg-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href="https://tinyurl.com/kz4mvte8">
            <span className="text-sm">Download Resume</span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
              }}
              className="absolute z-40"
            >
              <Image
                src="/profile.png"
                height={580}
                width={580}
                alt="profile"
                className="inset-0 z-40 object-contain xl:translate-y-[3px] grayscale"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
              }}
            >
              <motion.svg
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1, rotate: [120, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
                className="h-[300px] w-[300px] lg:h-[537px] lg:w-[537px]"
                viewBox="0 0 537 537"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M156.815 121.725C159.44 124.929 158.97 129.655 155.766 132.28C152.562 134.905 147.836 134.435 145.211 131.231C142.586 128.026 143.056 123.301 146.26 120.676C149.465 118.051 154.19 118.521 156.815 121.725Z"
                  fill="#274FB2"
                />
                <path
                  d="M389.242 407.037C391.866 410.241 391.397 414.967 388.193 417.591C384.988 420.216 380.263 419.747 377.638 416.542C375.013 413.338 375.483 408.613 378.687 405.988C381.891 403.363 386.617 403.833 389.242 407.037Z"
                  fill="#274FB2"
                />
                <circle
                  cx="267.683"
                  cy="268.113"
                  r="183"
                  transform="rotate(-39.3234 267.683 268.113)"
                  stroke="#274FB2"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                />
                <circle
                  cx="268"
                  cy="268"
                  r="254"
                  stroke="#274FB2"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                />
                <path
                  d="M520.634 279.082C514.761 277.528 511.26 271.507 512.815 265.634C514.369 259.761 520.39 256.26 526.263 257.815C532.136 259.369 535.637 265.39 534.082 271.263C532.528 277.136 526.507 280.637 520.634 279.082Z"
                  fill="#274FB2"
                />
                <path
                  d="M10.6338 279.082C4.76093 277.528 1.26011 271.507 2.81453 265.634C4.36895 259.761 10.39 256.26 16.2629 257.815C22.1358 259.369 25.6366 265.39 24.0822 271.263C22.5278 277.136 16.5067 280.637 10.6338 279.082Z"
                  fill="#274FB2"
                />
                <path
                  d="M279.082 16.2629C277.528 22.1358 271.507 25.6366 265.634 24.0822C259.761 22.5278 256.26 16.5067 257.815 10.6338C259.369 4.76093 265.39 1.26011 271.263 2.81453C277.136 4.36895 280.637 10.39 279.082 16.2629Z"
                  fill="#274FB2"
                />
                <path
                  d="M279.082 526.263C277.528 532.136 271.507 535.637 265.634 534.082C259.761 532.528 256.26 526.507 257.815 520.634C259.369 514.761 265.39 511.26 271.263 512.815C277.136 514.369 280.637 520.39 279.082 526.263Z"
                  fill="#274FB2"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
          {/* image shape */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
