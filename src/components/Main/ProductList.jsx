import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import Heart from "./Heart";

export default function ProductsList({ data }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      
      {data && data.products && data.products.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {data.products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <div className="rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5">
                  <Heart />
                </div>
                <img src={product.img[0]} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h2 className="mb-2 text-sm">{product.name}</h2>
                {/* <p className="text-gray-600 text-sm mb-2">{product.description.slice(0, 50)}...</p> */}
                <p className="text-lg text-gray-800 font-bold">${product.totalPrice}</p>
                {product.discount > 0 && (
                  <p className="text-red-500 text-sm">Discount: {product.discount}%</p>
                )}
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
    </div>
  );
}




// export default ProductsList;

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
