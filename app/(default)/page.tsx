export const metadata = {
  title: "Trans City - Travel Door To Door",
  description:
    "rans City Tour and Travel Agency menyediakan layanan perjalanan yang terpercaya dan berpengalaman untuk menjelajahi kota-kota yang menakjubkan di seluruh Indonesia. Temukan paket wisata yang sesuai dengan kebutuhan Anda dan buat kenangan tak terlupakan bersama kami. Hubungi kami sekarang untuk informasi lebih lanjut.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
