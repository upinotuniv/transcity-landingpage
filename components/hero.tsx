import Direct from "./ui/direct-link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-[55px] md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400"
              data-aos="zoom-y-out"
            >
              Trans City{" "}
              <span className="bg-clip-text text-transparent bg-black">
                Tour & Travel
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Selamat datang di Trans City Tour and Travel Agency! Jadikan
                setiap perjalanan Anda menjadi pengalaman yang tak terlupakan
                dengan layanan perjalanan kami yang terpercaya dan
                berpengalaman.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Direct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
