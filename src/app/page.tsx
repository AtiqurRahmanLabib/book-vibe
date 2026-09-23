import Banner from "@/Components/Banner/Banner";
import Books from "@/Components/Books/Books";
import { Ibook } from "@/Type/Type";
import toast from "react-hot-toast";

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
