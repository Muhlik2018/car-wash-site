'use client';

import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

type Service = {
  title: string;
  description: string;
  details: string;
  icon: string;
  price: string;
};

const buttonStyles = {
  primary: "bg-emerald-600 text-white hover:bg-emerald-700",
  secondary: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
};

function ActionButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof buttonStyles }) {
  return (
    <button
      className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-gray-50 p-6 border border-gray-200">
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <p className="mt-3 text-sm leading-6 text-gray-600">{value}</p>
    </div>
  );
}

function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: (service: Service) => void;
}) {
  return (
    <article
      className="group rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-emerald-400/50 hover:bg-gray-50 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer"
      onClick={() => onOpen(service)}
      tabIndex={0}
      role="button"
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onOpen(service);
        }
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-2xl transition group-hover:bg-emerald-100">
        {service.icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-600">{service.description}</p>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">{service.price}</p>
      <ActionButton
        type="button"
        className="mt-6"
        onClick={(event) => {
          event.stopPropagation();
          onOpen(service);
        }}
      >
        Book this service
      </ActionButton>
    </article>
  );
}

export default function Home() {
  const services = [
    {
      title: "Exterior Wash",
      description: "Complete exterior cleaning with premium soap, wheel detailing, and protective wax for a showroom shine.",
      details:
        "Our Exterior Wash includes foam pre-wash, hand rinse, wheel cleaning, tire shine, high-quality soap application, and a finishing wax sealant for lasting protection and shine.",
      icon: "🧽",
      price: "$49",
    },
    {
      title: "Premium Wash",
      description: "Comprehensive exterior and interior cleaning with advanced detailing techniques for superior results.",
      details:
        "Premium Wash combines exterior cleaning with interior vacuuming, dashboard polish, window cleaning, leather conditioning, and odor elimination for a complete vehicle refresh.",
      icon: "🧼",
      price: "$129",
    },
    {
      title: "Express Detail",
      description: "Full professional detailing service with ceramic coating, paint correction, and complete interior restoration.",
      details:
        "Express Detail provides full exterior correction, clay bar treatment, ceramic coating application, complete interior deep clean, trim restoration, engine bay detailing, and finishing touches for a showroom-quality result.",
      icon: "🚿",
      price: "$259",
    },
  ];

  const [activeService, setActiveService] = useState<typeof services[number] | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <NavBar />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:px-16">
        <section className="rounded-3xl bg-gray-50 p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-200 backdrop-blur-sm sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 ring-1 ring-emerald-300/30">
                Premium car wash services
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Sparkling clean cars, every time.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
                Fast exterior washes, full detailing, and reliable maintenance packages designed for busy drivers who want a spotless ride without the hassle.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#booking">
                  <ActionButton className="sm:w-auto">
                    Book a wash
                  </ActionButton>
                </a>
                <a href="#services">
                  <ActionButton variant="secondary" className="sm:w-auto">
                    View services
                  </ActionButton>
                </a>
              </div>
            </div>
            <div className="space-y-4 rounded-[2rem] bg-gray-50 p-8 ring-1 ring-gray-200 border border-gray-200">
              <div className="rounded-3xl bg-white p-6 text-center border border-gray-200">
                <p className="text-sm uppercase tracking-[0.24em] text-gray-500">Quick facts</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <InfoCard label="Years serving" value="12+" />
                  <InfoCard label="Satisfied customers" value="3.8k" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                  <p className="text-3xl">🚗</p>
                  <p className="mt-3 text-sm text-gray-600">Express exterior wash with premium soap and sealant.</p>
                </div>
                <div className="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                  <p className="text-3xl">✨</p>
                  <p className="mt-3 text-sm text-gray-600">Interior vacuum, leather care, and window polish.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-8">
          <div className="space-y-3 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">What we offer</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Services built for every driver.</h2>
            <p className="max-w-3xl text-base leading-7 text-gray-600">
              From quick maintenance washes to full detail packages, our team uses safe products and proven techniques to keep your vehicle looking its best.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} onOpen={setActiveService} />
            ))}
          </div>
        </section>

        {activeService ? (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 px-4 py-8 backdrop-blur-sm sm:items-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-900/20 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Service details</p>
                  <h2 className="mt-3 text-3xl font-semibold text-gray-900">{activeService.title}</h2>
                </div>
                <button
                  className="inline-flex h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                  onClick={() => setActiveService(null)}
                >
                  Close
                </button>
              </div>
              <div className="mt-6 space-y-5">
                <p className="text-base leading-7 text-gray-600">{activeService.details}</p>
                <div className="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-gray-500">Starting price</p>
                  <p className="mt-2 text-2xl font-semibold text-emerald-600">{activeService.price}</p>
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Link href="/booking">
                    <ActionButton
                      type="button"
                      className="sm:w-auto"
                    >
                      Book this service
                    </ActionButton>
                  </Link>
                  <ActionButton
                    type="button"
                    variant="secondary"
                    className="sm:w-auto"
                    onClick={() => setActiveService(null)}
                  >
                    Close
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        ) : null}



        <section className="rounded-3xl bg-gray-50 p-10 ring-1 ring-gray-200 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Why choose us</p>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Reliable care for your vehicle and schedule.</h2>
              <p className="max-w-xl text-base leading-7 text-gray-600">
                We combine fast service with premium products, so your car leaves cleaner, shinier, and better protected than before. No waiting, no guesswork, just dependable service whenever you need it.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Flexible booking", detail: "Online reservations and walk-in availability for busy schedules." },
                { title: "Eco-friendly wash", detail: "Water-saving systems and biodegradable cleaning solutions." },
                { title: "Expert staff", detail: "Trained detailers who treat every car with care." },
                { title: "Satisfaction guarantee", detail: "We fix any missed spots before you leave." },
              ].map((item) => (
                <InfoCard key={item.title} label={item.title} value={item.detail} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
          <div className="rounded-3xl bg-gray-50 p-10 ring-1 ring-gray-200">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">What customers say</p>
              <h2 className="text-3xl font-semibold text-gray-900">Trusted by local drivers.</h2>
              <p className="max-w-2xl text-base leading-7 text-gray-600">
                We deliver a consistently high-quality experience, from the first wash to the final detail.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {[
                {
                  quote: "My car has never looked better. Fast, friendly, and the shine lasts for weeks.",
                  name: "Alex M.",
                },
                {
                  quote: "Great value for a full detail. The staff really cares about the results.",
                  name: "Sofia R.",
                },
              ].map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-3xl bg-white p-6 text-gray-700 border border-gray-200 shadow-sm">
                  <p className="text-base leading-7">"{testimonial.quote}"</p>
                  <footer className="mt-4 text-sm font-semibold text-gray-900">{testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div id="booking" className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50 p-10 ring-1 ring-gray-200 border border-gray-200">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Ready to ride cleaner</p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-900">Reserve your next wash.</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Choose a package, select a time, and get back on the road with a freshly cleaned car in under 30 minutes.
            </p>
            <div className="mt-8 space-y-6">
              {[
                { label: "Location", value: "PO Box 798, 414 Albany Hwy, Victoria Park" },
                { label: "Hours", value: "All day" },
                { label: "Contact", value: "starlightautocarwash@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-gray-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
            <Link href="/booking">
              <ActionButton
                type="button"
                variant="primary"
                className="mt-8"
              >
                Book now
              </ActionButton>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
