import Image from "next/image";
import WhatsApp from "@/public/images/whatsapp-symbol-logo-svgrepo-com.svg";
import MVPCar from "@/public/images/64371 1.png";

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="relative h-96 md:h-auto overflow-hidden hidden md:block">
            {/* Road Line */}
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 h-2 w-full z-0 rounded-xl"></span>
            {/* MPV Car image */}
            <Image
              src={MVPCar}
              alt="MPV Car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition duration-1000 transform hover:-translate-x-12"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <div className="max-w-lg mx-auto">
              <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
                Dapatkan Penawaran Terbaik
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Untuk informasi lebih lanjut mengenai penawaran hari ini bisa
                menghubungi kami dengan menekan tombol di bawah.
              </p>

              {/* WhatsApp Button */}
              <a
                id="hubungi-kami"
                href="https://wa.me/628388919991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300 ease-in-out shadow-md"
              >
                <Image src={WhatsApp} alt="WhatsApp" width={24} height={24} />
                <span>Hubungi Kami</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
