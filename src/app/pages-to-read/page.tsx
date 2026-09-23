"use client";

import { BooksContext } from "@/Context/BookContext";
import { Ibook } from "@/Type/Type";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  BarShapeProps,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#6b5745",
  "#8c7966",
  "#a8957e",
  "#4b3a2b",
  "#756454",
  "#b19f88",
];

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={`
        M${x},${y + height}
        C${x + width / 3},${y + height}
        ${x + width / 2},${y + height / 3}
        ${x + width / 2},${y}
        C${x + width / 2},${y + height / 3}
        ${x + (2 * width) / 3},${y + height}
        ${x + width},${y + height}
        Z
      `}
      fill={color}
    />
  );
};

const Page = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: Ibook) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <main className="min-h-screen bg-[#f3eee6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#806d5b]">
            Reading Statistics
          </p>

          <h1 className="font-serif text-4xl font-semibold text-[#3f3025] sm:text-5xl">
            Reading Overview
          </h1>

          <div className="mx-auto mt-4 h-px w-16 bg-[#8c7966]" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#756454]">
            A simple overview of the books you have completed and the pages you
            have read.
          </p>
        </div>

        {/* Chart / Empty State */}
        <div className="rounded-xl border border-[#d8cdbb] bg-[#f7f3eb] p-5 shadow-[0_4px_16px_rgba(75,58,43,0.06)] sm:p-8">
          {readBooks.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between border-b border-[#d8cdbb] pb-5">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#4b3a2b]">
                    Books Read
                  </h2>

                  <p className="mt-1 text-sm text-[#806d5b]">
                    {readBooks.length}{" "}
                    {readBooks.length === 1 ? "book" : "books"} in your
                    collection
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-[#806d5b]">
                    Total Pages
                  </p>

                  <p className="font-serif text-2xl font-semibold text-[#4b3a2b]">
                    {readBooks.reduce(
                      (total, book) => total + book.totalPages,
                      0,
                    )}
                  </p>
                </div>
              </div>

              <div className="h-100 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 30,
                      right: 20,
                      left: 0,
                      bottom: 70,
                    }}
                  >
                    <CartesianGrid stroke="#d8cdbb" strokeDasharray="3 3" />

                    <XAxis
                      dataKey="name"
                      tick={{
                        fill: "#806d5b",
                        fontSize: 12,
                      }}
                      angle={-35}
                      textAnchor="end"
                      interval={0}
                      axisLine={{
                        stroke: "#b9aa95",
                      }}
                      tickLine={false}
                    />

                    <YAxis
                      tick={{
                        fill: "#806d5b",
                        fontSize: 12,
                      }}
                      axisLine={{
                        stroke: "#b9aa95",
                      }}
                      tickLine={false}
                    />

                    <Tooltip
                      cursor={{
                        fill: "#eee7db",
                      }}
                      contentStyle={{
                        backgroundColor: "#f7f3eb",
                        border: "1px solid #d8cdbb",
                        borderRadius: "8px",
                        color: "#3f3025",
                        boxShadow: "0 4px 16px rgba(75, 58, 43, 0.10)",
                      }}
                      labelStyle={{
                        color: "#4b3a2b",
                        fontFamily: "serif",
                        fontWeight: 600,
                      }}
                    />

                    <Bar dataKey="pages" name="Pages" shape={TriangleBar}>
                      <LabelList
                        dataKey="pages"
                        position="top"
                        fill="#4b3a2b"
                        fontSize={12}
                        fontWeight={600}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          ) : (
            <div className="flex min-h-100 items-center justify-center text-center">
              <div className="max-w-md">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#eee7db]">
                  <span className="font-serif text-2xl text-[#6b5745]">—</span>
                </div>

                <h2 className="font-serif text-2xl font-semibold text-[#4b3a2b]">
                  No Reading Data Yet
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#806d5b]">
                  You haven't added any books to your reading list yet. Once you
                  finish a book, your reading statistics will appear here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
