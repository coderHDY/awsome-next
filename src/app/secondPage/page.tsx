"use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SecondPage() {
  const [items, setItems] = useState<string[]>([]);
  const router = useRouter();
  const back = () => {
    router.back();
  };
  const goLogin = () => {
    router.replace("/login");
  };

  // 加载数据
  const fetchItems = async () => {
    const res = await fetch("/api/items");
    if (!res.ok) {
      throw new Error("Failed to fetch items");
    }
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async () => {
    const res = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({ item: "Pineapple" }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setItems(data.items);
  };

  const updateItem = async () => {
    const res = await fetch("/api/items", {
      method: "PUT",
      body: JSON.stringify({ index: 0, item: "Strawberry" }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setItems(data.items);
  };

  const deleteItem = async () => {
    const res = await fetch("/api/items", {
      method: "DELETE",
      body: JSON.stringify({ index: 1 }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setItems(data.items);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Items</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            #{i}: {item}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 20 }}>
        <Button variant="contained" onClick={addItem}>
          Add Item (POST)
        </Button>
        <Button variant="contained" onClick={updateItem}>
          Update First Item (PUT)
        </Button>
        <Button variant="contained" onClick={deleteItem}>
          Delete Second Item (DELETE)
        </Button>
      </div>
      <div>
        <Button variant="contained" onClick={back}>
          Back
        </Button>
        <Button variant="contained" onClick={goLogin}>
          Login
        </Button>
      </div>
    </main>
  );
}
