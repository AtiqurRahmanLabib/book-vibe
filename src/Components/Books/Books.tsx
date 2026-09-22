import { Ibook } from "@/Type/Type";
import BookCard from "../Shared/BookCard/BookCard";

const getBooks = async (): Promise<Ibook[]> => {
  const res = await fetch("http://localhost:5000/books", {
    cache: "force-cache",
  });

  const data: Ibook[] = await res.json();

  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <div>
      <h1 className="text-[40px] text-[#131313] font-bold text-center mt-10">Books</h1>

      <div className="container mx-auto grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 ">
        {books.map((book: Ibook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
