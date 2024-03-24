import Image from "next/image";
import JavaIsland from "@/public/images/mario-la-pergola-KTHA8H_qpOw-unsplash.jpg";
import Denpasar from "@/public/images/i-nyoman-yuda-wirawan-zK2fzhp21ss-unsplash.jpg";
import Bali from "@/public/images/visualsofdana-uwIRTJuTfkc-unsplash.jpg";
import Lampung from "@/public/images/ibadah-mimpi-e0CLRDE4azw-unsplash.jpg";
import Aceh from "@/public/images/misqal-novio-reeza-YZKSPGxBkMY-unsplash.jpg";
import SumateraIsland from "@/public/images/moondzeyr-bYZFcZRfx7I-unsplash.jpg";
import KalimantanIsland from "@/public/images/tia-3sw-VKkOqxA-unsplash.jpg";
import LombokIsland from "@/public/images/tandya-rachmat-18CyoDR6q2w-unsplash.jpg";
import Sumbawa from "@/public/images/monteverdo-barnsley-RR-LZlzbPYA-unsplash.jpg";

export default function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" id="rute-tujuan">
              Rute Tujuan
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Rute Tujuan kami menawarkan perjalanan yang dirancang dengan
              cermat untuk memenuhi kebutuhan dan keinginan Anda.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-3">
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Pulau Jawa</h1>
              <Image
                data-aos="zoom-y-out"
                src={JavaIsland}
                alt="Java Island"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            {/* Item */}
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Denpasar</h1>
              <Image
                data-aos="zoom-y-out"
                src={Denpasar}
                alt="Denpasar"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            {/* Item */}
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Bali</h1>
              <Image
                data-aos="zoom-y-out"
                src={Bali}
                alt="Bali"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            {/* Item */}
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Lampung</h1>
              <Image
                data-aos="zoom-y-out"
                src={Lampung}
                alt="Lampung"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            {/* Item */}
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Sumatera</h1>
              <Image
                data-aos="zoom-y-out"
                src={SumateraIsland}
                alt="Sumatera Island"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            {/* Item */}
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Aceh</h1>
              <Image
                data-aos="zoom-y-out"
                src={Aceh}
                alt="Aceh"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Kalimantan</h1>
              <Image
                data-aos="zoom-y-out"
                src={KalimantanIsland}
                alt="Kalimantan Island"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            {/* Item */}
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Lombok</h1>
              <Image
                data-aos="zoom-y-out"
                src={LombokIsland}
                alt="Lombok Island"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>

            {/* Item */}
            <div className="relative flex items-center justify-center py-2 col-span-2 md:col-auto text-xl md:text-2xl text-gray-100/30 hover:text-gray-100 overflow-hidden transition duration-300 ease-in-out">
              <h1 className="z-10 font-bold absolute p-4">Sumbawa</h1>
              <Image
                data-aos="zoom-y-out"
                src={Sumbawa}
                alt="Sumbawa"
                className="z-0 w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-105 bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
