export default function CTA() {
  return (
    <section className="container-padded py-20 text-center">
      <div className="bg-white rounded-3xl px-6 py-12 shadow-soft border border-gray-100">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to make your car shine?</h3>
        <p className="text-gray-600 mt-3">This is a simple demo—replace this copy and route the button wherever you like.</p>
        <div className="mt-6 flex justify-center">
          <a href="#top" className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white hover:opacity-90">
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
