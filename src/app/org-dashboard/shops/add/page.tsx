// src/app/org-dashboard/shops/add/page.tsx
"use client";

import { useState } from "react";

export default function AddShopPage() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    ownerId: "",
    organizationId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/shop", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("Shop created!");
    } else {
      alert("Failed to create shop");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Shop</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Shop Name" onChange={handleChange} required className="border w-full p-2" />
        <input name="slug" placeholder="Unique Slug" onChange={handleChange} required className="border w-full p-2" />
        <input name="ownerId" placeholder="Owner User ID" onChange={handleChange} required className="border w-full p-2" />
        <input name="organizationId" placeholder="Organization ID" onChange={handleChange} required className="border w-full p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Create Shop</button>
      </form>
    </div>
  );
}
