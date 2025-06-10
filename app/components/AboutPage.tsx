import Image from 'next/image';
import Highlight from "./Highlight";

function AboutPage({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="flex flex-col h-full">
      {/* Fixed Header */}
      <div className="flex flex-row gap-4 items-center p-4 border-zinc-800 bg-transparent sticky top-0 z-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold" style={{ color: isDarkMode ? "#a78bfa" : "#fb923c" }}>
            Jaanvi Nayak
          </h2>
          <p className="text-lg font-medium" style={{ color: isDarkMode ? "#fff" : "#18181b" }}>
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
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: isDarkMode ? "#fff" : "#18181b" }}
          >
            behind the code
          </h3>
          <ul
            className="list-disc pl-5 text-lg space-y-2"
            style={{ color: isDarkMode ? "#fff" : "#18181b" }}
          >
            <li>
              build seamless <Highlight isDarkMode={isDarkMode}>backend APIs</Highlight>, handle <Highlight isDarkMode={isDarkMode}>auth</Highlight>, and design <Highlight isDarkMode={isDarkMode}>microservices</Highlight>,
            </li>
            <li>
              explore new frameworks like <Highlight isDarkMode={isDarkMode}>Next.js</Highlight>, <Highlight isDarkMode={isDarkMode}>React</Highlight>, and <Highlight isDarkMode={isDarkMode}>Angular</Highlight>,
            </li>
            <li>
              build full-stack apps using <Highlight isDarkMode={isDarkMode}>MERN</Highlight> and now moving into <Highlight isDarkMode={isDarkMode}>Go (Golang)</Highlight> for future backend projects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;