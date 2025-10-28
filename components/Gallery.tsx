import Image from "next/image";

export default function Gallery() {
  const imgs = [1,2,3,4,5,6].map(i => `/gallery${i}.jpg`);

  return (
    <section id="gallery" className="container-padded py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Gallery</h2>
      <p className="text-gray-600 text-center mt-3">A few placeholder shots to show the layout.</p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map(src => (
          <div key={src} className="overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 shadow-soft">
            <Image src={src} width={800} height={600} alt="work" className="w-full h-auto"/>
          </div>
        ))}
      </div>
    </section>
  );
}
