import Highlight from "./Highlight";

function WorkPage({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto">
      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: isDarkMode ? "#fff" : "#18181b" }}>PROJECTS</h2>
        {/* Project 1: UBER Clone */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold" style={{ color: isDarkMode ? "#fff" : "#18181b" }}>Ride-Booking App (UBER Clone)</h3>
          <ul className="list-disc pl-5 text-base mt-2 space-y-1" style={{ color: isDarkMode ? "#fff" : "#18181b" }}>
            <li>Used <Highlight isDarkMode={isDarkMode}>MERN Stack</Highlight> for scalable, full-stack development.</li>
            <li>Integrated <Highlight isDarkMode={isDarkMode}>Google Maps API</Highlight> for live location tracking and route calculation.</li>
            <li>Implemented <Highlight isDarkMode={isDarkMode}>Socket.io</Highlight> for real-time driver–rider communication.</li>
            <li>Designed clean, responsive UI with <Highlight isDarkMode={isDarkMode}>Tailwind CSS</Highlight>.</li>
          </ul>
        </div>
        {/* Project 2: Buzzed Chat App */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold" style={{ color: isDarkMode ? "#fff" : "#18181b" }}>Buzzed – Real-Time Chat App</h3>
          <ul className="list-disc pl-5 text-base mt-2 space-y-1" style={{ color: isDarkMode ? "#fff" : "#18181b" }}>
            <li>Built using the <Highlight isDarkMode={isDarkMode}>MERN Stack</Highlight> and <Highlight isDarkMode={isDarkMode}>Socket.io</Highlight> for real-time messaging with currently more than 30 active users.</li>
            <li>Implemented user authentication with <Highlight isDarkMode={isDarkMode}>JWT</Highlight> and session management.</li>
            <li>Enabled <Highlight isDarkMode={isDarkMode}>image & text sharing</Highlight> with a smooth and intuitive UI.</li>
            <li>Optimized for speed and responsiveness across devices.</li>
          </ul>
          {/* GitHub Repo Link */}
          <div className="mt-3">
            <a
              href="https://github.com/jvi22/buzzed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-semibold"
              style={{
                color: isDarkMode ? "#a78bfa" : "#fb923c",
                textDecoration: "underline",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ display: "inline-block", verticalAlign: "middle" }}
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
        </div>
      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: isDarkMode ? "#fff" : "#18181b" }}>SKILLS</h2>
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
                color: isDarkMode ? "#a78bfa" : "#fb923c", 
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkPage;