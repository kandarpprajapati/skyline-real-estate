import React,{useState} from 'react'

const SellProperty = () => {

    const [property, setProperty] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setProperty((prevState) => ({ ...prevState, [name]: value }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(property);
      };

  return (
    <div className="flex flex-col items-center pt-11 pb-11">
      <h1 className="text-4xl font-bold mb-4">Add Property</h1>
      <form className="w-1/2" onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full mb-4 border border-gray-400 p-2"
          type="text"
          name="name"
          value={property.name}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-full mb-4 border border-gray-400 p-2"
          name="description"
          value={property.description}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="w-full mb-4 border border-gray-400 p-2"
          type="number"
          name="price"
          value={property.price}
          onChange={handleChange}
          required
        />
        <label className="block mb-2" htmlFor="image">
          Image
        </label>
        <input
          className="w-full mb-4 border border-gray-400 p-2"
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SellProperty