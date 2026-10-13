import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsGrid from "./components/NewsGrid";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4">
        <Hero />
        <NewsGrid />
      </main>
    </>
  );
}


