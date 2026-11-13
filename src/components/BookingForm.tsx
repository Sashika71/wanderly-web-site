
import { useState } from "react";
import type { FormEvent } from "react";
import {
  CalendarDays,
  Users,
  CheckCircle2,
  Minus,
  Plus,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

interface BookingFormProps {
  destinationName: string;
  price: number;
}

interface FormErrors {
  name?: string;
  email?: string;
  travelDate?: string;
  travelers?: string;
}

function BookingForm({ destinationName, price }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const totalPrice = price * travelers;
  const today = new Date().toLocaleDateString("en-CA");

  // Validate all form fields
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Name validation
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = "Full name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    } else if (!/^[\p{L}][\p{L}\s'-]*$/u.test(trimmedName)) {
      newErrors.name = "Please enter a valid name using letters only.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailPattern.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Travel date validation
    if (!travelDate) {
      newErrors.travelDate = "Please select your travel date.";
    } else if (travelDate < today) {
      newErrors.travelDate = "Travel date cannot be in the past.";
    }

    // Travelers validation
    if (travelers < 1 || travelers > 6) {
      newErrors.travelers = "Select between 1 and 6 travelers.";
    }

    return newErrors;
  };

  // Validate when submitting
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      travelDate: true,
      travelers: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitted(true);
  };

  // Reset booking form
  const resetBooking = () => {
    setName("");
    setEmail("");
    setTravelDate("");
    setTravelers(1);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  // Update an individual field and its validation
  const handleFieldChange = (
    field: keyof FormErrors,
    value: string
  ) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "travelDate") setTravelDate(value);

    if (touched[field]) {
      const updatedErrors = { ...errors };

      if (field === "name") {
        const trimmed = value.trim();

        if (!trimmed) {
          updatedErrors.name = "Full name is required.";
        } else if (trimmed.length < 2) {
          updatedErrors.name = "Name must contain at least 2 characters.";
        } else if (!/^[\p{L}][\p{L}\s'-]*$/u.test(trimmed)) {
          updatedErrors.name = "Please enter a valid name using letters only.";
        } else {
          delete updatedErrors.name;
        }
      }

      if (field === "email") {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (!value.trim()) {
          updatedErrors.email = "Email address is required.";
        } else if (!pattern.test(value.trim())) {
          updatedErrors.email = "Please enter a valid email address.";
        } else {
          delete updatedErrors.email;
        }
      }

      if (field === "travelDate") {
        if (!value) {
          updatedErrors.travelDate = "Please select your travel date.";
        } else if (value < today) {
          updatedErrors.travelDate = "Travel date cannot be in the past.";
        } else {
          delete updatedErrors.travelDate;
        }
      }

      setErrors(updatedErrors);
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((previous) => ({ ...previous, [field]: true }));

    const validationErrors = validateForm();

    if (field === "name" && validationErrors.name) {
      setErrors((previous) => ({ ...previous, name: validationErrors.name }));
    }

    if (field === "email" && validationErrors.email) {
      setErrors((previous) => ({ ...previous, email: validationErrors.email }));
    }

    if (field === "travelDate" && validationErrors.travelDate) {
      setErrors((previous) => ({
        ...previous,
        travelDate: validationErrors.travelDate,
      }));
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
      hasError
        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
    }`;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50">

      {/* Price Header */}
      <div className="bg-primary p-5 text-white sm:p-6">
        <p className="text-sm text-white/75">Starting from</p>
        <div className="mt-1 flex items-end gap-2">
          <span className="text-3xl font-extrabold sm:text-4xl">
            ${price.toLocaleString()}
          </span>
          <span className="mb-1 text-sm text-white/75">/ person</span>
        </div>
        <p className="mt-2 text-sm text-white/75">
          {destinationName} · Flexible travel dates
        </p>
      </div>

      <div className="p-5 sm:p-7">

        {submitted ? (
          <div className="py-3 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
              <CheckCircle2 size={34} className="text-primary" />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-dark">
              Booking Request Received!
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Thank you, {name}. Here is your booking summary.
            </p>

            <div className="mt-7 space-y-4 rounded-xl bg-[#F5F8F7] p-5 text-left">

              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="text-gray-500">Destination</span>
                <span className="font-semibold text-dark">{destinationName}</span>
              </div>

              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="text-gray-500">Travel date</span>
                <span className="font-semibold text-dark">{travelDate}</span>
              </div>

              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="text-gray-500">Travelers</span>
                <span className="font-semibold text-dark">{travelers}</span>
              </div>

              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="text-gray-500">Email</span>
                <span className="break-all text-right font-semibold text-dark">{email}</span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold text-dark">Estimated Total</span>
                  <span className="text-xl font-extrabold text-primary">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-400">
              Demo booking only. No actual reservation or payment has been made.
            </p>

            <button
              type="button"
              onClick={resetBooking}
              className="mt-6 w-full rounded-full border border-primary px-5 py-3 font-semibold text-primary transition hover:bg-teal-50"
            >
              Make Another Booking
            </button>

          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-dark">
              Book Your Trip
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill in your details to plan your journey.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-dark">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  className={inputClass(Boolean(errors.name))}
                />

                {errors.name && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-dark">
                  Email Address
                </label>

                <input
                  type="text"
                  inputMode="email"
                  value={email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="example@email.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  className={inputClass(Boolean(errors.email))}
                />

                {errors.email && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Travel Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-dark">
                  Travel Date
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="date"
                    min={today}
                    value={travelDate}
                    onChange={(e) => handleFieldChange("travelDate", e.target.value)}
                    onBlur={() => handleBlur("travelDate")}
                    aria-invalid={Boolean(errors.travelDate)}
                    className={`${inputClass(Boolean(errors.travelDate))} pl-11`}
                  />
                </div>

                {errors.travelDate && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <AlertCircle size={14} />
                    {errors.travelDate}
                  </p>
                )}
              </div>

              {/* Travelers */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-dark">
                  Number of Travelers
                </label>

                <div className={`flex items-center justify-between rounded-xl border p-3 ${
                  errors.travelers ? "border-red-400 bg-red-50" : "border-gray-200"
                }`}>

                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-dark">Travelers</p>
                      <p className="text-xs text-gray-400">Select 1–6 people</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={travelers <= 1}
                      onClick={() => {
                        setTravelers((count) => Math.max(1, count - 1));
                        setErrors((previous) => ({ ...previous, travelers: undefined }));
                      }}
                      aria-label="Decrease travelers"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-dark transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="w-4 text-center font-bold text-dark">
                      {travelers}
                    </span>

                    <button
                      type="button"
                      disabled={travelers >= 6}
                      onClick={() => {
                        setTravelers((count) => Math.min(6, count + 1));
                        setErrors((previous) => ({ ...previous, travelers: undefined }));
                      }}
                      aria-label="Increase travelers"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-dark transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {errors.travelers && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <AlertCircle size={14} />
                    {errors.travelers}
                  </p>
                )}
              </div>

              {/* Price Summary */}
              <div className="rounded-xl bg-[#F5F8F7] p-5">
                <p className="mb-4 font-semibold text-dark">
                  Price Summary
                </p>

                <div className="flex flex-wrap justify-between gap-2 text-sm text-gray-500">
                  <span>${price.toLocaleString()} × {travelers} travelers</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>

                <div className="my-4 border-t border-gray-200" />

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-dark">Total Price</span>
                  <span className="text-2xl font-extrabold text-primary">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800"
              >
                Confirm Booking Request
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={15} />
                Demo booking · No payment required
              </div>

            </form>
          </>
        )}

      </div>
    </div>
  );
}

export default BookingForm;
