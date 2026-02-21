




"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [slides, setSlides] = useState<any[]>([]);

  async function fetchSlides() {
    const res = await fetch("/api/hero", {
      cache: "no-store",
    });
    const data = await res.json();
    setSlides(data);
  }

  useEffect(() => {
    fetchSlides();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this slide?")) return;

    await fetch(`/api/hero/${id}`, {
      method: "DELETE",
    });

    fetchSlides();
  }

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Hero Slides</h1>

        <Link
          href="/admin/new"
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          + New Slide
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Layout</th>
            <th className="p-3">Order</th>
            <th className="p-3">Active</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {slides.map((slide) => (
            <tr key={slide.id}  className={`border-t ${
    !slide.isActive ? "opacity-50" : ""
  }`}>
              <td className="p-3">
                {slide.title}{" "}
                <span className="text-orange-500">
                  {slide.highlighted}
                </span>
              </td>
              <td className="p-3">{slide.layout}</td>
              <td className="p-3">{slide.order}</td>
             <td className="p-3">
  {slide.isActive ? (
    <span className="text-green-600 font-medium">Active</span>
  ) : (
    <span className="text-gray-400 font-medium">Disabled</span>
  )}
</td>
              <td className="p-3 flex gap-3">
                <Link
                  href={`/admin/edit/${slide.id}`}
                  className="text-blue-600 underline"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(slide.id)}
                  className="text-red-600 underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}