import React, { useState, useEffect } from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Property from "../../models/Property";

const BuyProperty = ({ property }) => {
  const [img, setImg] = useState({});

  useEffect(() => {
    console.log(property);
    // while(property.images != undefined) {
    //   setImg({ imges: property.images });
    // }
    // console.log({ img });

    // console.log(property[0].images);
    // fetchImage();
  }, []);

  // const fetchImage = async () => {
  //   const res = await fetch(`${property[0].images}`);
  //   const data = await res.json();
  //   console.log(data);
  // };

  return (
    <>
    <div id="propertySec" className="bg-slate-100 w-full py-10 overflow-hidden">
      <div className="text-3xl font-semibold text-center">Properties</div>
      <div className="w-full -mx-4 justify-center pt-6 flex">
        {property.map((property) => {
          return (
            <div
              key={property.slug}
              className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
            >
              <Link
                href={`/property/${property.slug}`}
                className="block rounded-lg p-4 shadow-sm shadow-indigo-400 bg-slate-50"
              >
                <img
                  alt="Home"
                  src={img}
                  className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                  <div>
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                        {property.list_for}
                      </span>
                      <span className="inline-block px-3 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs ml-3">
                        Banglow
                      </span>
                    </div>
                    <div className="ml-1">
                      <div className="sr-only">Address</div>

                      <div className="font-medium">
                        {property.building_no} {property.address}
                      </div>
                    </div>

                    <div className="ml-1">
                      <div className="sr-only">Price</div>

                      {property.list_for == "rent" ? (
                        <div className="text-base text-gray-900">
                          Rs. {property.price} / month
                        </div>
                      ) : (
                        <div className="text-base text-gray-900">
                          Rs. {property.price}
                        </div>
                      )}
                    </div>

                    <div className="ml-1 mt-3">
                      <div className="sr-only">Other Facilities</div>

                      <div className="text-sm font-normal">
                        With {property.other_facilities}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-8 text-xs ml-1">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg
                        className="h-4 w-4 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Bedroom</p>

                        <p className="font-medium">{property.bedrooms} rooms</p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg
                        className="h-4 w-4 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Hall</p>

                        <p className="font-medium">{property.halls} Hall</p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg
                        className="h-4 w-4 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Kitchen</p>

                        <p className="font-medium">
                          {property.kitchen} kitchen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default BuyProperty;

export async function getStaticProps() {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb://localhost:27017/skyline");
  }
  const property = await Property.find();
  // const property = await Property.find({}).sort({createdAt: 'desc'}).limit(3).exec()
  return {
    props: { property: JSON.parse(JSON.stringify(property)) },
  };
}
