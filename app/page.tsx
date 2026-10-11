

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import NewsGrid from "./Components/NewsGrid/NewsGrid";

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


