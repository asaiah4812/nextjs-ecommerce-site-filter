"use client";
import Products from "@/components/products";
import Recommended from "@/components/recommended";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import data from "@/utils/data";
import Card from "@/components/card";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handeInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterItem = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filterItem;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    const result = filteredData(data, selectedCategory, query)
    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  return (
    <main className="h-screen flex items-start mt-16">
      <Sidebar handleChange={handleChange}/>
      <div className="flex flex-col p-10 w-full gap-4">
        <Recommended />
        <Products />
      </div>
    </main>
  );
}
