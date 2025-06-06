"use client";
import { useState, useEffect, useRef } from 'react';
import Wavify from 'react-wavify';
import { Howl } from 'howler';
import { PiSunDimThin } from "react-icons/pi";
import { AiFillMoon } from "react-icons/ai";
import { PiSpeakerNoneFill } from "react-icons/pi";
import { motion } from 'framer-motion';
import { FaUser, FaLink, FaBriefcase, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

// Navigation links and their icons/sounds
const linkData = [
  {
    label: "about",
    icon: (isDarkMode: boolean) => (
      <FaUser
        size={22}
        style={{
          stroke: isDarkMode ? "#eee" : "#222",
          strokeWidth: 5,
          fill: isDarkMode ? "none" : "white",
        }}
      />
    ),
    sound: "/sounds/about.mp3",
    href: "#",
  },
  {
    label: "links",
    icon: (isDarkMode: boolean) => (
      <FaLink
        size={22}
        style={{
          stroke: isDarkMode ? "#eee" : "#222",
          strokeWidth: 5,
          fill: isDarkMode ? "none" : "white",
        }}
      />
    ),
    sound: "/sounds/links.mp3",
    href: "#",
  },
  {
    label: "work",
    icon: (isDarkMode: boolean) => (
      <FaBriefcase
        size={22}
        style={{
          stroke: isDarkMode ? "#eee" : "#222",
          strokeWidth: 5,
          fill: isDarkMode ? "none" : "white",
        }}
      />
    ),
    sound: "/sounds/work.mp3",
    href: "#",
  },
  {
    label: "faq",
    icon: (isDarkMode: boolean) => (
      <FaQuestionCircle
        size={22}
        style={{
          stroke: isDarkMode ? "#eee" : "#222",
          strokeWidth: 5,
          fill: isDarkMode ? "none" : "white",
        }}
      />
    ),
    sound: "/sounds/faq.mp3",
    href: "#",
  },
  {
    label: "contact",
    icon: (isDarkMode: boolean) => (
      <FaEnvelope
        size={22}
        style={{
          stroke: isDarkMode ? "#eee" : "#222",
          strokeWidth: 5,
          fill: isDarkMode ? "none" : "white",
        }}
      />
    ),
    sound: "/sounds/contact.mp3",
    href: "#",
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Sound refs for each link
  const soundRefs = useRef<{ [key: string]: Howl | null }>({});
  // Theme toggle sounds
  const dayThemeRef = useRef<Howl | null>(null);
  const nightThemeRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Load Sniglet font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Sniglet&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load sounds for links
    linkData.forEach(link => {
      soundRefs.current[link.label] = new Howl({
        src: [link.sound],
        volume: 0.7,
      });
    });

    // Load theme toggle sounds
    dayThemeRef.current = new Howl({
      src: ['/sounds/daytheme.mp3'],
      volume: 0.7,
    });
    nightThemeRef.current = new Howl({
      src: ['/sounds/nighttheme.mp3'],
      volume: 0.7,
    });

    return () => {
      Object.values(soundRefs.current).forEach(sound => sound && sound.unload());
      if (dayThemeRef.current) dayThemeRef.current.unload();
      if (nightThemeRef.current) nightThemeRef.current.unload();
      document.head.removeChild(link);
    };
  }, []);

  // Theme toggle handler with sound
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      if (!isMuted) {
        if (nextMode && nightThemeRef.current) {
          nightThemeRef.current.play();
        } else if (!nextMode && dayThemeRef.current) {
          dayThemeRef.current.play();
        }
      }
      return nextMode;
    });
  };

  // Mute toggle
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Play sound for link click
  const handleLinkClick = (label: string) => {
    if (!isMuted && soundRefs.current[label]) {
      soundRefs.current[label]!.play();
    }
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
          aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-300 transform hover:scale-110 ${
            isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
          }`}
        >
          <PiSpeakerNoneFill size={20} className={isMuted ? "opacity-40" : "opacity-100"} />
        </button>
      </div>

      {/* Main centered content container */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-2xl shadow-2xl p-8 z-10 flex flex-col transition-colors duration-500 ${
          isDarkMode
            ? 'bg-gray-800 text-white'
            : 'bg-[#FFF8E7] text-black'
        }`}
      >
        {/* Header */}
        <h1 className="text-2xl font-extrabold mb-2">home</h1>

        {/* Main content */}
        <div className="flex-grow flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-gray-800 dark:text-gray-700">hi! </span>
            <span className="text-orange-400">i'm jaanvi.</span>
          </h2>
          <p className="text-2xl">illustrator, animator, and developer</p>
        </div>

        {/* Navigation with cartoon outline icons */}
        <div className="flex justify-center space-x-10 text-xl mb-6">
          {linkData.map(link => (
            <div key={link.label} className="flex flex-col items-center">
              {link.icon(isDarkMode)}
              <a
                href={link.href}
                className="hover:underline mt-1"
                onClick={e => {
                  e.preventDefault();
                  handleLinkClick(link.label);
                }}
                style={{ fontSize: "1.15rem" }}
              >
                {link.label}
              </a>
            </div>
          ))}
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