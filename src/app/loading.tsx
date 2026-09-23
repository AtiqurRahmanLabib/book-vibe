"use client";

const loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f5ef] px-4 py-16 sm:px-6">
      <div className="w-full max-w-md text-center">
        {/* Book Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#fffdf8] shadow-sm">
          <div className="relative h-12 w-16">
            {/* Left page */}
            <div className="absolute left-0 top-1 h-10 w-8 -skew-y-6 rounded-l-md border border-[#b9aa95] bg-[#fdfaf3] shadow-sm" />

            {/* Right page */}
            <div className="absolute right-0 top-1 h-10 w-8 skew-y-6 rounded-r-md border border-[#b9aa95] bg-[#fdfaf3] shadow-sm" />

            {/* Book spine */}
            <div className="absolute left-1/2 top-1 h-10 w-px -translate-x-1/2 bg-[#9f8d76]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl font-semibold tracking-wide text-[#3f3428] sm:text-3xl">
          Opening the Library
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#817465] sm:text-base">
          Gathering stories, turning pages, and preparing your next read...
        </p>

        {/* Loading line */}
        <div className="mx-auto mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-[#e4dbce]">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-[#806b55]" />
        </div>

        {/* Small decorative text */}
        <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-[#a09280]">
          <span className="h-px w-8 bg-[#d3c6b5]" />
          <span>Book Collection</span>
          <span className="h-px w-8 bg-[#d3c6b5]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </main>
  );
};

export default loading;
