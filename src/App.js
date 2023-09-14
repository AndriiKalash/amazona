import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </main>
    </div>
  );
}

export default App;
