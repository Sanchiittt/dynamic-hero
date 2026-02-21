"use client";

import Image from "next/image";
import clsx from "clsx";

type HeroSlideProps = {
  slide: {
    title: string;
    highlighted?: string | null;
    subtitle?: string | null;
    description?: string | null;
    backgroundUrl: string;
    imageUrl?: string | null;
    layout: "LEFT" | "CENTER" | "RIGHT";
    fontSize: "SMALL" | "MEDIUM" | "LARGE";
    ctaPrimaryText?: string | null;
    ctaPrimaryLink?: string | null;
    ctaSecondaryText?: string | null;
    ctaSecondaryLink?: string | null;
  };
};

export default function HeroSlide({ slide }: HeroSlideProps) {
  const alignment =
    slide.layout === "LEFT"
      ? "text-left items-start"
      : slide.layout === "RIGHT"
      ? "text-right items-end"
      : "text-center items-center";

  const titleSize =
    slide.fontSize === "SMALL"
      ? "text-3xl"
      : slide.fontSize === "LARGE"
      ? "text-6xl"
      : "text-4xl";

  return (
    <div
      className="relative min-h-[80vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div className={clsx("flex flex-col gap-4", alignment)}>
          {slide.subtitle && (
            <p className="uppercase tracking-widest text-sm text-orange-400">

              {slide.subtitle}
            </p>
          )}

        <h1
  className={clsx(
    "font-bold text-white leading-tight",
    titleSize
  )}
>
  {slide.title}
  {slide.highlighted && (
    <span className="text-orange-400 ml-3">
      {slide.highlighted}
    </span>
  )}
</h1>



          {slide.description && (
            <p className="text-gray-200 max-w-xl">
              {slide.description}
            </p>
          )}

          <div className="flex gap-4 mt-4">
            {slide.ctaPrimaryText && (
              <a
                href={slide.ctaPrimaryLink || "#"}
                className="bg-orange-500 text-white px-6 py-3 rounded-md"
              >
                {slide.ctaPrimaryText}
              </a>
            )}

            {slide.ctaSecondaryText && (
              <a
                href={slide.ctaSecondaryLink || "#"}
                className="border border-white text-white px-6 py-3 rounded-md"
              >
                {slide.ctaSecondaryText}
              </a>
            )}
          </div>
        </div>

        {/* IMAGE */}
        {slide.imageUrl && (
          <div className="hidden md:flex justify-center">
            <Image
  src={slide.imageUrl}
  alt="Hero Image"
  width={420}
  height={520}
  priority
  className="object-cover rounded-none"
/>

          </div>
        )}
      </div>
    </div>
  );
}
