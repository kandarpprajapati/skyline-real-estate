import React, { useState } from "react";

const properties = [
  {
    id: 1,
    name: "Property 1",
    price: "100,000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Property 2",
    price: "200,000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Property 3",
    price: "300,000",
    image: "https://via.placeholder.com/300x200",
  },
];

const BuyProperty = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999999);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      parseInt(property.price.replace(",", "")) >= minPrice &&
      parseInt(property.price.replace(",", "")) <= maxPrice
  );

  return (
    <div className="container mx-auto mb-9">
      <h1 className="text-4xl font-bold my-8">Buy Property</h1>
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search property name"
            className="w-full border border-gray-300 p-2 rounded-lg"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <div className="w-full md:w-1/3">
          <input
            type="number"
            placeholder="Min Price"
            className="w-full border border-gray-300 p-2 rounded-lg"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="w-full md:w-1/3">
          <input
            type="number"
            placeholder="Max Price"
            className="w-full border border-gray-300 p-2 rounded-lg"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="border border-gray-300 rounded-lg p-4"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{property.name}</h2>
            <p className="text-gray-600 my-2">${property.price}</p>
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              View Property
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyProperty;
