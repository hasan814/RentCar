"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constant";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";

const SearchManufacturere = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  // =========== State ============
  const [query, setQuery] = useState("");

  // =========== Functions ============
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // =========== Rendering ============
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Transition
          enter="duration-200 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="duration-300 ease-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="origin-top transition empty:hidden"
          >
            {filteredManufacturers.map((item) => (
              <ComboboxOption
                key={uuidv4()}
                value={item}
                className="relative search-manufacturer__option data-[focus]:bg-primary-blue"
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-teal-600"
                        }`}
                      ></span>
                    ) : null}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturere;
