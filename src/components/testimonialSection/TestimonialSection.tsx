import Image from "next/image";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
 
];

export default function TestimonialSection() {
  return (
    <section className="bg-white text-black dark:bg-black dark:text-white px-6 py-16 md:px-20 transition-colors duration-300">
      <h2 className="text-sm tracking-widest uppercase mb-8 text-gray-700 dark:text-gray-400">
        Our Customers
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Quote Content */}
        <div className="md:w-3/4">
          <p className="text-3xl md:text-4xl font-light leading-snug mb-6">
            <span className="text-5xl font-serif mr-2">“</span>
            Understated, but unforgettable. It feels like it was made for me
          </p>
          <p className="text-lg font-medium">Random Woman</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">NY, USA</p>
        </div>

        {/* Vertical Avatar Circles */}
        <div className="flex flex-col items-center gap-4 mt-12 md:mt-0">
          {avatars.map((avatar, index) => (
            <a
              key={index}
              href={avatar.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full overflow-hidden transition-all ring-2 hover:opacity-100 ${
                index === 0
                  ? "w-16 h-16 ring-black dark:ring-white"
                  : "w-12 h-12 opacity-50 ring-gray-400 dark:ring-gray-600"
              }`}
            >
              <Image
                src={avatar.imageUrl}
                alt={`Avatar ${index + 1}`}
                width={index === 0 ? 64 : 48}
                height={index === 0 ? 64 : 48}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}