import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// UPDATE hero slide
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const slide = await prisma.heroSlide.update({
      where: { id: params.id },
      data: {
        title: body.title,
        highlighted: body.highlighted,
        subtitle: body.subtitle,
        description: body.description,
        backgroundUrl: body.backgroundUrl,
        imageUrl: body.imageUrl,
        layout: body.layout,
        fontSize: body.fontSize,
        ctaPrimaryText: body.ctaPrimaryText,
        ctaPrimaryLink: body.ctaPrimaryLink,
        ctaSecondaryText: body.ctaSecondaryText,
        ctaSecondaryLink: body.ctaSecondaryLink,
        order: Number(body.order),
        isActive: body.isActive,
      },
    });

    return NextResponse.json(slide);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update hero slide" },
      { status: 500 }
    );
  }
}

// DELETE hero slide
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.heroSlide.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete hero slide" },
      { status: 500 }
    );
  }
}