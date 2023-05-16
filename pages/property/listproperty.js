import React,{useState} from "react";

const ListProperty = () => {

  const [property, setProperty] = useState({
    name: '',
    building_no:'',
    address_street:'',
    mobile:'',
    email:'',
    list_for:'',
    plotarea:'',
    bedrooms:'',
    hall:'',
    kitchen:'',
    price: '',
    description: '',
    images: '',
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
    <>
      <div class="min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <main class="flex-1 md:p-0 lg:pt-8 lg:px-8 flex flex-col mb-8">
          <section class="p-4 shadow bg-slate-100">
            <div class="md:flex">
              <h2 class="md:w-1/3 uppercase tracking-wide text-sm font-semibold sm:text-lg mb-6">
                List Property
              </h2>
            </div>
            <form>
              <div class="md:flex mb-8">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm mt-2">
                    Location
                  </legend>
                </div>
                <div class="md:flex-1 mb:mt-0 md:px-3">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-xs font-bold">
                      Name
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      placeholder="NR House"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="md:flex mb-4">
                    <div class="md:flex-1 md:pr-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Street Address
                      </label>
                      <input
                        class="w-full shadow-inner p-4 border-0"
                        type="text"
                        name="address_street"
                        placeholder="Amit society, Airport, Mumbai"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="md:flex-1 md:pl-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Building No.
                      </label>
                      <input
                        class="w-full shadow-inner p-4 border-0"
                        type="text"
                        name="building_no"
                        placeholder="A-3"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex mb-8">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm mt-2">
                    Contact
                  </legend>
                </div>
                <div class="md:flex-1 mb:mt-0 md:px-3">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-xs font-bold">
                      Mobile
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="tel"
                      name="mobile"
                      placeholder="+91 9986235642"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Email
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="email"
                      name="email"
                      placeholder="contact@gmail.com"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class="md:flex">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm mt-2">
                    Listing For
                  </legend>
                </div>
                <div class="md:flex-1 mb:mt-0 md:px-3">
                  <div class="md:flex mb-4">
                    <div class="md:flex-1 md:pr-3">
                      {/* <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Plot Area
                      </label> */}
                      <div class="w-full flex">
                        <select
                          id="list_for"
                          name="list_for"
                          class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={handleChange}
                        >
                          <option selected>Select</option>
                          <option value="sell">Sell</option>
                          <option value="rent">Rent</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm mt-2">
                    Configuration
                  </legend>
                </div>
                <div class="md:flex-1 mb:mt-0 md:px-3">
                  <div class="md:flex mb-4">
                    <div class="md:flex-1 md:pr-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Plot Area
                      </label>
                      <div class="w-full flex">
                        <input
                          class="flex-1 shadow-inner p-4 border-0"
                          type="text"
                          name="plotarea"
                          placeholder="1000 sq.ft."
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Bedrooms
                      </label>
                      <div class="w-full flex">
                        <input
                          class="flex-1 shadow-inner p-4 border-0"
                          type="text"
                          name="bedrooms"
                          placeholder="2"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="md:flex mb-4">
                    <div class="md:flex-1 md:pr-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Hall
                      </label>
                      <div class="w-full flex">
                        <input
                          class="flex-1 shadow-inner p-4 border-0"
                          type="text"
                          name="hall"
                          placeholder="1"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Kitchen
                      </label>
                      <div class="w-full flex">
                        <input
                          class="flex-1 shadow-inner p-4 border-0"
                          type="text"
                          name="kitchen"
                          placeholder="1"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex mb-6">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm mt-2">
                    Pricing
                  </legend>
                </div>
                <div class="md:flex-1 mb:mt-0 md:px-3">
                  <input
                    class="w-full shadow-inner p-4 border-0"
                    type="text"
                    name="price"
                    placeholder="₹85 Lacs OR ₹10000/month"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div class="md:flex mb-6">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm mt-2">
                    Description
                  </legend>
                </div>
                <div class="md:flex-1 mb:mt-0 md:px-3">
                  <textarea
                    name="description"
                    class="w-full shadow-inner p-4 border-0"
                    placeholder="Description and other Facilities"
                    rows="6"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div class="md:flex mb-6">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm mt-2">
                    Property Images
                  </legend>
                </div>
                <div class="md:flex-1 px-3 text-center">
                  <div class="hover:bg-gold-dark mx-auto relative inline-block mt-6 rounded shadow py-2 px-4 no-underline border-0 text-gray-50 hover:bg-red-700 bg-red-500">
                    <input
                      class="opacity-0 absolute cursor-pointer"
                      type="file"
                      name="images"
                      onChange={handleChange}
                      multiple
                    />
                    Add Images
                  </div>
                </div>
              </div>
              <div class="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream">
                <div class="md:flex-1 px-3 text-center md:text-right">
                  <input type="hidden" name="sponsor" value="0" />
                  <input
                    class="inline-block mt-6 rounded shadow py-2 px-4 no-underline border-0 text-gray-50 hover:bg-red-700 cursor-pointer bg-red-500"
                    type="submit"
                    value="List Property"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default ListProperty;
