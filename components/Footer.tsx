export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Starlight Auto Car Wash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}