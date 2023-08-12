import { Best, Hero, NavBar, Popular, Products, Sayings } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-10 bg-black">
        <Hero />
        <Products />
        <Sayings />
        <Popular />
        <Best />
      </main>
    </>
  );
}

export default App;
