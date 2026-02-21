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
    textColor?: string | null;
  highlightColor?: string | null;
  primaryBtnColor?: string | null;
  secondaryBtnColor?: string | null;
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
    
      const isCenter = slide.layout === "CENTER";
      const imageOrder =
  slide.layout === "RIGHT" ? "md:order-first" : "md:order-last";
  return (
    <div
      className="relative min-h-[80vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

     <div
  className={clsx(
    "relative container mx-auto px-6 gap-16 items-center",
    isCenter ? "flex flex-col text-center" : "grid md:grid-cols-2"
  )}
>

        {/* TEXT */}
       <div
  className={clsx(
    "flex flex-col gap-4",
    isCenter ? "items-center text-center" : alignment
  )}
>
          {slide.subtitle && (
            <p className="uppercase tracking-widest text-sm text-orange-400">

              {slide.subtitle}
            </p>
          )}

        <h1
  className={clsx("font-bold leading-tight", titleSize)}
  style={{ color: slide.textColor ?? "#ffffff" }}
>
  {slide.title}
  {slide.highlighted && (
    <span
  className="ml-3"
  style={{ color: slide.highlightColor ?? "#f97316" }}
>
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
                href={slide.ctaPrimaryLink ?? "#"}
  style={{
  backgroundColor: slide.primaryBtnColor ?? "#f97316",
}}
  className="px-6 py-3 rounded text-white font-medium"
              >
                {slide.ctaPrimaryText}
              </a>
            )}

            {slide.ctaSecondaryText && (
              <a
                href={slide.ctaSecondaryLink ?? "#"}
  style={{
  borderColor: slide.secondaryBtnColor ?? "#ffffff",
  color: slide.secondaryBtnColor ?? "#ffffff",
}}
  className="px-6 py-3 rounded border font-medium"
              >
                {slide.ctaSecondaryText}
              </a>
            )}
          </div>
        </div>

        {/* IMAGE */}
        
        {slide.imageUrl && (
  <div
    className={clsx(
      "flex justify-center",
      !isCenter && imageOrder,
      isCenter && "mt-10"
    )}
  >
    <img
      src={slide.imageUrl}
      alt="Hero Image"
      className="w-[420px] h-auto object-cover rounded"
    />
  </div>
)}
      </div>
    </div>
  );
}
