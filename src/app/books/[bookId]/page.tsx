import ReadButton from "@/Components/ReadButton/ReadButton";
import WishListButton from "@/Components/WishListButton/WishListButton";
import { Ibook } from "@/Type/Type";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

interface BookDetailsPropType {
  params: Promise<{ bookId: string }>;
}

const getBooks = async (): Promise<Ibook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books`,
      {
        next: { revalidate: 10 },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  } catch (error) {
    toast.error(`Error fetching books: ${error}`);
    throw error;
  }
};

const BookDetailsPage = async ({ params }: BookDetailsPropType) => {
  const booksData = await getBooks();
  const { bookId } = await params;
  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(bookId),
  ) as Ibook;

  return (
    <main className="min-h-screen bg-[#f7f3eb] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-xl border border-[#d8cdbc] bg-[#fffdf8] px-4 py-2.5 text-sm font-medium text-[#5c4e40] shadow-sm transition-all duration-300 hover:bg-[#f1ebe1] active:scale-[0.97]"
          >
            <span className="text-lg">←</span>
            Back to Books
          </Link>
        </div>

        {/* Main Card */}
        <section className="overflow-hidden rounded-3xl border border-[#ded5c7] bg-[#fffdf8] shadow-[0_20px_60px_rgba(76,60,40,0.08)]">
          <div className="grid lg:grid-cols-[380px_1fr]">
            {/* Book Cover */}
            <div className="flex items-center justify-center bg-[#eee7db] p-8 sm:p-12">
              <div className="group relative w-full max-w-70 overflow-hidden rounded-lg shadow-[10px_15px_30px_rgba(50,40,30,0.25)]">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={600}
                  height={900}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-10 lg:p-14">
              {/* Category */}
              <span className="rounded-full border border-[#d8cdbc] bg-[#f5efe5] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#766652]">
                {book.category}
              </span>

              {/* Title */}
              <h1 className="mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight text-[#342b23] sm:text-4xl lg:text-5xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-4 font-serif text-lg italic text-[#806f5b]">
                by {book.author}
              </p>

              {/* Rating */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-[#f5efe5] px-4 py-2">
                  <span className="text-lg text-[#a47725]">★</span>

                  <span className="font-semibold text-[#493d30]">
                    {book.rating}
                  </span>

                  <span className="text-sm text-[#8d8172]">/ 5</span>
                </div>

                <span className="text-sm text-[#8d8172]">
                  {book.totalPages} pages
                </span>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-[#e4dbcf]" />

              {/* Review */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-[#40352a]">
                  About the Book
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6f6457] sm:text-base">
                  {book.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f1ebe1] px-3 py-1.5 text-xs font-medium text-[#756754]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Book Information */}
              <div className="mt-9 grid grid-cols-1 gap-4 border-t border-[#e4dbcf] pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9a8c7b]">
                    Publisher
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#51463a]">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9a8c7b]">
                    Published
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#51463a]">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9a8c7b]">
                    Total Pages
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#51463a]">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9a8c7b]">
                    Book ID
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#51463a]">
                    #{book.bookId}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {/* Read Button */}

                <ReadButton book={book} />

                {/* Wishlist Button */}
                <WishListButton book={book}></WishListButton>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <div className="mb-3 text-2xl text-[#a9967d]">“</div>

          <p className="font-serif text-lg italic leading-7 text-[#746757]">
            A good book is not just something you read. It is somewhere you go.
          </p>

          <div className="mx-auto mt-4 h-px w-12 bg-[#c9bba8]" />
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
