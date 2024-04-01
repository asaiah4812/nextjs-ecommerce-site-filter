import Image from 'next/image'
import data from '@/utils/data'
import React from 'react'
import { Lock } from 'lucide-react';
import Card from './card';

const Products = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-8">
      <Card/>
    </div>
  );
}

export default Products