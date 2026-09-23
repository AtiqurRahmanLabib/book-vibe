"use client";

import ReadBookCard from "@/Components/ReadBookPage/ReadBookPage";
import WishListCard from "@/Components/WishListCard/WishListCard";
import { BooksContext } from "@/Context/BookContext";
import { Ibook } from "@/Type/Type";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { wishlist, readBooks } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <main className="min-h-screen bg-[#f3eee6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#806d5b]">
            My Library
          </p>

          <h1 className="font-serif text-4xl font-semibold text-[#3f3025] sm:text-5xl">
            Listed Books
          </h1>

          <div className="mx-auto mt-4 h-px w-16 bg-[#8c7966]" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#756454]">
            A personal collection of books you are reading and books waiting to
            be discovered.
          </p>
        </div>

        <div>
          <div className="relative w-full sm:w-56">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "rating" | "pages" | "year")
              }
              className="w-full appearance-none rounded-md border border-[#b9aa95] bg-[#f7f3eb] px-4 py-3 pr-10 font-serif text-sm font-medium text-[#4b3a2b] shadow-[0_2px_8px_rgba(75,58,43,0.06)] outline-none transition-colors focus:border-[#6b5745] focus:ring-1 focus:ring-[#6b5745]"
            >
              <option value="" disabled>
                Sort By
              </option>

              <option value="rating">Rating</option>
              <option value="pages">Number of Pages</option>
              <option value="year">Publishing Year</option>
            </select>

            {/* Classic Arrow */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6b5745]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className=" mt-5 overflow-hidden rounded-xl border border-[#d8cdbb] bg-[#f7f3eb] shadow-[0_4px_16px_rgba(75,58,43,0.06)]">
          <div className="tabs tabs-lift">
            {/* Read Books Tab */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab font-serif text-sm text-[#5f4d3d]"
              aria-label={`Read Books (${readBooks.length})`}
            />

            <div className="tab-content border-[#d8cdbb] bg-[#f7f3eb] p-5 sm:p-8">
              {readBooks.length > 0 ? (
                <div>
                  {sortedReadBooks.map((book) => (
                    <ReadBookCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-60 items-center justify-center text-center">
                  <div>
                    <p className="font-serif text-2xl text-[#4b3a2b]">
                      No books read yet
                    </p>

                    <p className="mt-2 text-sm text-[#806d5b]">
                      Your reading collection will appear here.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist Tab */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab font-serif text-sm text-[#5f4d3d]"
              aria-label={`Wishlist (${wishlist.length})`}
              defaultChecked
            />

            <div className="tab-content border-[#d8cdbb] bg-[#f7f3eb] p-5 sm:p-8">
              {wishlist.length > 0 ? (
                <div>
                  {sortedWishlist.map((book) => (
                    <WishListCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-60 items-center justify-center text-center">
                  <div>
                    <p className="font-serif text-2xl text-[#4b3a2b]">
                      Your wishlist is empty
                    </p>

                    <p className="mt-2 text-sm text-[#806d5b]">
                      Books you want to read will appear here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListedBooks;
