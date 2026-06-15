// src/components/Hero.jsx

export default function Hero() {
  return (
    <header className="hero">
      <span className="hero__orb hero__orb--one" aria-hidden="true" />
      <span className="hero__orb hero__orb--two" aria-hidden="true" />

      <p className="hero__eyebrow">a poetry journal</p>
      <h1 className="hero__title">Blaburring</h1>
      <p className="hero__tagline">verses that blur into feeling</p>
      <p className="hero__byline">by Kavitha Arumugam</p>

      <a className="hero__scroll" href="#poems" aria-label="Scroll to poems">
        <span className="hero__scroll-dot" aria-hidden="true" />
      </a>
    </header>
  );
}
