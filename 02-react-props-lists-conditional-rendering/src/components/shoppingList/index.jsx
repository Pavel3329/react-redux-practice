function ShoppingList({ items }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>Список покупок пуст</p>
      ) : (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <h3>Name: {item.name}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default ShoppingList;
