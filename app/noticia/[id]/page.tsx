
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { noticias } from "../../data/noticia";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function NoticiaPage({ params }: PageProps) {
  const { id } = await params;
  const noticia = noticias.find((item) => item.id === id);

  if (!noticia) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="font-semibold text-blue-700 hover:text-blue-900"
      >
        ← Voltar para a página inicial
      </Link>

      <article className="mt-8">
        <span className="font-bold uppercase tracking-wide text-blue-700">
          {noticia.categoria}
        </span>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          {noticia.titulo}
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Publicado em {noticia.data}
        </p>

        <div className="relative mt-8 h-64 overflow-hidden rounded-2xl md:h-[450px]">
          <Image
            src={noticia.imagem}
            alt={noticia.titulo}
            fill
            unoptimized
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-lg leading-8 text-gray-700">
          {noticia.conteudo.split("\n\n").map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
