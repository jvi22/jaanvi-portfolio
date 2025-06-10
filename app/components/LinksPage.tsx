import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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

export default LinksPage;