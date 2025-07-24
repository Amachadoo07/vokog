'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createShop(formData: FormData) {
  const name = formData.get("name") as string;
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  await prisma.shop.create({
    data: {
      name,
      slug,
      organizationId: "org_123", // Replace with actual org ID
      ownerId: "user_123",        // Replace with actual user ID
    },
  });

  revalidatePath("/org-dashboard/shops");
}
