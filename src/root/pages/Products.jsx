import { products } from "../DB/products";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div> </div>
      <div className="grid  md:grid-cols-5 grid-cols-2 sm:gap-8 gap-4 relative">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card bg-white dark:text-black rounded-xl shadow-lg"
          >
            <img
              src={product.imgUrl}
              className="w-full h-auto object-cover border-2 border-none bg-zinc-400 rounded-t-xl"
            />
            <div className="flex flex-col justify-between p-2">
              <div className="flex flex-row gap-2 text-black dark:text-black">
                <h3 className=" text-xs font-normal  flex mt-0.5 text-blue-700">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />
                </h3>
                <h3 className="text-xs  font-normal ">
                  {product.reviews} reviews
                </h3>
              </div>

              <h3 className="sm:text-lg text-sm font-bold mb-1">
                {product.productTitle}
              </h3>
              <div className="flex flex-row gap-2  relative">
                <p className="sm:text-lg text-sm text-blue-500 font-bold">
                  Rs.{product.productPrice}
                </p>
                <p className="text-gray-500 font-bold sm:text-lg text-sm line-through mt-0.5">
                  Rs.{product.productOgPrice}
                </p>
              </div>
            </div>
            <p className=" text-xs   ml-2 text-black dark:text-black">
              <h3 className="mb-1">1.54 inch display</h3>
              <h3 className="mb-1">Temperature Monitoring</h3>
              <h3> 100+ cloud watch faces</h3>
            </p>

            <button
              type="submit"
              className="relative inline-block items-center sm:px-5 px-2 sm:py-2 py-1 bg-blue-700 hover:bg-black text-white font-normal rounded-xl focus:outline-none text-sm   focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3 mb-3 ml-2"
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
