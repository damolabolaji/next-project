import React from "react";
import Image from "next/image";

function banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='/images/the-anam.jpg'
        alt='banner image'
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
}

export default banner;
