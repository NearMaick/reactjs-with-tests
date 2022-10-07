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

  function removeFromList(itemList: string) {
    setTimeout(() => {
      setList((state) => {
        return state.filter((item) => item !== itemList);
      });
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
        <h1 key={item}>
          {item}
          <button
            onClick={() => {
              removeFromList(item);
            }}>
            Remover
          </button>
        </h1>
      ))}
    </div>
  );
}
