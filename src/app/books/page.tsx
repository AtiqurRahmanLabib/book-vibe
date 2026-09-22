import BookCard from "@/Components/Shared/BookCard/BookCard";
import { Ibook } from "@/Type/Type";

interface BooksProps {
  books: Ibook[];
}

const Books = ({ books }: BooksProps) => {
  return (
    <main className="min-h-screen bg-[#f7f3eb] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-[#d8cdbc] bg-[#fffdf8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6f47] shadow-sm sm:text-sm">
            Our Collection
          </span>

          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-[#342b23] sm:text-5xl lg:text-[52px]">
            Discover Your Next Book
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#806f5b] sm:text-base">
            Explore our carefully collected selection of stories, ideas, and
            unforgettable journeys waiting to be discovered.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d3c6b5] sm:w-20" />
            <span className="text-[#8b6f47]">✦</span>
            <span className="h-px w-12 bg-[#d3c6b5] sm:w-20" />
          </div>
        </div>

        <section className="mt-10 sm:mt-12 lg:mt-14">
          <div className="mb-6 flex items-center justify-between border-b border-[#ded5c7] pb-4">
            <h2 className="font-serif text-xl font-semibold text-[#4b3a2b] sm:text-2xl">
              All Books
            </h2>

            <span className="text-sm text-[#806f5b]">
              {books.length} {books.length === 1 ? "Book" : "Books"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Books;
