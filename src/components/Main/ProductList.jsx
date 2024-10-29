import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Heart from "./Heart";

const ProductsList = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 3,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {data.products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg relative mx-2">
              <div className="rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5">
                <Heart />
              </div>
              <img src={product.img[0]} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description.slice(0, 50)}...</p>
              <p className="text-gray-800 font-bold">${product.totalPrice}</p>
              {product.discount > 0 && (
                <p className="text-red-500 text-sm">Discount: {product.discount}%</p>
              )}
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsList;

// import React from 'react';
// import Heart from "./Heart";

// const ProductsList = ({ data }) => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg relative">
//             <div className="rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5">
//                 <Heart />
//             </div>
//             <img src={product.img[0]} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
//             <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 text-sm mb-2">{product.description.slice(0, 50)}...</p>
//             <p className="text-gray-800 font-bold">${product.totalPrice}</p>
//             {product.discount > 0 && (
//               <p className="text-red-500 text-sm">Discount: {product.discount}%</p>
//             )}
//             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsList;
