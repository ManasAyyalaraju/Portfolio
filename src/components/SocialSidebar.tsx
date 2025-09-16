import { FaLinkedin, FaGithub } from "react-icons/fa";

const icons = [
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/manas-ayyalaraju" },
  { icon: <FaGithub />, href: "https://github.com/ManasAyyalaraju" },
];

export default function SocialSidebar() {
  return (
    <div className="hidden sm:flex flex-col fixed top-[40%] left-2 gap-3 z-50">
      {icons.map(({ icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-xl btn-glass-orange text-gray-800 transition"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
