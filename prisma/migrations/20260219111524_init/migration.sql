-- CreateEnum
CREATE TYPE "LayoutPosition" AS ENUM ('LEFT', 'CENTER', 'RIGHT');

-- CreateEnum
CREATE TYPE "FontSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateTable
CREATE TABLE "HeroSlide" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "highlighted" TEXT,
    "subtitle" TEXT,
    "description" TEXT,
    "backgroundUrl" TEXT NOT NULL,
    "imageUrl" TEXT,
    "layout" "LayoutPosition" NOT NULL DEFAULT 'LEFT',
    "fontSize" "FontSize" NOT NULL DEFAULT 'MEDIUM',
    "ctaPrimaryText" TEXT,
    "ctaPrimaryLink" TEXT,
    "ctaSecondaryText" TEXT,
    "ctaSecondaryLink" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeroSlide_pkey" PRIMARY KEY ("id")
);
