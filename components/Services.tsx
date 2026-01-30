import { Code, Code2, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "PHP (Beginner)",
      description:
        "Saya sedang mempelajari pemrograman PHP untuk membangun aplikasi web sederhana. Saya memahami dasar-dasar PHP seperti pengolahan data, form, dan koneksi database, serta terus berlatih melalui proyek kecil untuk meningkatkan kemampuan saya.",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Saya cukup mahir dalam membuat tampilan website menggunakan HTML, CSS, dan JavaScript. Saya mampu merancang antarmuka yang responsif, rapi, dan mudah digunakan, serta terus mengembangkan kemampuan saya dalam desain dan pengalaman pengguna (UI/UX)",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Saya sedang mempelajari pengembangan backend untuk mengelola logika aplikasi dan database. Saya memahami dasar penggunaan database seperti MySQL serta proses dasar seperti login, CRUD (Create, Read, Update, Delete), dan pengolahan data sederhana.",
    },
  ];

  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center px-[15%] py-20 bg-darker-bg">
      <h2 className="text-7xl font-bold text-center mb-20">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-20 bg-accent-orange text-black rounded-3xl border-2 border-accent-orange cursor-pointer hover:bg-dark-bg hover:text-text-light hover:-translate-y-2.5 transition-all shadow-lg hover:shadow-orange-glow"
            >
              <Icon size={70} className="mb-8 text-black group-hover:text-accent-orange" />
              <h4 className="text-3xl font-bold mb-8">{service.title}</h4>
              <p className="text-1.4xl font-medium leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
