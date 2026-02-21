// import { headers } from "next/headers";
// import HeroSlider from "@/components/hero/HeroSlider";

// async function getHeroSlides() {
//   const headersList = await headers(); // ✅ await is REQUIRED in Next 15
//   const host = headersList.get("host");

//   const protocol =
//     process.env.NODE_ENV === "development" ? "http" : "https";

//   const res = await fetch(`${protocol}://${host}/api/hero`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch hero slides");
//   }

//   return res.json();
// }

// export default async function HomePage() {
//   const slides = await getHeroSlides();

//   return (
//     <main>
//       <HeroSlider slides={slides} />
//     </main>
//   );
// }


import { headers } from "next/headers";
import HeroSlider from "@/components/hero/HeroSlider";

async function getHeroSlides() {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol =
      process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/hero`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Hero API failed:", res.status);
      return []; // ✅ DO NOT crash
    }

    return res.json();
  } catch (err) {
    console.error("Hero fetch error:", err);
    return []; // ✅ DO NOT crash
  }
}

export default async function HomePage() {
  const slides = await getHeroSlides();
  const activeSlides = slides.filter((slide: any) => slide.isActive);
  return (
    <main>
      <HeroSlider slides={activeSlides} />
    </main>
  );
}