import React from 'react';
import Image from 'next/image';
import spinner1 from '/public/spinner1.gif';

const Spinner = () => {
  return (
    <>
    <Image className='w-[200px] m-auto block' src={spinner1} alt='Loading...' />
    </>
  )
}

export default Spinner