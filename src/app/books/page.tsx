import Books from "@/Components/Books/Books";
import { Ibook } from "@/Type/Type";

const getBooks = async (): Promise<Ibook[]> => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BooksPage = async () => {
  const books = await getBooks();

  return <Books books={books} />;
};

export default BooksPage;