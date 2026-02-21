





"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import HeroPreview from "@/components/hero/HeroPreview";

export default function EditHeroSlidePage() {
  const router = useRouter();
  const params = useParams();

  const [data, setData] = useState<any>(null);
  const [preview, setPreview] = useState<any>(null);

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

  useEffect(() => {
    if (data) setPreview(data);
  }, [data]);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
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
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Edit Hero Slide
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT — FORM */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-semibold mb-1">
                Title
              </label>
              <input
                name="title"
                defaultValue={data.title}
                className="input"
                onChange={(e) =>
                  setPreview({ ...preview, title: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Highlighted Text
              </label>
              <input
                name="highlighted"
                defaultValue={data.highlighted}
                className="input"
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    highlighted: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Subtitle
              </label>
              <input
                name="subtitle"
                defaultValue={data.subtitle}
                className="input"
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    subtitle: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={data.description}
                rows={3}
                className="input"
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Background Image URL
              </label>
              <input
                name="backgroundUrl"
                defaultValue={data.backgroundUrl}
                className="input"
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    backgroundUrl: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Side Image URL
              </label>
              <input
                name="imageUrl"
                defaultValue={data.imageUrl}
                className="input"
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    imageUrl: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Layout
              </label>
              <select
                name="layout"
                defaultValue={data.layout}
                className="input"
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    layout: e.target.value,
                  })
                }
              >
                <option value="LEFT">Left</option>
                <option value="CENTER">Center</option>
                <option value="RIGHT">Right</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Font Size
              </label>
              <select
                name="fontSize"
                defaultValue={data.fontSize}
                className="input"
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    fontSize: e.target.value,
                  })
                }
              >
                <option value="SMALL">Small</option>
                <option value="MEDIUM">Medium</option>
                <option value="LARGE">Large</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Text Color
              </label>
              <input
                type="color"
                name="textColor"
                defaultValue={data.textColor || "#ffffff"}
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    textColor: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Highlight Text Color
              </label>
              <input
                type="color"
                name="highlightColor"
                defaultValue={data.highlightColor || "#f97316"}
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    highlightColor: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Primary Button Color
              </label>
              <input
                type="color"
                name="primaryBtnColor"
                defaultValue={data.primaryBtnColor || "#f97316"}
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    primaryBtnColor: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Secondary Button Color
              </label>
              <input
                type="color"
                name="secondaryBtnColor"
                defaultValue={data.secondaryBtnColor || "#ffffff"}
                onChange={(e) =>
                  setPreview({
                    ...preview,
                    secondaryBtnColor: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Order
              </label>
              <input
                type="number"
                name="order"
                defaultValue={data.order}
                className="input"
              />
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isActive"
                defaultChecked={data.isActive}
              />
              <span className="text-sm font-semibold">
                Active
              </span>
            </label>

            <button className="bg-orange-500 text-white px-6 py-3 rounded">
              Update Slide
            </button>
          </form>
        </div>

        {/* RIGHT — LIVE PREVIEW */}
        <div className="sticky top-10">
          <h3 className="text-lg font-semibold mb-4">
            Live Preview
          </h3>

          {preview && <HeroPreview data={preview} />}
        </div>
      </div>
    </div>
  );
}