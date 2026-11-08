import Greeting from "./components/greeting/index.jsx";
import ShoppingList from "./components/shoppingList/index.jsx";
import OrderStatus from "./components/orderStatus/index.jsx";

function App() {
  const items = [
    { id: 1, name: "bread" },
    { id: 2, name: "milk" },
    { id: 3, name: "apples" },
    { id: 4, name: "vegetables" },
    { id: 5, name: "fruits" },
  ];

  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 124, status: "обработан" },
    { orderId: 125, status: "доставлен" },
  ];

  return (
    <div>
      <Greeting name="Pavel" />
      <ShoppingList items={items} />

      <h2>Статусы заказов</h2>

      {orders.map((order) => (
        <OrderStatus key={order.orderId} {...order} />
      ))}
    </div>
  );
}

export default App;

// <Greeting name="Pavel" /> prop name
