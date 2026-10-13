
import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  categoria: string;
  titulo: string;
  resumo: string;
  imagem: string;
  link: string;
};

export default function NewsCard({
  categoria,
  titulo,
  resumo,
  imagem,
  link,
}: NewsCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52">
        <Image
          src={imagem}
          alt={titulo}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <span className="text-sm font-bold uppercase text-blue-700">
          {categoria}
        </span>

        <h2 className="mt-2 text-xl font-bold text-gray-900">
          {titulo}
        </h2>

        <p className="mt-3 leading-relaxed text-gray-600">
          {resumo}
        </p>

        <Link
          href={link}
          className="mt-4 inline-block font-semibold text-blue-700 hover:text-blue-900"
        >
          Leia mais →
        </Link>
      </div>
    </article>
  );
}
