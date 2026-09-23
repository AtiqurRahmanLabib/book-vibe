import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#d8cdbb] bg-[#eee7db]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#3f3025]">
              Book Vibes
            </h2>

            <div className="mt-3 h-px w-12 bg-[#8c7966]" />

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#756454]">
              A quiet place for readers to discover books, keep track of their
              reading journey, and build a personal collection.
            </p>
          </div>

          {/* Library */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#4b3a2b]">
              Library
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-[#756454]">
              <li>
                <Link
                  href="/books"
                  className="transition-colors hover:text-[#3f3025]"
                >
                  Browse Books
                </Link>
              </li>

              <li>
                <Link
                  href="/listed-books"
                  className="transition-colors hover:text-[#3f3025]"
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  href="/wishlist"
                  className="transition-colors hover:text-[#3f3025]"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#4b3a2b]">
              About Book Vibes
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#756454]">
              Made for people who believe every good book deserves a place on
              the shelf and every reader deserves a place to keep their
              stories.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-[#d8cdbb]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[#806d5b]">
            © 2026 Book Vibes. All rights reserved.
          </p>

          <p className="font-serif text-sm italic text-[#6b5745]">
            Read. Remember. Repeat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;