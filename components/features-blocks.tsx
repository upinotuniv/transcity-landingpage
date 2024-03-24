import Image from "next/image";
import Direct from "./ui/direct-link";
import RentalCarFeat from "@/public/images/2150796894.jpg";
import CityTour from "@/public/images/urban-traffic-with-cityscape.jpg";
import CarterDrop from "@/public/images/traffic-vehicle-urban-reflections-city.jpg";
import AirportShuttle from "@/public/images/oskar-kadaksoo-DDBDkz0p918-unsplash.jpg";
import GravePilgrimage from "@/public/images/6258df76e2c53344788198.jpg";
import DomesticTour from "@/public/images/travel-discovering-places-with-love-ones.jpg";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600">
              Layanan kami menawarkan pengalaman perjalanan yang luar biasa
              dengan fokus pada kenyamanan dan keamanan Anda.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex bg-center shadow-xl h-80 rounded-lg overflow-hidden">
              <Image
                className="absolute z-0 object-cover w-full h-full"
                src={RentalCarFeat}
                alt="rent-car-img"
                data-aos="zoom-y-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 z-10 p-6">
                <h4 className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mb-1 text-white">
                  Rental Car
                </h4>
                <p className="text-gray-100 font-medium">
                  Layanan rental mobil kami menyediakan berbagai pilihan
                  kendaraan mulai dari mobil ukuran sedan hingga big bus. Dengan
                  armada terbaru dan berkualitas.
                </p>
                <Direct />
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex bg-center shadow-xl h-80 rounded-lg overflow-hidden">
              <Image
                className="absolute z-0 object-cover w-full h-full"
                src={CityTour}
                alt="city-tour-img"
                data-aos="zoom-y-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 z-10 p-6">
                <h4 className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mb-1 text-white">
                  City Tour
                </h4>
                <p className="text-gray-100 font-medium">
                  Nikmati pengalaman menjelajahi keindahan dan kekayaan budaya
                  kota bersama layanan city tour kami. Kami menawarkan
                  perjalanan berpemandu yang informatif dan menyenangkan.
                </p>
                <Direct />
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex bg-center shadow-xl h-80 rounded-lg overflow-hidden">
              <Image
                className="absolute z-0 object-cover w-full h-full"
                src={CarterDrop}
                alt="carter-drop-img"
                data-aos="zoom-y-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 z-10 p-6">
                <h4 className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mb-1 text-white">
                  Carter Drop
                </h4>
                <p className="text-gray-100 font-medium">
                  Nikmati kenyamanan dan kemudahan dengan layanan carter drop
                  kami. Sewa kendaraan dengan sopir untuk perjalanan yang nyaman
                  ke tujuan Anda.
                </p>
                <Direct />
              </div>
            </div>

            {/* 4th item */}
            <div className="relative flex bg-center shadow-xl h-80 rounded-lg overflow-hidden">
              <Image
                className="absolute z-0 object-cover w-full h-full"
                src={AirportShuttle}
                alt="airport-shuttle-img"
                data-aos="zoom-y-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 z-10 p-6">
                <h4 className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mb-1 text-white">
                  Antar Jemput Bandara Soekarno Hatta
                </h4>
                <p className="text-gray-100 font-medium">
                  Nikmati kebebasan dan kenyamanan perjalanan Anda dengan
                  layanan antar jemput bandara Soekarno-Hatta.
                </p>
                <Direct />
              </div>
            </div>

            {/* 5th item */}
            <div className="relative flex bg-center shadow-xl h-80 rounded-lg overflow-hidden">
              <Image
                className="absolute z-0 object-cover w-full h-full"
                src={GravePilgrimage}
                alt="grave-pirlgrimage-img"
                data-aos="zoom-y-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 z-10 p-6">
                <h4 className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mb-1 text-white">
                  Ziarah
                </h4>
                <p className="text-gray-100 font-medium">
                  Nikmati pengalaman spiritual yang mendalam dengan layanan
                  ziarah kami. Kami menyediakan perjalanan yang penuh makna ke
                  tempat-tempat suci dan bersejarah.
                </p>
                <Direct />
              </div>
            </div>

            {/* 6th item */}
            <div className="relative flex bg-center shadow-xl h-80 rounded-lg overflow-hidden">
              <Image
                className="absolute z-0 object-cover w-full h-full"
                src={DomesticTour}
                alt="domestic-tour-img"
                data-aos="zoom-y-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 z-10 p-6">
                <h4 className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mb-1 text-white">
                  Tour Domestik dan Internasional
                </h4>
                <p className="text-gray-100 font-medium">
                  Nikmati petualangan tak terlupakan dengan layanan tour
                  domestik dan internasional kami. Kami menawarkan berbagai
                  pilihan paket wisata yang menakjubkan.
                </p>
                <Direct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
