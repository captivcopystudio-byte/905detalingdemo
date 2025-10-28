"use client";

import { useEffect, useState } from "react";

function pad(n: number) { return n.toString().padStart(2, "0"); }

export default function Countdown({ to }: { to: string }) {
  const [time, setTime] = useState<{d:number,h:number,m:number,s:number}>({
    d: 64, h: 8, m: 56, s: 16
  });

  useEffect(() => {
    const target = new Date(to).getTime();
    const t = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTime({ d, h, m, s });
    }, 1000);
    return () => clearInterval(t);
  }, [to]);

  const Stat = ({label, value}:{label:string, value:number}) => (
    <div className="bg-white rounded-2xl px-10 py-6 text-center shadow-soft">
      <div className="text-3xl font-bold tracking-tight">{pad(value)}</div>
      <div className="text-[11px] uppercase tracking-widest text-gray-500 mt-1">{label}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto mt-10">
      <Stat label="Days" value={time.d} />
      <Stat label="Hours" value={time.h} />
      <Stat label="Minutes" value={time.m} />
      <Stat label="Seconds" value={time.s} />
    </div>
  );
}
