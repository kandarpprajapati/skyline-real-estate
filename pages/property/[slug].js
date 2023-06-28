import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Property from "../../models/Property";
import mongoose from "mongoose";

const PropertyDetails = ({property}) => {
  const router = useRouter();

  console.log(property);

  return (
    <>
      <div class="flex flex-col md:flex-row mx-auto w-full items-center justify-between">
        <div class="w-1/3 p-6 mx-auto">
          <img
            src={property.images}
            alt="Property Image"
            class="w-full"
          />
        </div>
        <div class="md:w-2/4 p-6">
          <h1 class="text-3xl font-bold mb-4">Property Details</h1>
          <div class="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <p class="text-lg">Property Name: {property.name}</p>
          </div>
          <div class="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M3 14h18M3 6h18M3 18h18"
              ></path>
            </svg>
            <p class="text-lg">Location: {property.building_no} {property.address}</p>
          </div>
          <div class="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <p class="text-lg">Bedrooms: {property.bedrooms}</p>
          </div>
          <div class="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <p class="text-lg">Halls: {property.halls}</p>
          </div>
          <div class="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <p class="text-lg">Kitchen: {property.kitchen}</p>
          </div>
          <div class="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <p class="text-lg">{property.other_facilities}</p>
          </div>
          <div class="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <p class="text-lg">Price: {property.price}</p>
          </div>
          <div class="flex mb-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 ml-32">
        <h2 class="text-2xl font-bold mb-4">Owner Details</h2>
        <div class="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3C6.48 3 2 7.48 2 13c0 3.866 2.303 7.13 5.614 8.616.402.154.843.384 1.314.68.47.297.956.665 1.444 1.096.472.417.979.707 1.585.707.292 0 .582-.058.855-.173A6.964 6.964 0 0 0 12 21a6.964 6.964 0 0 0 5.192-2.795c.273.115.563.173.855.173.606 0 1.113-.29 1.585-.707.488-.43.974-.799 1.445-1.096.472-.296.912-.526 1.314-.68C21.697 20.13 24 16.866 24 13c0-5.52-4.48-10-10-10zm0 2c3.866 0 7 3.134 7 7 0 3.037-2.07 5.58-4.857 6.292-.652.158-1.32.24-2.014.24s-1.362-.082-2.014-.24C7.07 17.58 5 15.037 5 12c0-3.866 3.134-7 7-7zm1 7h2m-2 4h2m-4 0h2m-4-4h2"
            ></path>
          </svg>
          <p class="text-lg">Owner Name: John Doe</p>
        </div>
        <div class="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 22V12m6 10V12"
            ></path>
          </svg>
          <p class="text-lg">Contact Number: 123-456-7890</p>
        </div>
        <div class="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 22V12m6 10V12"
            ></path>
          </svg>
          <p class="text-lg">Email: john.doe@example.com</p>
        </div>
        <div class="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <p class="text-lg">Address: 123 Main St, City</p>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb://localhost:27017/skyline");
  }

  const property = await Property.findOne({ slug: context.query.slug });

  return {
    props: { property: JSON.parse(JSON.stringify(property))},
  };
}

export default PropertyDetails;
