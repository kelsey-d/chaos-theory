import Image from 'next/image';
import InnerShadow from './InnerShadow';
import Button from './Button';

export default function FeaturedTrack() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-end text-white p-4 pb-0">
      <Image src="/featured-track-bg.webp" alt="Featured Track" width={1920} height={1080} className="absolute w-full h-full object-cover -z-2" />
      <InnerShadow />
      <div className="flex flex-col justify-center items-center gap-8 pb-16 md:pb-8">
        <Image src="/angels cover.png" alt="Icon" width={125} height={125} className="inline-block mx-auto" />
        <Button text="JOIN THE CHAOSE" />
      </div>
    </div>
  );
}