import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 py-8 md:grid-cols-2 md:gap-10">
      <div>
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-800">
          Destaque • Tecnologia
        </span>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
          A tecnologia transforma o{" "}
          <span className="text-blue-700">futuro do Brasil.</span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
          Descubra as inovações que estão mudando a maneira como vivemos,
          trabalhamos e nos conectamos.
        </p>

        <Link
          href="/tecnologia"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Explorar notícias <span aria-hidden="true">→</span>
        </Link>

        <p className="mt-4 text-sm text-slate-500">
          Informação, inovação e conhecimento em um só lugar.
        </p>
      </div>

      <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          alt="Profissionais trabalhando com tecnologia"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}