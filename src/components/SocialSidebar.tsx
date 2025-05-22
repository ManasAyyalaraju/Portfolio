import { FaLinkedin, FaGithub } from "react-icons/fa";

const icons = [
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/manas-ayyalaraju" },
  { icon: <FaGithub />, href: "https://github.com" },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-2 top-1/3 space-y-4 z-50">
      {icons.map(({ icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white text-gray-800 rounded shadow hover:bg-yellow-400 hover:text-black transition"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
