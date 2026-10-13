import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsGrid from "./components/NewsGrid";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-4 md:py-6">
          <Hero />
        </div>

        <div className="pb-10 md:pb-16">
          <NewsGrid />
        </div>
      </main>
    </>
  );
}