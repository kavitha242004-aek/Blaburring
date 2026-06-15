// src/components/PoemList.jsx
import PoemCard from "./PoemCard";

export default function PoemList({ poems }) {
  return (
    <main className="poem-list" id="poems" aria-label="Poems">
      {poems.map((poem, index) => (
        <PoemCard key={poem.id} poem={poem} index={index} />
      ))}
    </main>
  );
}
