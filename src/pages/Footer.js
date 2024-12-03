export default function Footer({ logo }) {
  return (
    <footer className="bg-cover bg-center py-4 relative mt-6 bg-gray-800 text-white w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-medium ">
          © {new Date().getFullYear()} Maniscale Marmi. Tutti i diritti riservati | Made by <a href="https://belicedigital.com" target="_blank">BeliceDigital</a>
        </p>
      </div>
    </footer >
  );
}
