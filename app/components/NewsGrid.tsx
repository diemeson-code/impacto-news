
import NewsCard from "./NewsCard";
import { noticias } from "../data/noticia";

export default function NewsGrid() {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Últimas Notícias
        </h2>

        <p className="mt-2 text-gray-600">
          Fique por dentro dos assuntos que importam.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            categoria={noticia.categoria}
            titulo={noticia.titulo}
            resumo={noticia.resumo}
            imagem={noticia.imagem}
            link={`/noticia/${noticia.id}`}
          />
        ))}
      </div>
    </section>
  );
}


