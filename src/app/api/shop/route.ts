// src/app/api/shop/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, slug, ownerId, organizationId } = await req.json();

    const shop = await prisma.shop.create({
      data: {
        name,
        slug,
        ownerId,
        organizationId,
      },
    });

    return NextResponse.json(shop);
  } catch (error) {
    console.error("Error creating shop:", error);
    return new NextResponse("Failed to create shop", { status: 500 });
  }
}
