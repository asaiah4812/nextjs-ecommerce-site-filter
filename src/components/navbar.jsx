import { Heart, ShoppingCart, User } from 'lucide-react';


const Navbar = () => {
  return (
    <div className="flex items-center justify-between border fixed top-0 left-0 right-0 z-10 backdrop-blur-lg"> 
      <div className="flex items-center justify-center border py-5 w-[20%] font-bold text-2xl">
        Kasuwa<ShoppingCart />
      </div>
      <div className="w-[20%]">
        <input
          type="text"
          className="bg-gray-100 p-3 rounded-lg"
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="flex items-center gap-3 w-[20%]">
        <Heart />
        <ShoppingCart />
        <User />
      </div>
    </div>
  );
}

export default Navbar