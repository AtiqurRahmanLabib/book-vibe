import { Ibook } from "@/Type/Type";
import Image from "next/image";
import React from "react";

const ReadBookCard = ({ book }: { book: Ibook }) => {
  return (
    <div className="mt-6 flex w-full flex-col overflow-hidden rounded-xl border border-[#d8cdbb] bg-[#f7f3eb] shadow-[0_3px_10px_rgba(75,58,43,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(75,58,43,0.12)] sm:flex-row">
      {/* Image Side */}
      <div className="relative flex h-64 w-full shrink-0 items-center justify-center bg-[#eee7db] p-5 sm:h-auto sm:w-40">
        <div className="relative h-52 w-32 overflow-hidden rounded-md shadow-md">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Body Side */}
      <div className="flex flex-1 flex-col justify-between bg-[#fffdf8] p-6">
        <div>
          {/* Category */}
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#806d5b]">
            {book.category}
          </p>

          {/* Book Name */}
          <h2 className="font-serif text-2xl font-semibold leading-tight text-[#3f3025]">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-sm italic text-[#806d5b]">By {book.author}</p>

          {/* Divider */}
          <div className="my-4 h-px w-16 bg-[#b9aa95]" />

          {/* Stats */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f4d3d]">
            <span>★ {book.rating}</span>
            <span>{book.totalPages} pages</span>
            <span>{book.yearOfPublishing}</span>
          </div>

          {/* Reading Progress */}
          <div className="mt-5 max-w-md">
            <div className="mb-2 flex items-center justify-between text-xs text-[#806d5b]">
              <span className="font-medium uppercase tracking-wide">
                Reading Progress
              </span>
              <span className="font-semibold text-[#4b3a2b]">65%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-[#ded5c8]">
              <div className="h-full w-[65%] rounded-full bg-[#6b5745]" />
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-6">
          <button className="rounded-md border border-[#6b5745] bg-transparent px-5 py-2 text-sm font-medium text-[#4b3a2b] transition-all duration-300 hover:bg-[#4b3a2b] hover:text-[#f7f3eb]">
            Continue Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
