import Image from "next/image";
import Navbar from "@/components/Navbar";
import EmailCapture from "@/components/EmailCapture";
import Countdown from "@/components/Countdown";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="container-padded pt-20 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <Image
            src="/logo.png"
            alt="905 Detailing Logo"
            width={140}
            height={60}
            className="mx-auto mb-6 rounded-md object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Your Premier Mobile Detailing{" "}
            <span className="block">Service</span>
          </h1>
          <p className="mt-6 text-gray-600 leading-7">
            This is a demo preview built for 905 Detailing. My name is <strong>Thomas&nbsp;Boyd</strong> and I am owner and operator of 905
            Mobile Detailing. After many years of working for other high-end
            detailing shops in the GTA I decided to start my own business. I’ve
            been in the industry 6+ years and I’m extremely passionate about car
            detailing.
          </p>

          <div className="mt-8">
            <EmailCapture />
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex -space-x-3">
              <Image src="/client1.jpg" alt="client 1" width={40} height={40} className="rounded-full ring-2 ring-white" />
              <Image src="/client2.jpg" alt="client 2" width={40} height={40} className="rounded-full ring-2 ring-white" />
              <Image src="/client3.jpg" alt="client 3" width={40} height={40} className="rounded-full ring-2 ring-white" />
            </div>
            <span className="text-sm text-gray-600">Join our amazing clientele</span>
          </div>
        </div>

        <Countdown to={new Date(Date.now() + 64*24*60*60*1000).toISOString()} />
      </section>

      <Services />
      <Gallery />
      <CTA />

      <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} 905 Detailing — Preview
      </footer>
    </main>
  );
}
