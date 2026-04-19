import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/companylogo.png"
                alt="AquaShine Car Wash"
                width={160}
                height={160}
                className="rounded-lg"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/booking"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Booking
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}