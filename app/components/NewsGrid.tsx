
"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import { noticias } from "../data/noticia";

const categorias = [
  "Todas",
  ...new Set(noticias.map((noticia) => noticia.categoria)),
];

const meses: Record<string, string> = {
  janeiro: "01",
  fevereiro: "02",
  março: "03",
  abril: "04",
  maio: "05",
  junho: "06",
  julho: "07",
  agosto: "08",
  setembro: "09",
  outubro: "10",
  novembro: "11",
  dezembro: "12",
};

function converterData(data: string): number {
  const partes = data.toLowerCase().trim().split(" de ");

  if (partes.length !== 3) {
    return 0;
  }

  const [dia, mes, ano] = partes;
  const numeroMes = meses[mes];
  const numeroDia = Number(dia);
  const numeroAno = Number(ano);

  if (
    !numeroMes ||
    !Number.isInteger(numeroDia) ||
    numeroDia < 1 ||
    numeroDia > 31 ||
    !Number.isInteger(numeroAno) ||
    numeroAno < 1
  ) {
    return 0;
  }

  const timestamp = new Date(
    `${numeroAno}-${numeroMes}-${String(numeroDia).padStart(2, "0")}T12:00:00`
  ).getTime();

  return Number.isFinite(timestamp) ? timestamp : 0;
}

export default function NewsGrid() {
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

  const termo = busca.trim().toLocaleLowerCase("pt-BR");

  const noticiasOrdenadas = [...noticias].sort(
    (a, b) => converterData(b.data) - converterData(a.data)
  );

  const noticiasFiltradas = noticiasOrdenadas.filter((noticia) => {
    const correspondeBusca =
      noticia.titulo.toLocaleLowerCase("pt-BR").includes(termo) ||
      noticia.resumo.toLocaleLowerCase("pt-BR").includes(termo) ||
      noticia.categoria.toLocaleLowerCase("pt-BR").includes(termo) ||
      noticia.conteudo.toLocaleLowerCase("pt-BR").includes(termo);

    const correspondeCategoria =
      categoriaSelecionada === "Todas" ||
      noticia.categoria === categoriaSelecionada;

    return correspondeBusca && correspondeCategoria;
  });

  function limparBusca() {
    setBusca("");
  }

  function limparFiltros() {
    setBusca("");
    setCategoriaSelecionada("Todas");
  }

  return (
    <section className="py-10 sm:py-12">
      <div className="mb-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Informação em foco
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Últimas Notícias
            </h2>

            <p className="mt-2 text-slate-600">
              Fique por dentro dos assuntos que importam.
            </p>
          </div>

          <span
            aria-live="polite"
            className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700"
          >
            {noticiasFiltradas.length}{" "}
            {noticiasFiltradas.length === 1 ? "notícia" : "notícias"}
          </span>
        </div>
      </div>

      <div className="relative mb-6">
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
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-32 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />

        {busca.length > 0 && (
          <button
            type="button"
            onClick={limparBusca}
            aria-label="Limpar texto da busca"
            className="absolute bottom-2 right-2 rounded-lg px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Limpar busca
          </button>
        )}
      </div>

      <div
        className="mb-8 flex flex-wrap gap-3"
        role="group"
        aria-label="Filtrar por categoria"
      >
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
      ) : (
        <div
          className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center"
          aria-live="polite"
        >
          <p className="text-lg font-bold text-slate-800">
            Nenhuma notícia encontrada
          </p>

          <p className="mt-2 text-slate-500">
            Tente outro termo ou selecione uma categoria diferente.
          </p>

          <button
            type="button"
            onClick={limparFiltros}
            className="mt-5 rounded-lg bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </section>
  );
}

