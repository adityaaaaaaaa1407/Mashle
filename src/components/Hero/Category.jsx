import { Link } from "react-router-dom";
import { categories } from "@/root/DB/data";

const Category = () => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-6  grid-cols-2 gap-2 bg-white dark:bg-gray-900 dark:text-white ">
        {categories.map((category) => (
          <div key={category.id}>
            <Link to="/products">
              <div className="container p-2 ">
                <img
                  id={category.id}
                  src={category.src}
                  className="w-full h-auto object-cover border-2 border-none  bg-stone-200 rounded-2xl "
                />

                <p className="sm:text-lg text-sm mt-2 text-center">
                  {category.type}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
