"use client";
import { useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "done" : "error");
  }

  if (status === "done")
    return <p className="rounded-lg bg-white p-6 text-lg font-medium">Thanks! We'll call you within a day to fix your free trial session.</p>;

  const field = "w-full rounded-md border border-ink/20 bg-white px-4 py-3 text-base";
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm font-medium">Player or parent name
        <input name="name" required className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">Phone number
        <input name="phone" type="tel" required pattern="[0-9+ ]{10,15}" className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">Player's age group
        <select name="age_group" className={field}>
          <option>Under 10</option><option>10 to 14</option><option>15 to 18</option><option>Adult</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm font-medium">Anything we should know? (optional)
        <textarea name="message" rows={3} className={field} />
      </label>
      <button disabled={status === "sending"} className="rounded-md bg-shuttle px-6 py-3 font-semibold text-ink hover:brightness-95 disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Book free trial"}
      </button>
      {status === "error" && <p role="alert" className="text-sm text-red-700">Could not send. Please call or WhatsApp us instead.</p>}
    </form>
  );
}
