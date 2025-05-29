import Image from "next/image";

const SilhouetteGrid: React.FC = () => {
  return (
    <section className="bg-white text-black dark:bg-black dark:text-white px-6 sm:px-10 lg:px-20 py-16 transition-colors duration-300">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 sm:col-span-2">
          <Image
            src="/1 2.png"
            alt="Main Look"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/2 2.png"
            alt="Fabric Close-up"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        <Image
          src="/3 2.png"
          alt="Hand in Pocket"
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/4 2.png"
          alt="Tailoring"
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
        {/* Hide logo on small screens */}
        <Image
          src="/5 2.png"
          alt="Logo"
          width={400}
          height={400}
          className="w-full h-auto object-cover dark:bg-white bg-black hidden sm:block"
        />
      </div>

      <div className="mt-8">
        <p className="text-xl sm:text-2xl font-light">
          Silhouette No. 1 – Vermilion
        </p>
      </div>
    </section>
  );
};

export default SilhouetteGrid;