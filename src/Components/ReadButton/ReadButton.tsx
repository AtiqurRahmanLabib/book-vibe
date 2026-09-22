"use client";

import { BooksContext } from "@/Context/BookContext";
import { Ibook } from "@/Type/Type";
import { useContext } from "react";

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleRead = () => {
    console.log("Button clicked", book);
    setReadBooks([...readBooks, book]);
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
