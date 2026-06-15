// src/components/MoonPhase.jsx
//
// A small decorative "moon" built purely with CSS (two overlapping
// circles). The `phase` prop (0-6) shifts the shadow circle so the
// moon reads as new -> crescent -> ... -> full across the poems,
// echoing the moon/cycle imagery that runs through the collection.

const PHASE_COUNT = 7;

export default function MoonPhase({ phase = 0, size = "md" }) {
  const clamped = ((phase % PHASE_COUNT) + PHASE_COUNT) % PHASE_COUNT;
  // 0 -> 0% (new moon, fully shadowed) ... 6 -> -120% (full moon, no shadow)
  const shadowShift = clamped * -20;

  return (
    <div
      className={`moon-phase moon-phase--${size}`}
      role="img"
      aria-label={`Moon phase ${clamped + 1} of ${PHASE_COUNT}`}
    >
      <span
        className="moon-phase__shadow"
        style={{ transform: `translateX(${shadowShift}%)` }}
      />
    </div>
  );
}
