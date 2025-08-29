import Image from 'next/image';

export default function FeaturedTrack() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <Image src="/path/to/your/image.jpg" alt="Featured Track" width={300} height={300} className="mb-4 rounded-lg shadow-lg" />
      <div className="absolute flex flex-col justify-end items-center">
        <Image src="/path/to/your/icon.png" alt="Icon" width={20} height={20} className="inline-block mr-2" />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          JOIN THE CHAOS
        </button>
      </div>
    </div>
  );
}