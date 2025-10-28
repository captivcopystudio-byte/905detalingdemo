"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder action; integrate with your backend, Formspree, or Vercel serverless later.
    console.log("Email submitted:", email);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="mx-auto max-w-lg rounded-full bg-green-50 text-green-700 px-6 py-3 text-center shadow-soft">
        Thanks! We&apos;ll reach out shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl flex items-center gap-3 bg-white rounded-full px-3 py-3 shadow-soft">
      <input
        type="email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 outline-none px-3 text-sm"
      />
      <button type="submit" className="whitespace-nowrap bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-90">
        Get Your Car Right
      </button>
    </form>
  );
}
