'use client';

import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

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

function TextInput({ label, placeholder, type = "text", name, required }: { label: string; placeholder: string; type?: string; name?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
      />
    </div>
  );
}

function SelectInput({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string; price?: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.5rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em 1.5em',
          paddingRight: '2.5rem'
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}{option.price ? ` - ${option.price}` : ''}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function BookingPage() {
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

  const [selectedServiceValue, setSelectedServiceValue] = useState<string>(services[0].title);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const serviceOptions = services.map((service) => ({
    value: service.title,
    label: service.title,
    price: service.price,
  }));

  const selectedService = services.find((service) => service.title === selectedServiceValue) || null;

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(event.currentTarget);
    const bookingData = {
      name: formData.get('name'),
      phoneOrEmail: formData.get('phoneOrEmail'),
      address: formData.get('address'),
      preferredTime: formData.get('preferredTime'),
      service: selectedServiceValue,
      price: selectedService?.price,
    };

    try {
      const response = await fetch('https://www.scutbl.top:3001/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('✅ ' + result.message);
        // Reset form
        setSelectedServiceValue(services[0].title);
      } else {
        setSubmitMessage('❌ ' + result.error);
      }
    } catch (error) {
      setSubmitMessage('❌ Failed to submit booking. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <NavBar />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:px-16">
        <section className="rounded-3xl bg-gray-50 p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-200 backdrop-blur-sm sm:p-14">
          <div className="space-y-6 text-center">
            <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 ring-1 ring-emerald-300/30">
              Book your service
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Reserve your next wash
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-600 sm:text-xl">
              Choose a package, select a time, and get back on the road with a freshly cleaned car at your doorstep.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-gray-50 p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-200 backdrop-blur-sm sm:p-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Service selection</p>
                <h2 className="mt-3 text-2xl font-semibold text-gray-900">Choose your package</h2>
              </div>
              <SelectInput
                label="Service"
                options={serviceOptions}
                value={selectedServiceValue}
                onChange={setSelectedServiceValue}
              />
              {selectedService && (
                <div className="rounded-3xl bg-white p-5 border border-gray-200">
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Service details</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{selectedService.details}</p>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Booking details</p>
                <h2 className="mt-3 text-2xl font-semibold text-gray-900">Your information</h2>
              </div>
              <form id="booking-form" className="space-y-4" onSubmit={handleSubmit}>
                <TextInput label="Name" placeholder="Your full name" name="name" required />
                <TextInput label="Phone or email" placeholder="0424000124 or email@example.com" name="phoneOrEmail" required />
                <TextInput label="Address" placeholder="Your address" name="address" required />
                <TextInput label="Preferred time" placeholder="dd/mm/yyyy" name="preferredTime" required />
              </form>
            </div>
          </div>
          {selectedService && (
            <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 p-8 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700 mb-2">Total Price</p>
              <p className="text-4xl font-bold text-emerald-600">{selectedService.price}</p>
            </div>
          )}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <ActionButton
              type="submit"
              variant="primary"
              className="sm:w-auto"
              disabled={isSubmitting}
              form="booking-form"
            >
              {isSubmitting ? 'Submitting...' : 'Confirm booking'}
            </ActionButton>
            <Link href="/">
              <ActionButton
                type="button"
                variant="secondary"
                className="sm:w-auto"
              >
                Back to home
              </ActionButton>
            </Link>
          </div>
          {submitMessage && (
            <div className={`mt-4 p-4 rounded-lg text-center ${
              submitMessage.includes('✅')
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitMessage}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
