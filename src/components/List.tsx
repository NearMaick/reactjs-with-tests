import { useState } from "react";

interface ListProps {
  initialItems: string[];
}

export function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  return (
    <div>
      <input
        placeholder='Novo item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      {list.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}
