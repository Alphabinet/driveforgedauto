"use client";

import { useState, type FormEvent } from "react";

import { serviceOptions } from "@/data/services";
import { submitEnquiry, type Enquiry } from "@/lib/submit-enquiry";

type Errors = Partial<Record<"name" | "phone" | "service" | "date", string>>;

type Status = "idle" | "sending" | "sent" | "not-configured" | "failed";

const field =
  "min-h-12 w-full rounded border border-muted bg-white px-3 py-2 text-ink";

function validate(d: Omit<Enquiry, "time">): Errors {
  const e: Errors = {};

  if (d.name.trim().length < 2) {
    e.name = "Enter your name.";
  }

  if (!/^(\\+?91)?[6-9]\d{9}$/.test(d.phone.replace(/[\s-]/g, ""))) {
    e.phone = "Enter a valid 10-digit mobile number.";
  }

  if (!d.service) {
    e.service = "Choose a service.";
  }

  if (!d.date) {
    e.date = "Choose a preferred date.";
  } else if (new Date(d.date + "T23:59:59") < new Date()) {
    e.date = "Choose today or a later date.";
  }

  return e;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1 block font-semibold">
        {label}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-err`}
          className="mt-1 text-sm font-medium text-brand-dark"
        >
          Error: {error}
        </p>
      )}
    </div>
  );
}

export function BookingForm({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const initial = (serviceOptions as readonly string[]).includes(
    defaultService
  )
    ? defaultService
    : "";

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const form = ev.currentTarget;
    const f = new FormData(form);

    const get = (key: string) => String(f.get(key) ?? "");

    const data = {
      name: get("name"),
      phone: get("phone"),
      service: get("service"),
      date: get("date"),
      time: "",
      message: get("message"),
    };

    // Validate form
    const errs = validate(data);

    setErrors(errs);

    const first = Object.keys(errs)[0];

    if (first) {
      form
        .querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();

      return;
    }

    setStatus("sending");

    /*
     * WhatsApp number
     * 7830712414
     * India country code = 91
     */
    const whatsappNumber = "917830712414";

    /*
     * Format complete booking information
     * for WhatsApp.
     */
    const message = `*NEW APPOINTMENT REQUEST*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Service Required:* ${data.service}
*Preferred Date:* ${data.date}${
      data.message
        ? `\n*Message:* ${data.message}`
        : ""
    }

*Please contact the customer to confirm the appointment.*`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    try {
      /*
       * Keep the existing backend/email submission.
       */
      const res = await submitEnquiry(data);

      setStatus(res.ok ? "sent" : res.reason);

      /*
       * Open WhatsApp with the complete formatted
       * appointment information.
       */
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Appointment submission failed:", error);

      /*
       * Even if the backend fails, still allow the
       * customer to send the appointment through WhatsApp.
       */
      setStatus("failed");

      window.open(whatsappUrl, "_blank");
    }
  }

  const a11y = (key: keyof Errors) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key]
      ? `${key}-err`
      : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Name */}
      <Field
        id="name"
        label="Name"
        error={errors.name}
      >
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={field}
          {...a11y("name")}
        />
      </Field>

      {/* Phone */}
      <Field
        id="phone"
        label="Phone"
        error={errors.phone}
      >
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className={field}
          {...a11y("phone")}
        />
      </Field>

      {/* Service */}
      <Field
        id="service"
        label="Service required"
        error={errors.service}
      >
        <select
          id="service"
          name="service"
          defaultValue={initial}
          className={field}
          {...a11y("service")}
        >
          <option value="">Select a service</option>

          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </Field>

      {/* Preferred Date */}
      <Field
        id="date"
        label="Preferred date"
        error={errors.date}
      >
        <input
          id="date"
          name="date"
          type="date"
          className={field}
          {...a11y("date")}
        />
      </Field>

      {/* Message */}
      <Field
        id="message"
        label="Message (optional)"
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
        />
      </Field>

      {/* WhatsApp Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 w-full rounded border-2 border-brand bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending"
          ? "Redirecting to WhatsApp..."
          : "Request Appointment via WhatsApp"}
      </button>

      {/* Status */}
      <div
        role="status"
        aria-live="polite"
        className="mt-4"
      >
        {status === "sent" && (
          <p className="rounded border border-line bg-surface p-4">
            Thanks! Redirecting you to WhatsApp to confirm your
            booking.
          </p>
        )}

        {(status === "not-configured" ||
          status === "failed") && (
          <p className="rounded border border-line bg-surface p-4">
            Redirecting you to WhatsApp to complete your
            appointment request.
          </p>
        )}
      </div>
    </form>
  );
}