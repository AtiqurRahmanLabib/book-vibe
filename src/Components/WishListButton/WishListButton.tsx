"use client";

import { BooksContext } from "@/Context/BookContext";
import { Ibook } from "@/Type/Type";
import { useContext } from "react";
import toast from "react-hot-toast";

const WishListButton = ({ book }: { book: Ibook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleWishList = () => {
    const alreadyWishlisted = wishlist.some(
      (wishBook) => wishBook.bookId === book.bookId,
    );

    if (alreadyWishlisted) {
      toast.error(`${book.bookName} is already in your wishlist!`);
      return;
    }

    setWishlist([...wishlist, book]);
    toast.success(`${book.bookName} added to wishlist!`);
  };
  return (
    <div>
      <button
        onClick={() => handleWishList()}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#cfc2b1] bg-[#fffdf8] px-5 py-3.5 text-sm font-semibold text-[#55483a] transition-all duration-300 hover:border-[#a99a87] hover:bg-[#f5efe5] active:scale-[0.98]"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
