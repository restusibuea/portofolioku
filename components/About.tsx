import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-40 px-[15%] py-20 bg-darker-bg">
      {/* Image */}
      <div className="lg:order-first order-last flex-1">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-orange-glow hover:shadow-orange-glow-3x transition-shadow mx-auto lg:mx-0">
          <Image
            src="/pemandangan.jpeg"
            alt="Restu Sibuea"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-7xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <h1 className="text-5xl font-bold mb-12 text-text-light">Sedikit Cerita dari saya :</h1>
        <p className="text-1.8xl leading-relaxed mb-12 text-text-light">
          Hai semuanya! Perkenalkan nama saya Restu dan marga saya Sibuea, Saya dari Kota Medan, Sumatera utara. Saya
          merupakan Mahasiswa Teknologi Rekayasa Perangkat Lunak di Politeknik Wilmar Indonesia. Saya suka dengan dunia web
          sejak saya waktu kelas 2 SMP, dan saya lebih mendalami bagian Backend, saya sukanya berawal dari penasaran, membuat
          dan praktek sedikit demi sedikit. setiap project yang berhasil membuat saya bersemangat, sampai akhirnya saya
          memutuskan untuk menimbah ilmu tentang IT melalui perkuliahan.
        </p>
        <button className="px-12 py-4 bg-accent-orange text-black rounded-3xl font-semibold shadow-orange-glow hover:scale-105 transition-transform">
          Read More
        </button>
      </div>
    </section>
  );
}
