"use client";
import * as React from "react";
import Image from 'next/image';
import { 
  FaTwitter,  
  FaInstagram, 
  FaLinkedin, 
  FaGithub 
} from 'react-icons/fa';
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
    initial: { x: -300, y: -100 },
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
    initial: { x: -200, y: -100 },
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
    initial: { x: -100, y: -100 },
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
    href: "/documents/resume.pdf",
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
    initial: { x: 100, y: -100 },
  },
];

// Small page components for each section
function AboutPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Fixed Header */}
      <div className="flex flex-row gap-4 items-center p-4 border-zinc-800 bg-transparent sticky top-0 z-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Jaanvi Nayak</h2>
          <p className="text-lg font-medium">
            IN-based fullstack developer
          </p>
          <h1 className="pt-3 border-b"></h1>
        </div>
        <div className="relative w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/profile.jpg"
            alt="Jaanvi Nayak"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-2">
       <div className="mb-8">
         <h3 className="text-xl font-bold mb-4">
           behind the code
         </h3>
         <ul className="list-disc pl-5 text-lg space-y-2">
           <li>
             build seamless <b>backend APIs</b>, handle <b>auth</b>, and design <b>microservices</b>,
           </li>
           <li>
             explore new frameworks like <b>Next.js</b>, <b>React</b>, and <b>Angular</b>,
           </li>
           <li>
             build full-stack apps using <b>MERN</b> and now moving into <b>Go (Golang)</b> for future backend projects.
           </li>
         </ul>
       </div>
     </div>
    </div>
  );
}


function LinksPage() {
  const links = [
    { name: "twitter", url: "https://x.com/itsjaanvi22", icon: <FaTwitter size={30} /> },
    { name: "instagram", url: "https://instagram.com", icon: <FaInstagram size={30} /> },
    { name: "linkedin", url: "https://www.linkedin.com/in/dev-jaanvi/", icon: <FaLinkedin size={30} /> },
    { name: "github", url: "https://github.com/jvi22", icon: <FaGithub size={30} /> },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-6 text-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-200/30 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="mb-2 text-2xl">
                {link.icon}
              </div>
              <span className="text-sm capitalize">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-center mt-6 text-xs text-gray-500 dark:text-gray-400">
          Clicking any of the links will open a new tab!
        </p>
      </div>
    </div>
  );
}

function WorkPage() {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto">
      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">SKILLS</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Go",
            "HTML",
            "CSS",
            "Python",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "JWT Auth",
            "Socket.io",
            "Google Maps API",
          ].map((skill) => (
            <span
              key={skill}
              className={`
                px-4 py-2 rounded-xl font-semibold text-base
                border border-black/10 dark:border-white/10
                bg-white/40 dark:bg-black/20
                shadow-sm
                transition
                select-none
                backdrop-blur
                hover:bg-orange-100/60 dark:hover:bg-orange-400/20
              `}
              style={{
                display: "inline-block",
                minWidth: 80,
                textAlign: "center",
                letterSpacing: "0.01em",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">PROJECTS</h2>

        {/* Project 1: UBER Clone */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Ride-Booking App (UBER Clone)</h3>
          <ul className="list-disc pl-5 text-base mt-2 space-y-1">
            <li>Used <strong>MERN Stack</strong> for scalable, full-stack development.</li>
            <li>Integrated <strong>Google Maps API</strong> for live location tracking and route calculation.</li>
            <li>Implemented <strong>Socket.io</strong> for real-time driver–rider communication.</li>
            <li>Designed clean, responsive UI with <strong>Tailwind CSS</strong>.</li>
          </ul>
        </div>

        {/* Project 2: Buzzed Chat App */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Buzzed – Real-Time Chat App</h3>
          <ul className="list-disc pl-5 text-base mt-2 space-y-1">
            <li>Built using the <strong>MERN Stack</strong> and <strong>Socket.io</strong> for real-time messaging with currently more than 30 active users.</li>
            <li>Implemented user authentication with <strong>JWT</strong> and session management.</li>
            <li>Enabled <strong>image & text sharing</strong> with a smooth and intuitive UI.</li>
            <li>Optimized for speed and responsiveness across devices.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto">
      <div className="flex-1 flex flex-col items-center justify-start p-4">
        <div className="relative w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/profile-contact.jpg"
            alt="Jaanvi Nayak"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
        
        <p className="pt-4 text-center mb-4 text-lg">
          lets get in touch!
        </p>
        <a
         href="https://mail.google.com/mail/?view=cm&fs=1&to=nayakjaanvi321@gmail.com"
         target="_blank"
         rel="noopener noreferrer"
         className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition-colors text-center text-sm mb-4"
       >
         send me an email!
       </a>
        {/* Add more content here to test scrollability */}
        
      </div>
    </div>
  );
}

// Map label to page component
const pageComponents: { [key: string]: JSX.Element } = {
  about: <AboutPage />,
  links: <LinksPage />,
  work: <WorkPage />,
  contact: <ContactPage />,
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
          className="text-xl font-bold bg-transparent rounded-full px-2 py-0.5 shadow-none transition "
          style={{
            lineHeight: 1,
            color: "#18181b",
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
      Object.values(soundRefs.current).forEach((sound) => sound && sound.unload());
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
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-gray-800 dark:text-gray-700">hi! </span>
            <span className="text-orange-400">i'm jaanvi.</span>
          </h2>
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
          {pageComponents[page.label]}
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
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Wavify
          fill={isDarkMode ? "#818cf8" : "#60a5fa"}
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