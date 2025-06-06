"use client";
import { useState, useEffect, useRef } from 'react';
import Wavify from 'react-wavify';
import { Howl } from 'howler';
import { PiSunDimThin } from "react-icons/pi";
import { AiFillMoon } from "react-icons/ai";
import { PiSpeakerNoneFill } from "react-icons/pi";
import { motion } from 'framer-motion';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay policy
  const soundRef = useRef<Howl | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Load Sniglet font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Sniglet&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Initialize sound
    soundRef.current = new Howl({
      src: ['/sounds/ambient.mp3'],
      loop: true,
      volume: 0.5,
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (soundRef.current && hasInteracted) {
      if (isMuted) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
    }
  }, [isMuted, hasInteracted]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMute = () => {
    setHasInteracted(true);
    setIsMuted((prev) => !prev);
  };

  return (
    <div
      className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      style={{ fontFamily: 'Sniglet, sans-serif' }}
    >
      {/* Controls in top left corner */}
      <div className="absolute top-4 left-4 z-20 flex space-x-2">
        <button
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-300 transform hover:scale-110 ${
            isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
          }`}
        >
          {isDarkMode ? <AiFillMoon size={20} /> : <PiSunDimThin size={20} />}
        </button>

        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
          className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-300 transform hover:scale-110 ${
            isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
          }`}
        >
          <PiSpeakerNoneFill size={20} className={isMuted ? "opacity-40" : "opacity-100"} />
        </button>
      </div>

      {/* Main centered content container */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-lg shadow-lg p-4 z-10 flex flex-col transition-colors duration-500 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
      >
        {/* Header */}
        <h1 className="text-xl font-bold">home</h1>

        {/* Main content */}
        <div className="flex-grow flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-gray-800 dark:text-gray-700">hi! </span>
            <span className="text-orange-400">i'm jaanvi.</span>
          </h2>
          <p className="text-xl">illustrator, animator, and developer</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-6 text-lg mb-4">
          <a href="#" className="hover:underline">about</a>
          <a href="#" className="hover:underline">links</a>
          <a href="#" className="hover:underline">work</a>
          <a href="#" className="hover:underline">faq</a>
          <a href="#" className="hover:underline">contact</a>
        </div>
      </div>

      {/* Gradient Wavify Background with animated movement */}
<motion.div 
  className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden"
  style={{
    background: isDarkMode
      ? 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)'
      : '#93c5fd' // blue-300
  }}
  animate={{
    y: [0, -5, 0], // Moves up 5px and back down
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Wavify
    fill={isDarkMode ? '#818cf8' : '#60a5fa'}
    paused={false}
    options={{
      height: 5,
      amplitude: 20,
      speed: 0.15,
      points: 2,
    }}
  />
</motion.div>
    </div>
  );
}
