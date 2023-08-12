import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Sayings from "./components/Sayings";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-10 bg-black">
        <Hero />
        <Sayings />
      </main>
    </>
  );
}

export default App;
