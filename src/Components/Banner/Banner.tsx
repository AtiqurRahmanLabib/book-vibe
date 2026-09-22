"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Ibook } from "@/Type/Type";

interface BannerProps {
  books: Ibook[];
}

const Banner = ({ books }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (books.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [books.length]);

  const currentBook = books[currentIndex];

  if (!currentBook) return null;

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:mt-15 lg:px-0">
      <div className="relative min-h-100 overflow-hidden rounded-3xl border border-[#e3d9ca] bg-[#f7f3eb] lg:h-138.5">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#8b6f47]/10 blur-3xl lg:-right-5 lg:h-96 lg:w-96" />

        <div className="relative mx-auto grid h-full items-center justify-center gap-8 px-6 py-10 sm:px-10 lg:flex lg:gap-20 lg:px-24">
          {/* Content */}
          <div className="grid max-w-md gap-5 text-center lg:text-left">
            <span className="mx-auto inline-block w-fit rounded-full border border-[#d8cdbc] bg-[#fffdf8] px-4 py-1.5 text-sm font-semibold tracking-wide text-[#8b6f47] shadow-sm lg:mx-0">
              📚 Featured Book
            </span>

            <h1 className="font-serif text-[32px] font-bold leading-tight text-[#342b23] sm:text-[40px] lg:text-[56px] lg:leading-[1.1]">
              {currentBook.bookName}
            </h1>

            <p className="text-base leading-7 text-[#806f5b] lg:text-lg">
              Discover a new story and explore the world created by{" "}
              <span className="font-semibold text-[#5c4c3c]">
                {currentBook.author}
              </span>
              .
            </p>

            <Link
              href={`/books/${currentBook.bookId}`}
              className="mx-auto flex h-14 w-full items-center justify-center rounded-xl bg-[#4b3a2b] px-6 text-sm font-semibold text-white shadow-lg shadow-[#4b3a2b]/20 transition-all duration-300 hover:bg-[#34281e] hover:shadow-xl active:scale-[0.98] sm:w-52 lg:mx-0 lg:h-16"
            >
              View Book
              <span className="ml-2 text-lg">→</span>
            </Link>
          </div>

          {/* Book Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Shadow */}
              <div className="absolute inset-x-4 bottom-0 h-8 rounded-full bg-[#4b3a2b]/20 blur-xl" />

              <Image
                key={currentBook.bookId}
                className="relative h-60 w-48 object-contain drop-shadow-2xl sm:h-80 sm:w-64 lg:h-98.5 lg:w-79.5"
                src={currentBook.image}
                width={500}
                height={500}
                quality={75}
                alt={currentBook.bookName}
                priority
              />
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {books.map((book, index) => (
            <span
              key={book.bookId}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-7 bg-[#4b3a2b]"
                  : "w-1.5 bg-[#c8baa8]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
