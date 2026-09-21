import Image from "next/image";
import bannerImage from "@/assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="container h-138.5 bg-[#131313]/5 rounded-3xl mx-auto mt-15">
      <div className="flex justify-between items-center h-full p-45 mx-auto">
        <div className="grid gap-5">
          <h1 className="text-[#131313] font-bold text-[56px] ">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="w-47.5 h-16.25 bg-[#23BE0A] text-[#FFFFFF] rounded-lg">
            View The List
          </button>
        </div>
        <div>
          <Image
            className="w-79.5 h-98.5"
            src={bannerImage}
            width={500}
            height={500}
            quality={75}
            alt="Banner Showing"
            priority
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
