import { useEffect, useState } from "react";
import { getAllItems } from "../api/items.api";
import { ItemCard } from "./ItemCard";

export function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const res = await getAllItems();
      setItems(res.data);
      printItems(res.data, 0);
    }
    loadItems();
  }, []);

  // Función recursiva para imprimir los elementos jerárquicamente en consola
  function printItems(items, parentId, level = 0) {
    const filteredItems = items.filter((item) => item.id_padre === parentId);
    filteredItems.forEach((item) => {
      console.log("\t".repeat(level) + item.nombre);
      printItems(items, item.id, level + 1);
    });
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
