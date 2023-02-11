import Costs from './components/Costs.js'

function App() {
  const costs = [
    {
      date: new Date(2023, 2, 13),
      title: "Fridge",
      price: 231,
    },
    {
      date: new Date(2023, 1, 13),
      title: "milk",
      price: 2,
    },
    {
      date: new Date(2022, 7, 3),
      title: "Kitchen",
      price: 2310,
    }
  ]

  return (
    <div>
      <h1>React!</h1>
      <Costs arr = {costs} />
    </div>
  );
}

export default App;
