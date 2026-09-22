import Banner from "@/Components/Banner/Banner";
import Books from "./books/page";
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

const Page = async () => {
  const books = await getBooks();

  return (
    <main>
      <Banner books={books} />
      <Books books={books} />
    </main>
  );
};

export default Page;