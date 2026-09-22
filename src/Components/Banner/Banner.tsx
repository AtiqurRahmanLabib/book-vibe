import Image from "next/image";
import bannerImage from "@/assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-8 lg:mt-15 px-6 lg:px-0">
      <div className="relative overflow-hidden min-h-100 lg:h-138.5 bg-[#F3F5EF] rounded-3xl">
        {/* Decorative blurred circle - static, no animation */}
        <div className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 bg-[#23BE0A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid gap-8 lg:gap-70 justify-center lg:flex items-center h-full py-10 lg:p-24 mx-auto">
          <div className="grid gap-5 text-center lg:text-left max-w-md">
            <span className="inline-block mx-auto lg:mx-0 px-4 py-1.5 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-semibold tracking-wide w-fit">
              📚 New Arrivals
            </span>

            <h1 className="text-[#131313] font-bold text-[32px] leading-tight lg:text-[56px] lg:leading-[1.1]">
              Books to freshen up your bookshelf
            </h1>

            <p className="text-[#131313]/60 text-base lg:text-lg hidden sm:block">
              Discover handpicked stories that spark curiosity and keep you turning pages.
            </p>

            <button className="w-full sm:w-52 h-14 lg:h-16 bg-[#23BE0A] hover:bg-[#1fa809] text-white font-semibold rounded-xl mx-auto lg:mx-0 shadow-lg shadow-[#23BE0A]/30 transition-colors duration-200">
              View The List
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              className="w-48 h-60 sm:w-64 sm:h-80 lg:w-79.5 lg:h-98.5 drop-shadow-2xl"
              src={bannerImage}
              width={500}
              height={500}
              quality={75}
              alt="Banner Showing"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;