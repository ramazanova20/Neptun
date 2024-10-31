import React from 'react';
import ProductsList from './ProductList';
// import Slider from 'react-slick';
import SliderMain from './SliderMain';
import Three from './Three';

function Main({ products }) {
  return (
    // <div className="product-grid">
    //   {products.map(product => (
    //     <Item
    //       key={product.id}
    //       p={{
    //         name: product.name,
    //         prices: { default: product.price },  // or handle discounts if needed
    //         desc: product.description,
    //         img: product.img[0],  // Assuming img is an array
    //       }}
    //       showModal={() => console.log(`Product ${product.id} clicked`)}
    //     />
    //   ))}
    // </div>
    // <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //   {products.map(product => (
    //     <div key={product.id} className="border rounded-lg p-4 shadow-lg">
    //       <img src={product.img[0]} alt={product.name} className="w-full h-48 object-cover rounded" />
    //       <h2 className="text-xl font-bold mt-2">{product.name}</h2>
    //       <p className="text-gray-700 mt-1">{product.description.substring(0, 100)}...</p>
    //       <div className="flex justify-between mt-4">
    //         <span className="text-lg font-semibold">${product.totalPrice.toFixed(2)}</span>
    //         {product.discount > 0 && (
    //           <span className="text-red-500 line-through">${product.price.toFixed(2)}</span>
    //         )}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <>
      
      <div className='container m-auto lg:max-w-[1024px]'>
      <div className='max-w-[745px] lg:ml-56'>
        <SliderMain/>
        <div className='mt-3'>
          <Three/>
        </div>
        
      </div>
        <ProductsList data={products} />
      </div>
    </>
  );
}

export default Main;
