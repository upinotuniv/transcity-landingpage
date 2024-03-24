import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logo.png";

export default function Logo({ width = 70, height = 70 }) {
  return (
    <Link href="/" className="flex items-center" aria-label="Cruip">
      <Image
        className="md:max-w-none mx-auto rounded"
        src={logoImage}
        width={width}
        height={height}
        alt="transcity-logo"
        data-aos="zoom-y-out"
      ></Image>
    </Link>
  );
}
