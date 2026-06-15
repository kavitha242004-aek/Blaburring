// src/components/Footer.jsx
import MoonPhase from "./MoonPhase";

export default function Footer() {
  return (
    <footer className="footer">
      <MoonPhase phase={6} size="sm" />
      <p className="footer__text">Thank you for reading.</p>
      <p className="footer__signature">~ Kavitha Arumugam</p>
    </footer>
  );
}
