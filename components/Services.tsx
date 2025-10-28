export default function Services() {
  const items = [
    {
      title: "Exterior Wash",
      desc: "Hand wash, foam bath, wheels & tires dressed, streak-free glass.",
    },
    {
      title: "Interior Detail",
      desc: "Vacuum, wipe-down, stain spot-cleaning, console & vents detailed.",
    },
    {
      title: "Full Package",
      desc: "Exterior + interior, clay bar, sealant, and premium finish.",
    },
  ];

  return (
    <section id="services" className="container-padded py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Services</h2>
      <p className="text-gray-600 text-center mt-3">Clean cards that explain your core packages.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {items.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
            <div className="h-36 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 mb-5" />
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            <button className="mt-5 text-sm px-4 py-2 rounded-full border border-gray-200 hover:shadow-soft transition">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
