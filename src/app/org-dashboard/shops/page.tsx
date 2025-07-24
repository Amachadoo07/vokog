// app/org-dashboard/shops/page.tsx
import { prisma } from "@/lib/db";

export default async function OrgShopsPage() {
  const shops = await prisma.shop.findMany({
    where: {
      organizationId: "org_123", // replace with real org ID from session
    },
    include: {
      owner: true,
    },
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Shops</h1>
      <div className="space-y-4">
        {shops.map((shop) => (
          <div key={shop.id} className="p-4 border rounded">
            <h2 className="text-lg font-semibold">{shop.name}</h2>
            <p>Owner: {shop.owner.name || shop.owner.email}</p>
            <p>Status: {shop.isApproved ? "✅ Approved" : "❌ Not Approved"}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
