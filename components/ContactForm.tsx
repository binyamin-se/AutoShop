"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  car: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  car: "",
  service: "",
  message: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formState.name || !formState.phone || !formState.service) {
      setError("Please complete name, phone, and service needed.");
      return;
    }
    setError("");
    setSubmitted(true);
    setFormState(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-midGray/20 bg-white p-6 shadow-card">
      <h2 className="font-heading text-2xl font-bold text-charcoal">Request Service or Estimate</h2>
      <p className="text-sm text-midGray">
        Upload photos for a faster estimate (optional). UI only in this demo.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-midGray">
          Name *
          <input
            aria-label="Name"
            className="mt-1 w-full rounded-lg border border-midGray/30 bg-lightGray px-3 py-2"
            value={formState.name}
            onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
          />
        </label>
        <label className="text-sm font-medium text-midGray">
          Phone *
          <input
            aria-label="Phone number"
            className="mt-1 w-full rounded-lg border border-midGray/30 bg-lightGray px-3 py-2"
            value={formState.phone}
            onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
          />
        </label>
        <label className="text-sm font-medium text-midGray">
          Email
          <input
            type="email"
            aria-label="Email"
            className="mt-1 w-full rounded-lg border border-midGray/30 bg-lightGray px-3 py-2"
            value={formState.email}
            onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
          />
        </label>
        <label className="text-sm font-medium text-midGray">
          Car Make/Model
          <input
            aria-label="Car make and model"
            className="mt-1 w-full rounded-lg border border-midGray/30 bg-lightGray px-3 py-2"
            value={formState.car}
            onChange={(e) => setFormState((s) => ({ ...s, car: e.target.value }))}
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-midGray">
        Service Needed *
        <input
          aria-label="Service needed"
          className="mt-1 w-full rounded-lg border border-midGray/30 bg-lightGray px-3 py-2"
          value={formState.service}
          onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
        />
      </label>
      <label className="block text-sm font-medium text-midGray">
        Message
        <textarea
          aria-label="Message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-midGray/30 bg-lightGray px-3 py-2"
          value={formState.message}
          onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
        />
      </label>
      <label className="block text-sm font-medium text-midGray">
        Photo Upload (optional)
        <input
          type="file"
          aria-label="Upload photos"
          multiple
          className="mt-1 block w-full rounded-lg border border-dashed border-midGray/40 px-3 py-2 text-sm"
        />
      </label>
      {error ? <p className="text-sm font-semibold text-red-700">{error}</p> : null}
      {submitted ? (
        <p className="text-sm font-semibold text-green-700">
          Request submitted locally. This demo does not send email yet.
        </p>
      ) : null}
      <button
        type="submit"
        className="rounded-full bg-autoRed px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
      >
        Send Request
      </button>
    </form>
  );
}

