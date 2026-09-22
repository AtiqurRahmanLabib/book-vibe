import Image from "next/image";
import { Ibook } from "@/Type/Type";

interface bookCardPropType {
  book: Ibook;
}

const BookCard = ({ book }: bookCardPropType) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow backdrop-blur">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-900/85 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          by <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Details */}
        <div className="mt-4 flex items-center justify-between border-y border-slate-100 py-3 text-sm text-slate-500">
          <span>
            <strong className="text-slate-800">{book.totalPages}</strong> pages
          </span>

          <span>{book.yearOfPublishing}</span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600 active:scale-[0.98]">
          View Details
        </button>
      </div>
    </article>
  );
};

export default BookCard;
