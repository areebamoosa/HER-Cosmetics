import React from "react";
import { products } from "../ProductSearch/ProductData";
import { useSearch } from "../ProductSearch/SearchContext";
import Product from "../Cosmetics-Page/Product";
import { Link } from "react-router-dom";

const Search = () => {
  const { searchItem } = useSearch();

  if (!searchItem.trim()) return null;

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchItem.toLowerCase()) ||
    p.category.toLowerCase().includes(searchItem.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className=" w-full ">
      {filtered.length > 0 ? (
        <div className="grid grid-cols-4 gap-2">
          {filtered.map((prod) => (
            <Link to={`/product/${prod.id}`} key={prod.id}>
              <div className="w-[40px] h-[20px]">
                <Product {...prod} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No matching products found
        </p>
      )}
    </div>
  );
};

export default Search;