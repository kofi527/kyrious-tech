import Image from "next/image";

type ServicesHeroImageProps = {
  className?: string;
};

/**
 * Personal photo shown in the services hero section on the homepage and services page.
 * Place your image at: public/images/my-personal-photo.jpg
 */
export function ServicesHeroImage({ className }: ServicesHeroImageProps) {
  return (
    <Image
      src="/images/homepage1.jpg"
      alt="Kyrious Tech team"
      width={640}
      height={480}
      className={`h-auto w-full object-cover object-center ${className ?? ""}`}
      sizes="(max-width: 768px) 100vw, 480px"
      unoptimized
    />
  );
}
