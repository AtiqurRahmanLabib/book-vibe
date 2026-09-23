import Banner from "@/Components/Banner/Banner";
import Books from "@/Components/Books/Books";
import { Ibook } from "@/Type/Type";

const getBooks = async (): Promise<Ibook[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
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
