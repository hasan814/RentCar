import { v4 as uuidv4 } from "uuid";
import { fetchCars } from "@/utils";

import CardCard from "@/components/modules/CardCard";
import CustomFilter from "@/components/modules/CustomFilter";
import SearchBar from "@/components/modules/SearchBar";
import Hero from "@/components/templates/Hero";

const Home = async () => {
  // =========== Fetch Data =============
  const allCars = await fetchCars();
  const isEmptyData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // =========== Rendering =============
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" />
            <CustomFilter title="Year" />
          </div>
        </div>
        {!isEmptyData ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CardCard key={uuidv4()} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
