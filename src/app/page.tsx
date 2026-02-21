import HeroSlider from "@/components/hero/HeroSlider";

async function getHeroSlides() {
  const res = await fetch("/api/hero", {
  cache: "no-store",
});
 if (!res.ok) {
    throw new Error("Failed to fetch hero slides");
  }

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
