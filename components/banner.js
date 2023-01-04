import React from "react";
import Image from "next/image";

function banner() {
  return (
    <div className='flex items-center relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='/images/the-anam.jpg'
        alt='banner image'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute w-full top-1/2 text-center bg-white bg-opacity-60 p-10'>
        <p className='text-sm text-red-500 sm:text-xl p-5 font-bold'>
          Not sure where to go? Perfect!
        </p>
        <button className='text-gray-600 px-10 py-4 rounded-full bg-white shadow-md font-bold hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default banner;
