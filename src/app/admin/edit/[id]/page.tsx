"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditHeroSlidePage() {
  const router = useRouter();
  const params = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/hero`)
      .then((res) => res.json())
      .then((slides) => {
        const slide = slides.find(
          (s: any) => s.id === params.id
        );
        setData(slide);
      });
  }, [params.id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    await fetch(`/api/hero/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        order: Number(payload.order),
        isActive: payload.isActive === "on",
      }),
    });

    router.push("/admin");
  }

  if (!data) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Edit Hero Slide</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" defaultValue={data.title} className="input" />
        <input name="highlighted" defaultValue={data.highlighted} className="input" />
        <input name="subtitle" defaultValue={data.subtitle} className="input" />
        <textarea name="description" defaultValue={data.description} className="input" />

        <input name="backgroundUrl" defaultValue={data.backgroundUrl} className="input" />
        <input name="imageUrl" defaultValue={data.imageUrl} className="input" />

        <select name="layout" defaultValue={data.layout} className="input">
          <option value="LEFT">LEFT</option>
          <option value="CENTER">CENTER</option>
          <option value="RIGHT">RIGHT</option>
        </select>

        <select name="fontSize" defaultValue={data.fontSize} className="input">
          <option value="SMALL">SMALL</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LARGE">LARGE</option>
        </select>

        <input name="order" type="number" defaultValue={data.order} className="input" />

        <label className="flex gap-2 items-center">
          <input type="checkbox" name="isActive" defaultChecked={data.isActive} />
          Active
        </label>

        <button className="bg-orange-500 text-white px-6 py-3 rounded">
          Update Slide
        </button>
      </form>
    </div>
  );
}