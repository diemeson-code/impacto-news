
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <section className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
          Quem somos
        </span>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
          Sobre o Impacto{" "}
          <span className="text-blue-400">News</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Informação, inovação e conhecimento em um só lugar.
          Nosso objetivo é facilitar o acesso a notícias e conteúdos
          relevantes sobre o Brasil, o mundo, a tecnologia e os esportes.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-3xl" aria-hidden="true">
            🎯
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            Nossa missão
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Reunir informações de maneira clara e organizada,
            ajudando os leitores a acompanhar assuntos importantes
            do cotidiano.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-3xl" aria-hidden="true">
            🌎
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            O que você encontra aqui
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Conteúdos sobre Brasil, mundo, tecnologia e esportes,
            organizados por categoria para facilitar sua navegação.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl bg-blue-50 p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Explore o portal
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Continue navegando e descubra os conteúdos disponíveis
          no Impacto News.
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Ir para a página inicial
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
