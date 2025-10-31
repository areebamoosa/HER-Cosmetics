// import React, { useState } from 'react'
// import { products } from './ProductData';
// import {useSearch} from './SearchContext'
// import Product from '../Cosmetics-Page/Product'
// import { Link } from 'react-router-dom';

// const Search = ({category}) => {

//     const {searchItem} = useSearch();

//     const filtered = products.filter( (p) => p.category === category && (p.title.toLowerCase().includes(searchItem.toLocaleLowerCase()) || p.desc.toLowerCase().includes(searchItem.toLowerCase()) ))

//     return (
//         <>
//         <div className="p-6">

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filtered.length > 0 ? (
//           filtered.map((prod) => (
//             <Link to={`/product/${prod.id}`} key={prod.id}>
//               <Product {...prod} />
//             </Link>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-400 mt-10">
//             No products found 😢
//           </p>
//         )}
//       </div>
//     </div>

//         </>
//     )
// }

// export default Search


import React from 'react'
import { products } from './ProductData';
import { useSearch } from './SearchContext'
import Product from '../Cosmetics-Page/Product'
import { Link } from 'react-router-dom';

const Search = ({ category }) => {
  const { searchItem } = useSearch();

  const filtered = products.filter((p) =>
    (
      p.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchItem.toLowerCase())
    )
  );

  // if search bar is empty → show all products of this category
  const finalList = searchItem.trim() === "" 
    ? products.filter((p) => p.category === category)
    : filtered;

  return (
    <div className="p-6 mt-32">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {finalList.length > 0 ? (
          finalList.map((prod) => (
            <Link to={`/product/${prod.id}`} key={prod.id}>
              <Product {...prod} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 mt-10">
            No products found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
