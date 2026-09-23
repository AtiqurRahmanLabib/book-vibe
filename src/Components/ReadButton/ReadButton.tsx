"use client";

import { BooksContext } from "@/Context/BookContext";
import { Ibook } from "@/Type/Type";
import { useContext } from "react";
import toast from "react-hot-toast";

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleRead = () => {
    const alreadyRead = readBooks.some(
      (readBook) => readBook.bookId === book.bookId,
    );

    if (alreadyRead) {
      toast.error(`${book.bookName} is already in Read!`);
      return;
    }

    setReadBooks([...readBooks, book]);
    toast.success(`${book.bookName} added to Read!`);
  };
  return (
    <div>
      <button
        onClick={() => handleRead()}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#4b3a2b] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#34281e] active:scale-[0.98]"
      >
        Read Book
      </button>
    </div>
  );
};

export default ReadButton;
