"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewHeroSlidePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());

    await fetch("/api/hero", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        order: Number(data.order),
      }),
    });

    router.push("/admin");
  }

  return (
    <div className="p-10 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Create Hero Slide</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" required className="input" />
        <input name="highlighted" placeholder="Highlighted Text" className="input" />
        <input name="subtitle" placeholder="Subtitle" className="input" />
        <textarea name="description" placeholder="Description" className="input" />

        <input name="backgroundUrl" placeholder="Background Image URL" required className="input" />
        <input name="imageUrl" placeholder="Side Image URL" className="input" />

        <select name="layout" className="input">
          <option value="LEFT">Left</option>
          <option value="CENTER">Center</option>
          <option value="RIGHT">Right</option>
        </select>

        <select name="fontSize" className="input">
          <option value="SMALL">Small</option>
          <option value="MEDIUM">Medium</option>
          <option value="LARGE">Large</option>
        </select>

        <input name="ctaPrimaryText" placeholder="Primary CTA Text" className="input" />
        <input name="ctaPrimaryLink" placeholder="Primary CTA Link" className="input" />

        <input name="ctaSecondaryText" placeholder="Secondary CTA Text" className="input" />
        <input name="ctaSecondaryLink" placeholder="Secondary CTA Link" className="input" />

        <input name="order" type="number" placeholder="Order" className="input" />

        <button
          disabled={loading}
          className="bg-orange-500 text-white px-6 py-3 rounded"
        >
          {loading ? "Saving..." : "Create Slide"}
        </button>
      </form>
    </div>
  );
}