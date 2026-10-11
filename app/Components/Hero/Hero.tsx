
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:gap-12">
      <div>
        <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
          Destaque • Tecnologia
        </span>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          A tecnologia está transformando o futuro do Brasil
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-gray-600">
          Descubra as principais inovações que estão mudando a maneira como
          vivemos, trabalhamos e nos conectamos.
        </p>

        <Link
          href="/tecnologia"
          className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Explorar notícias
        </Link>
      </div>

      <div className="relative h-72 overflow-hidden rounded-2xl bg-gray-100 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          alt="Profissionais trabalhando com tecnologia"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
