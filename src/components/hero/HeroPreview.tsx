"use client";

import clsx from "clsx";

type PreviewProps = {
  data: any | null;
};

export default function HeroPreview({ data }: PreviewProps) {
  // ✅ GUARD
  if (!data) {
    return null;
  }

  const isCenter = data.layout === "CENTER";

  return (
    <div
      className="relative mt-10 rounded-lg overflow-hidden min-h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${data.backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        className={clsx(
          "relative p-8 flex gap-6",
          isCenter
            ? "flex-col items-center text-center"
            : "items-center"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-3",
            isCenter ? "items-center" : "items-start"
          )}
        >
          <h2
            className="text-3xl font-bold"
            style={{ color: data.textColor || "#ffffff" }}
          >
            {data.title}
            {data.highlighted && (
              <span
                className="ml-2"
                style={{
                  color: data.highlightColor || "#f97316",
                }}
              >
                {data.highlighted}
              </span>
            )}
          </h2>

          {data.description && (
            <p className="text-sm text-gray-200 max-w-xl">
              {data.description}
            </p>
          )}

          <div className="flex gap-3 mt-3">
            {data.ctaPrimaryText && (
              <button
                style={{
                  backgroundColor:
                    data.primaryBtnColor || "#f97316",
                }}
                className="px-4 py-2 rounded text-white text-sm"
              >
                {data.ctaPrimaryText}
              </button>
            )}

            {data.ctaSecondaryText && (
              <button
                style={{
                  borderColor:
                    data.secondaryBtnColor || "#ffffff",
                  color:
                    data.secondaryBtnColor || "#ffffff",
                }}
                className="px-4 py-2 rounded border text-sm"
              >
                {data.ctaSecondaryText}
              </button>
            )}
          </div>
        </div>

        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt="Preview"
            className="w-48 rounded"
          />
        )}
      </div>
    </div>
  );
}