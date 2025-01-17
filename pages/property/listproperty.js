import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { images } from "@/next.config";

const ListProperty = () => {
  // useEffect(() => {
  //     const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`;
  //     const form = document.querySelector("form");
  // }, []);

  // const [pimg,setPImg] = useState();

  const [property, setProperty] = useState({
    name: "",
    building_no: "",
    address: "",
    mobile: "",
    email: "",
    list_for: "",
    plot_area: "",
    bedrooms: "",
    halls: "",
    kitchen: "",
    other_facilities: "",
    price: "",
    description: "",
    images: "",
    slug: "",
  });

  const [token, setToken] = useState({ value: null });

  useEffect(() => {
    let token1 = localStorage.getItem("token");
    // console.log(typeof(token1));
    const user = localStorage.getItem("myuser");
    if (!token1) {
      router.push("/");
    }
    if (token1 && user) {
      setToken(token1);
      setProperty((prevState) => ({ ...prevState, email: user }));
      fetchData(token1);
      // console.log(token);
      // console.log(userinfo);
    }
  }, []);

  const fetchData = async (token) => {
    let data = { token: token };
    console.log(data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    setProperty((prevState) => ({
      ...prevState,
      mobile: response.mobile,
    }));
    console.log(response);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProperty((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setProperty((prevState) => ({
      ...prevState,
      slug: property.name.replace(/\s+/g, "-").toLowerCase(),
    }));
  }, [property.name]);

  const submitImage = async (event) => {
    event.preventDefault();
    // console.log(property);

    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "kandarp");
    formData.append("cloud_name", "skylinerealestate");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/skylinerealestate/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const response = await res.json();
    console.log("cloudinary response 2", response);
    property.images = response.url;
    console.log("image set response 3", property.images);
    // setProperty((prevState) => ({ ...prevState, images: response.public_id }));
    // console.log("image set response 4", property.images);

    // setProperty((prevState) => ({
    //   ...prevState,
    //   slug: property.name.replace(/\s+/g, "-").toLowerCase(),
    // }));
    // console.log("slug response 4", property.slug);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("property-response 1", property);
    await submitImage(event);

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproperty`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });

    const response = await res.json();
    console.log("add api response 5", response);

    if (response.success) {
      setProperty({
        name: "",
        building_no: "",
        address: "",
        mobile: "",
        email: "",
        list_for: "",
        plot_area: "",
        bedrooms: "",
        halls: "",
        kitchen: "",
        other_facilities: "",
        price: "",
        description: "",
        images: "",
        slug: "",
      });
      toast.success("Your property has been added !!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // setTimeout(() => {
      //   router.push("/");
      // }, 1000);
    } else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 flex flex-col mb-8">
          <section className="p-4 shadow bg-slate-100">
            <div className="md:flex">
              <h2 className="md:w-1/3 uppercase tracking-wide text-sm font-semibold sm:text-lg mb-6">
                List Property
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Location
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Name
                    </label>
                    <input
                      value={property.name}
                      className="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      placeholder="NR House"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Street Address
                      </label>
                      <input
                        value={property.address}
                        className="w-full shadow-inner p-4 border-0"
                        type="text"
                        name="address"
                        placeholder="Amit society, Airport, Mumbai"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:flex-1 md:pl-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Building No.
                      </label>
                      <input
                        value={property.building_no}
                        className="w-full shadow-inner p-4 border-0"
                        type="text"
                        name="building_no"
                        placeholder="A-3"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Contact
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Mobile [can't be changed]
                    </label>
                    <input
                      value={property.mobile}
                      className="w-full shadow-inner p-4 border-0 disabled:opacity-60 disabled:bg-gray-50"
                      type="tel"
                      name="mobile"
                      placeholder="+91 9986235642"
                      disabled="disabled"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Email [can't be changed]
                    </label>
                    <input
                      value={property.email}
                      className="w-full shadow-inner p-4 border-0 disabled:opacity-60 disabled:bg-gray-50"
                      type="email"
                      name="email"
                      placeholder="contact@gmail.com"
                      disabled="disabled"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Listing For
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      {/* <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Plot Area
                      </label> */}
                      <div className="w-full flex">
                        <select
                          value={property.list_for}
                          id="list_for"
                          name="list_for"
                          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={handleChange}
                        >
                          <option>Select</option>
                          <option value="sell">Sell</option>
                          <option value="rent">Rent</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Configuration
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Plot Area
                      </label>
                      <div className="w-full flex">
                        <input
                          value={property.plot_area}
                          className="flex-1 shadow-inner p-4 border-0"
                          type="text"
                          name="plot_area"
                          placeholder="1000 sq.ft."
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Bedrooms
                      </label>
                      <div className="w-full flex">
                        <input
                          value={property.bedrooms}
                          className="flex-1 shadow-inner p-4 border-0"
                          type="text"
                          name="bedrooms"
                          placeholder="2"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Halls
                      </label>
                      <div className="w-full flex">
                        <input
                          value={property.halls}
                          className="flex-1 shadow-inner p-4 border-0"
                          type="text"
                          name="halls"
                          placeholder="1"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Kitchen
                      </label>
                      <div className="w-full flex">
                        <input
                          value={property.kitchen}
                          className="flex-1 shadow-inner p-4 border-0"
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
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Other Facilities
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <input
                    value={property.other_facilities}
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    name="other_facilities"
                    placeholder="Swimming Pool, Garden, Parking, Gym etc."
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Pricing
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <input
                    value={property.price}
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    name="price"
                    placeholder="₹85 Lacs OR ₹10000/month"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Description
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <textarea
                    value={property.description}
                    name="description"
                    className="w-full shadow-inner p-4 border-0"
                    placeholder="Description"
                    rows="6"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="mb-4 hidden">
                <label className="block uppercase tracking-wide text-xs font-bold">
                  slug
                </label>
                <input
                  value={property.slug}
                  // value="dsjfdjfd"
                  className="w-full shadow-inner p-4 border-0"
                  type="text"
                  name="p_id"
                  placeholder="1"
                  onChange={handleChange}
                />
              </div>
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Property Images
                  </legend>
                </div>
                <div className="md:flex-1 px-3 text-center">
                  <div className="hover:bg-gold-dark mx-auto relative inline-block mt-6 rounded shadow py-2 px-4 no-underline border-0 text-gray-50 hover:bg-red-700 bg-red-500">
                    <input
                      // value={property.images}
                      className="opacity-0 absolute cursor-pointer"
                      type="file"
                      name="images"
                      onChange={handleChange}
                      multiple
                    />
                    Add Images
                  </div>
                  {/* <input
                      value={property.images}
                      className="opacity-0 absolute cursor-pointer hidden"
                      type="text"
                      name="images"
                      onChange={handleChange}
                    /> */}
                </div>
              </div>
              <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream">
                <div className="md:flex-1 px-3 text-center md:text-right">
                  <input type="hidden" name="sponsor" value="0" />
                  <input
                    className="inline-block mt-6 rounded shadow py-2 px-4 no-underline border-0 text-gray-50 hover:bg-red-700 cursor-pointer bg-red-500"
                    type="submit"
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
