interface ListProps {
  initialItems: string[];
}

export function List({ initialItems }: ListProps) {
  return (
    <div>
      {initialItems.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}
