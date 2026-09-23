import Books from "@/Components/Books/Books";
import { Ibook } from "@/Type/Type";

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
    console.error("Error fetching books:", error);
    throw error;
  }
};

const BooksPage = async () => {
  const books = await getBooks();

  return <Books books={books} />;
};

export default BooksPage;
