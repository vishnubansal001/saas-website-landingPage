import { Hero, NavBar, Products, Sayings } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-10 bg-black">
        <Hero />
        <Products />
        <Sayings />
      </main>
    </>
  );
}

export default App;
