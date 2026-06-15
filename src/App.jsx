// src/App.jsx
import Hero from "./components/Hero";
import PoemList from "./components/PoemList";
import Footer from "./components/Footer";
import { poems } from "./data/poems";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <PoemList poems={poems} />
      <Footer />
    </div>
  );
}
