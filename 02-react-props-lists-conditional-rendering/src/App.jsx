import Greeting from "./components/greeting/index.jsx";
import ShoppingList from "./components/shoppingList/index.jsx";

function App() {
  const items = [
    { id: 1, name: "bread" },
    { id: 2, name: "milk" },
    { id: 3, name: "apples" },
    { id: 4, name: "vegetables" },
    { id: 5, name: "fruits" },
  ];

  return (
    <div>
      <Greeting name="Pavel" />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

// <Greeting name="Pavel" /> prop name
