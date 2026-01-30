import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus corrupti perferendis nisi numquam soluta labore.",
      image: "/coming.jpg",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus corrupti perferendis nisi numquam soluta labore.",
      image: "/coming.jpg",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus corrupti perferendis nisi numquam soluta labore.",
      image: "/coming.jpg",
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus corrupti perferendis nisi numquam soluta labore.",
      image: "/coming.jpg",
    },
    {
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus corrupti perferendis nisi numquam soluta labore.",
      image: "/coming.jpg",
    },
    {
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus corrupti perferendis nisi numquam soluta labore.",
      image: "/coming.jpg",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-[4%] py-20 bg-dark-bg">
      <h2 className="text-7xl font-bold text-center mb-20">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-12 bg-dark-bg border-2 border-accent-orange rounded-3xl cursor-pointer shadow-sm hover:shadow-orange-glow-2x hover:scale-105 transition-all"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
            <p className="text-1.6xl mb-8">{project.description}</p>
            <button className="px-8 py-3 bg-accent-orange text-black rounded-3xl font-semibold hover:shadow-orange-glow transition-shadow">
              Review project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
