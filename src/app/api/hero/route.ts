export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// GET: fetch active hero slides
export async function GET() {
  try {
    const slides = await prisma.heroSlide.findMany({
  orderBy: { order: "asc" },
});

    return NextResponse.json(slides);
  } catch (error) {
    console.error("GET /api/hero error:", error);
    return NextResponse.json(
      { error: "Failed to fetch hero slides" },
      { status: 500 }
    );
  }
}


// POST: create hero slide
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const slide = await prisma.heroSlide.create({
      data: {
        title: body.title,
        highlighted: body.highlighted,
        subtitle: body.subtitle,
        description: body.description,
        backgroundUrl: body.backgroundUrl,
        imageUrl: body.imageUrl,
        layout: body.layout,
        fontSize: body.fontSize,

        textColor: body.textColor,
highlightColor: body.highlightColor,
primaryBtnColor: body.primaryBtnColor,
secondaryBtnColor: body.secondaryBtnColor,
        ctaPrimaryText: body.ctaPrimaryText,
        ctaPrimaryLink: body.ctaPrimaryLink,
        ctaSecondaryText: body.ctaSecondaryText,
        ctaSecondaryLink: body.ctaSecondaryLink,
        order: body.order,
      },
    });

    return NextResponse.json(slide);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create hero slide" },
      { status: 500 }
    );
  }
}
