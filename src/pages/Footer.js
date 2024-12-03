export default function Footer({ logo }) {
  return (
    <footer className="bg-cover bg-center py-12 relative mt-6 bg-black text-white w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6">
        <img src="logo.svg" alt="Maniscale Marmi" className="logo" />
        <p>
          © {new Date().getFullYear()} Maniscale Marmi. Tutti i diritti riservati | Made by <a href="https://belicedigital.com" target="_blank">BeliceDigital</a>
        </p>
      </div>
    </footer >
  );
}
