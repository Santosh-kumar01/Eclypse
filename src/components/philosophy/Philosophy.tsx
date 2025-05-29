import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="bg-white text-black dark:bg-black dark:text-white px-6 sm:px-10 lg:px-20 py-16">
      <div className="max-w-5xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </h2>

        <div className="mt-10 border-t border-black/20 dark:border-white/20 pt-4">
          <Link
            href="/about"
            className="inline-flex items-center text-lg font-light hover:underline underline-offset-4"
          >
            Learn more about Eclypse
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;