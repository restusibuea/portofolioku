import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Home() {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gap-60 px-[15%] pt-32 pb-20">
      <div className="flex flex-col items-end text-right max-w-2xl">
        <h1 className="text-8xl font-bold mt-6 leading-tight">
          Hi, it's <span className="gradient-text">Restu</span>
        </h1>
        <h3 className="text-4xl my-4 font-medium">
          saya junior <span className="gradient-text">web developer</span>
        </h3>
        <p className="text-1.5xl font-medium leading-relaxed mb-12">
          hai selamat datang di Website Portofolio saya. Website ini saya bangun sendiri dan juga dibantu dengan referensi dari
          internet. Kamu dapat melihat informasi mengenai saya di bawah ini.
        </p>

        {/* Social Icons */}
        <div className="flex gap-2 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link
                key={index}
                href={social.href}
                className="flex justify-center items-center w-16 h-16 border-2 border-accent-orange text-accent-orange rounded-full hover:bg-accent-orange hover:text-black transition-all hover:scale-125 hover:shadow-orange-glow"
              >
                <Icon size={30} />
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6">
          <button className="px-12 py-4 bg-accent-orange text-black rounded-3xl font-semibold shadow-orange-glow hover:scale-105 transition-transform">
            Hire
          </button>
          <Link
            href="#contact"
            className="px-12 py-4 bg-black text-accent-orange border-2 border-accent-orange rounded-3xl font-semibold hover:bg-accent-orange hover:text-black hover:shadow-orange-glow transition-all"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hidden lg:block flex-1">
        <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-orange-glow-3x hover:shadow-orange-glow-3x transition-shadow">
          <Image
            src="/image.jpeg"
            alt="Restu Sibuea"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Responsive for smaller screens */}
      <div className="lg:hidden w-56 h-56 relative mx-auto mt-12 rounded-full overflow-hidden shadow-orange-glow">
        <Image
          src="/image.jpeg"
          alt="Restu Sibuea"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
