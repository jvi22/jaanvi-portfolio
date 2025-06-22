"use client";
import AboutPage from "./components/AboutPage";
import LinksPage from "./components/LinksPage";
import WorkPage from "./components/WorkPage";
import ContactPage from "./components/ContactPage";
import * as React from "react";
import { Howl } from 'howler';
import ThemeHeading from "./components/ThemeHeading";

import { useState, useEffect, useRef } from "react";
import Wavify from "react-wavify";

import { PiSunDimThin } from "react-icons/pi";
import { AiFillMoon } from "react-icons/ai";
import { PiSpeakerNoneFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { FaUser, FaLink, FaBriefcase, FaQuestionCircle, FaEnvelope } from "react-icons/fa";


// Navigation links and their icons/sounds, with improved initial positions
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
    initial: { x: -400, y: -100 },
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
    initial: { x: -300, y: -100 },
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
    initial: { x: -200, y: -100 },
  },
  {
    label: "resume",
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
    sound: "/sounds/resume.mp3",
    // Direct link to resume.pdf in public/documents/
    href: "/documents/jaanvi_resume.pdf",
    initial: { x: 0, y: -100 },
    isExternal: true,
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
    initial: { x: -100, y: -100 },
  },
];

// Map label to page component (as a function that takes isDarkMode)
const pageComponents: { [key: string]: (isDarkMode: boolean) => React.JSX.Element } = {
  about: (isDarkMode: boolean) => <AboutPage isDarkMode={isDarkMode} />,
  links: () => <LinksPage />,
  work: (isDarkMode: boolean) => <WorkPage isDarkMode={isDarkMode} />,
  contact: () => <ContactPage />,
};

// Utility for generating unique IDs
function uuid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Draggable container component
function DraggableContainer({
  id,
  label,
  isDarkMode,
  onClose,
  children,
  initial,
  zIndex,
  setZIndexTop,
  closeSound,
}: {
  id: string;
  label: string;
  isDarkMode: boolean;
  onClose: (id: string) => void;
  children: React.ReactNode;
  initial: { x: number; y: number };
  zIndex: number;
  setZIndexTop: (id: string) => void;
  closeSound: () => void;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={nodeRef}
      drag
      dragMomentum={false}
      dragElastic={0.18}
      initial={initial}
      style={{
        zIndex,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        cursor: "grab",
        minWidth: 320,
        minHeight: 320,
        overflow: "hidden"
      }}
      className={`
        w-[520px] h-[400px] max-w-[98vw] max-h-[92vh] rounded-3xl shadow-2xl p-6 flex flex-col
        transition-colors duration-500
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-[#FFF8E7] text-black"}
        border-2 border-black/10
      `}
      onPointerDown={() => setZIndexTop(id)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold capitalize">{label}</span>
        <button
          onClick={() => {
            closeSound();
            onClose(id);
          }}
          aria-label="Close"
          className="text-xl font-bold bg-transparent rounded-full px-2 py-0.5 shadow-none transition"
          style={{
            lineHeight: 1,
            color: isDarkMode ? "#fff" : "#18181b", // White in night, dark gray in day
          }}
        >
          <span style={{ fontFamily: "monospace", fontWeight: "bold" }}>×</span>
        </button>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">{children}</div>
    </motion.div>
  );
}



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [openPages, setOpenPages] = useState<
    { id: string; label: string; initial: { x: number; y: number } }[]
  >([]);

  // For z-index stacking
  const [zOrder, setZOrder] = useState<string[]>([]);

  // Sound refs for each link
  const soundRefs = useRef<{ [key: string]: Howl | null }>({});
  // Theme toggle sounds
  const dayThemeRef = useRef<Howl | null>(null);
  const nightThemeRef = useRef<Howl | null>(null);
  // Close tab sound
  const closeTabRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Load Sniglet font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Sniglet&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load sounds for links
    linkData.forEach((link) => {
      soundRefs.current[link.label] = new Howl({
        src: [link.sound],
        volume: 0.7,
      });
    });

    // Load theme toggle sounds
    dayThemeRef.current = new Howl({
      src: ["/sounds/day-theme.mp3"],
      volume: 0.7,
    });
    nightThemeRef.current = new Howl({
      src: ["/sounds/night-theme.mp3"],
      volume: 0.7,
    });

    // Load close tab sound
    closeTabRef.current = new Howl({
      src: ["/sounds/close-tab.mp3"],
      volume: 0.3, // softer
    });

    return () => {
      const sounds = soundRefs.current;
      Object.values(sounds).forEach((sound) => sound && sound.unload());
      if (dayThemeRef.current) dayThemeRef.current.unload();
      if (nightThemeRef.current) nightThemeRef.current.unload();
      if (closeTabRef.current) closeTabRef.current.unload();
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

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

  // Open a draggable page (only if not already open)
  const handleLinkClick = (label: string) => {
    if (openPages.some((p) => p.label === label)) return;
    if (!isMuted && soundRefs.current[label]) {
      soundRefs.current[label]!.play();
    }
    const link = linkData.find((l) => l.label === label);
    const initial = link?.initial || { x: 0, y: 0 };
    const id = uuid();
    setOpenPages((pages) => [...pages, { id, label, initial }]);
    setZOrder((order) => [...order, id]);
  };

  // Close a draggable page
  const handleClosePage = (id: string) => {
    if (!isMuted && closeTabRef.current) {
      closeTabRef.current.play();
    }
    setOpenPages((pages) => pages.filter((p) => p.id !== id));
    setZOrder((order) => order.filter((zid) => zid !== id));
  };

  // Bring a container to the top
  const setZIndexTop = (id: string) => {
    setZOrder((order) => [...order.filter((zid) => zid !== id), id]);
  };

  // Cartoon outline style for top-left icons
  const iconOutlineStyle = (isDarkMode: boolean) => ({
    stroke: isDarkMode ? "#eee" : "#222",
    strokeWidth: 4.5,
    fill: isDarkMode ? "none" : "none",
    filter: "drop-shadow(0 1px 0 #222)",
    background: "none",
    borderRadius: "0%",
    boxSizing: "content-box" as React.CSSProperties["boxSizing"],
    padding: 0,
    margin: 0,
    display: "block",
  });

  // For icon hover animation state
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      style={{ fontFamily: "Sniglet, sans-serif" }}
    >
      {/* Controls in top left corner */}
      <div className="absolute top-4 left-4 z-20 flex space-x-2">
        <button
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="focus:outline-none transition-colors duration-300 transform hover:scale-110 bg-transparent p-0"
          style={{ border: "none", background: "none" }}
        >
          {isDarkMode ? (
            <AiFillMoon size={28} style={iconOutlineStyle(isDarkMode)} />
          ) : (
            <PiSunDimThin size={28} style={iconOutlineStyle(isDarkMode)} />
          )}
        </button>

        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          className="focus:outline-none transition-colors duration-300 transform hover:scale-110 bg-transparent p-0"
          style={{ border: "none", background: "none" }}
        >
          <PiSpeakerNoneFill
            size={28}
            style={iconOutlineStyle(isDarkMode)}
            className={isMuted ? "opacity-40" : "opacity-100"}
          />
        </button>
      </div>

      {/* Main centered content container */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-2xl shadow-2xl p-8 z-10 flex flex-col transition-colors duration-500 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-[#FFF8E7] text-black"
        }`}
      >
        {/* Header */}
        <h1 className="text-2xl font-extrabold mb-2">home</h1>
        {/* Main content */}
        <div className="flex-grow flex flex-col justify-center">
          <ThemeHeading isDarkMode={isDarkMode} />
          <p className="text-2xl">backend & web developer</p>
        </div>
        {/* Navigation with cartoon outline icons */}
        <div className="flex justify-center space-x-10 text-xl mb-6">
          {linkData.map((link) => (
            <div
              key={link.label}
              className="flex flex-col items-center group"
              onMouseEnter={() => setHoveredNav(link.label)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredNav === link.label ? 1.25 : 1,
                  boxShadow:
                    hoveredNav === link.label
                      ? "0 4px 16px 0 rgba(0,0,0,0.18)"
                      : "none",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-full"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 2,
                  background: "none",
                  outline: "none",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                {link.icon(isDarkMode)}
              </motion.div>
              {link.isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline mt-1"
                  style={{ fontSize: "1.15rem" }}
                  onClick={() => {
                    if (!isMuted && soundRefs.current[link.label]) {
                      soundRefs.current[link.label]!.play();
                    }
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="hover:underline mt-1"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.label);
                  }}
                  style={{ fontSize: "1.15rem" }}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Draggable containers for open pages */}
      {openPages.map((page) => (
        <DraggableContainer
          key={page.id}
          id={page.id}
          label={page.label}
          isDarkMode={isDarkMode}
          onClose={handleClosePage}
          initial={page.initial}
          zIndex={100 + zOrder.indexOf(page.id)}
          setZIndexTop={setZIndexTop}
          closeSound={() => {
            if (!isMuted && closeTabRef.current) closeTabRef.current.play();
          }}
        >
          {pageComponents[page.label](isDarkMode)}
        </DraggableContainer>
      ))}

      {/* Gradient Wavify Background with animated movement */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden"
        style={{
          background: isDarkMode
            ? "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)"
            : "#93c5fd",
        }}
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Wavify
          fill={isDarkMode ? "#818cf8" : "#60a5fa"}
          paused={false}
          options={{
            height: 5,
            amplitude: 15,
            speed: 0.20,
            points: 3,
          }}
        />
      </motion.div>
    </div>
  );
}