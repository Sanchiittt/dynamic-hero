import HeroSlider from "@/components/hero/HeroSlider";

async function getHeroSlides() {
  const res = await fetch("http://localhost:3000/api/hero", {
    cache: "no-store",
  });

  return res.json();
}

export default async function HomePage() {
  const slides = await getHeroSlides();

  return (
    <main>
      <HeroSlider slides={slides} />
    </main>
  );
}
