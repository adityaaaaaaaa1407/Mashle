import Image1 from "../../assets/category/earphone.png";
import Image3 from "../../assets/all_images/speaker2.webp";
import Image2 from "../../assets/all_images/watch_1.webp";
import Button from "./../Shared/Button";

const Category = () => {
  return (
    <div className="py-8 bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          {/* first col */}
          <div
            className="py-10 pl-5 md:col-span-3 col-span-12
          bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end "
          >
            <div>
              <div className="mb-4 ">
                <p className="mb-[2px] text-gray-400">Enjoy </p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-6">
                  Earphone
                </p>

                <div className="pt-3">
                  <Button
                    text="Browse "
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
            <img
              src={Image1}
              alt="earphone"
              className="w-[320px] absolute  bottom-0"
            />
          </div>
          {/* second col */}

          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 sm:col-span-3 col-span-12
           text-white rounded-3xl relative h-[320px] flex flex-auto "
          >
            <div>
              <div className="mb-4 ">
                <p className=" mb-[2px]text-white text-3xl mb-4">Enjoy </p>
                <p className=" mb-[2px]text-white text-3xl mb-4">with </p>

                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">
                  .
                </p>

                <div className="pt-3">
                  <Button
                    text="Browse "
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
            <img
              src={Image2}
              alt="earphone"
              className="w-[320px] absolute -right-3 lg:top-[20px] "
            />
          </div>
          {/* Third col */}

          <div
            className="py-10 pl-5  bg-gradient-to-br from-black/90 to-black/70 sm:col-span-6 col-span-12
          text-white rounded-3xl relative h-[320px] flex items-end "
          >
            <div className="">
              <div className="mb-4">
                <p className=" mb-[2px]text-white text-3xl mb-4">Enjoy </p>
                <p className=" mb-[2px]text-white md:text-3xl mb-4">with </p>

                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-8">
                  Speakers
                </p>

                <Button
                  className=" rounded-xl"
                  text="Browse "
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="earphone"
              className="w-[320px] absolute top-1/2
              -translate-y-1/2 -right-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
