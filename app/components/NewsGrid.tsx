
"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import { noticias } from "../data/noticia";

const categorias = ["Todas", ...new Set(noticias.map((noticia) => noticia.categoria))];

export default function NewsGrid() {
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

  const noticiasFiltradas = noticias.filter((noticia) => {
    const termo = busca.toLowerCase().trim();

    const correspondeBusca =
      noticia.titulo.toLowerCase().includes(termo) ||
      noticia.resumo.toLowerCase().includes(termo) ||
      noticia.categoria.toLowerCase().includes(termo);

    const correspondeCategoria =
      categoriaSelecionada === "Todas" ||
      noticia.categoria === categoriaSelecionada;

    return correspondeBusca && correspondeCategoria;
  });

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Últimas Notícias
        </h2>

        <p className="mt-2 text-slate-600">
          Fique por dentro dos assuntos que importam.
        </p>
      </div>

      <div className="mb-6">
        <label
          htmlFor="busca-noticias"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Buscar notícias
        </label>

        <input
          id="busca-noticias"
          type="search"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Digite um título, assunto ou categoria..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-3" aria-label="Filtrar por categoria">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            onClick={() => setCategoriaSelecionada(categoria)}
            aria-pressed={categoriaSelecionada === categoria}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              categoriaSelecionada === categoria
                ? "bg-blue-700 text-white shadow-md"
                : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {noticiasFiltradas.length > 0 ? (
        <>
          <p className="mb-5 text-sm text-slate-500">
            {noticiasFiltradas.length}{" "}
            {noticiasFiltradas.length === 1
              ? "notícia encontrada"
              : "notícias encontradas"}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {noticiasFiltradas.map((noticia) => (
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
        </>
      ) : (
        <p className="rounded-xl bg-white p-6 text-center text-slate-600">
          Nenhuma notícia encontrada para essa busca e categoria.
        </p>
      )}
    </section>
  );
}