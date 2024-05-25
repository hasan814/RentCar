"use client";

import CustomBtn from "../elements/CustomBtn";

const Hero = () => {
  // =========== Function ===========
  const handleScroll = () => {};

  // =========== Rendering ===========
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or Rent a car -- quickly and easily!
        </h1>
        <p className="">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomBtn
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
