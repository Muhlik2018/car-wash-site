'use client';

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function GalleryPage() {
  // Placeholder data for gallery images
  const galleryImages = [
    { id: 1, title: "Before & After Detail", description: "Complete exterior restoration" },
    { id: 2, title: "Interior Deep Clean", description: "Leather conditioning and vacuum" },
    { id: 3, title: "Wheel & Tire Shine", description: "Premium tire dressing application" },
    { id: 4, title: "Ceramic Coating", description: "Long-lasting protection finish" },
    { id: 5, title: "Engine Bay Clean", description: "Detailed engine compartment" },
    { id: 6, title: "Headlight Restoration", description: "Crystal clear headlight lenses" },
    { id: 7, title: "Paint Correction", description: "Swirl mark removal and polishing" },
    { id: 8, title: "Full Service Package", description: "Complete vehicle transformation" },
    { id: 9, title: "Quick Wash", description: "Express exterior cleaning" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <NavBar />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:px-16">
        <section className="rounded-3xl bg-gray-50 p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-200 backdrop-blur-sm sm:p-14">
          <div className="space-y-6 text-center">
            <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 ring-1 ring-emerald-300/30">
              Our Work
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Gallery of Excellence
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-600 sm:text-xl">
              See the transformation our professional detailing services can achieve. From quick washes to full restorations, we deliver showroom-quality results every time.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group rounded-3xl bg-white p-6 transition hover:bg-gray-50 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer border border-gray-200"
              >
                <div className="aspect-square rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 group-hover:border-emerald-400/50 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm text-gray-500">Image Placeholder</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gray-50 p-10 ring-1 ring-gray-200 sm:p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Ready to See Your Car Here?</h2>
            <p className="max-w-2xl mx-auto text-base leading-7 text-gray-600">
              Join our satisfied customers and experience the AquaShine difference. Book your service today and see the transformation for yourself.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/booking"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
              >
                Book Your Service
              </a>
              <a
                href="/"
                className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}