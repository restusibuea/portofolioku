import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  const footerLinks = [
    { label: "FAQ", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-darker-bg py-20 px-[15%]">
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-12">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              key={index}
              href={social.href}
              className="flex justify-center items-center w-16 h-16 border-2 border-accent-orange text-accent-orange rounded-full hover:bg-accent-orange hover:text-black transition-all hover:scale-125 hover:shadow-orange-glow"
            >
              <Icon size={24} />
            </Link>
          );
        })}
      </div>

      {/* Footer Links */}
      <ul className="flex flex-wrap justify-center gap-8 mb-12 text-1.8xl">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-text-light hover:border-b-3 hover:border-accent-orange transition-all"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="text-center text-1.6xl text-text-light">Restucode/White death</p>
    </footer>
  );
}
