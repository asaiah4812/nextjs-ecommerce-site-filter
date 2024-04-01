import { Lock } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div className="flex items-start border justify-center gap-2 flex-col p-4 hover:shadow-lg ease-in-out relative">
      <Image src={img} width={250} height={200} alt="Product" />
      <h2>{title}</h2>
      <div className="flex items-center gap-2">
        {star} <span>{reviews}</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span>{prevPrice}</span>
        <Lock />
      </div>
    </div>
  );
}

export default Card