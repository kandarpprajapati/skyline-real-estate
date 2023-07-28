import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAccount = () => {
  const [userinfo, setUserinfo] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    npassword: "",
    cpassword: "",
  });

  const [token, setToken] = useState({ value: null });
  const router = useRouter();

  useEffect(() => {
    let token1 = localStorage.getItem("token");
    // console.log(typeof(token1));
    const user = localStorage.getItem("myuser");
    if (!token1) {
      router.push("/");
    }
    if (token1 && user) {
      setToken(token1);
      setUserinfo((prevState) => ({ ...prevState, email: user }));
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
    setUserinfo((prevState) => ({
      ...prevState,
      name: response.name,
      mobile: response.mobile,
      address: response.address,
    }));
    console.log(response);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserinfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      token: token,
      name: userinfo.name,
      mobile: userinfo.mobile,
      address: userinfo.address,
    };
    console.log(data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    console.log(response);

    if (response.success) {
      toast.success("Profile Updated !!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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

  const handleSubmitPassword = async (event) => {
    event.preventDefault();

    if (userinfo.npassword == userinfo.cpassword) {
      let data = {
        token: token,
        npassword: userinfo.npassword,
      };
      console.log(data);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const response = await res.json();
      console.log(response);

      if (response.success) {
        toast.success("Paasword Updated !!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setUserinfo((prevState) => ({
          ...prevState,
          npassword: "",
          cpassword: "",
        }));

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
    } else {
      toast.error("Password and Confirm Password are not same !!", {
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
        position="bottom-left"
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
                Update Your Account
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Personal Information
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Name
                    </label>
                    <input
                      value={userinfo.name}
                      className="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      placeholder="Alex Doe"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Street Address
                      </label>
                      <textarea
                        value={userinfo.address}
                        className="w-full shadow-inner p-4 border-0"
                        name="address"
                        placeholder="D-19 Amit society, Airport, Mumbai"
                        rows={5}
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
                      Mobile
                    </label>
                    <input
                      value={userinfo.mobile}
                      className="w-full shadow-inner p-4 border-0"
                      type="tel"
                      name="mobile"
                      placeholder="+91 9986235642"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Email (Can't be changed)
                    </label>
                    <input
                      value={userinfo.email}
                      className="w-full shadow-inner p-4 border-0 bg-gray-50 disabled:opacity-80"
                      type="email"
                      name="email"
                      placeholder="contact@gmail.com"
                      disabled="disabled"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream">
                <div className="md:flex-1 px-3 text-center">
                  <input type="hidden" name="sponsor" value="0" />
                  <input
                    className="inline-block mt-6 rounded shadow py-2 px-8 no-underline border-0 text-gray-50 hover:bg-red-700 cursor-pointer bg-red-500"
                    type="submit"
                    value="Update"
                  />
                </div>
              </div>
            </form>
          </section>
          <section className="p-4 shadow bg-slate-100 mt-8">
            <div className="md:flex">
              <h2 className="md:w-1/3 uppercase tracking-wide text-sm font-semibold sm:text-lg mb-6">
                Update Account Password
              </h2>
            </div>
            <form onSubmit={handleSubmitPassword}>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm mt-2">
                    Change Password
                  </legend>
                </div>
                <div className="md:flex-1 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      New Password
                    </label>
                    <input
                      value={userinfo.npassword}
                      className="w-full shadow-inner p-4 border-0"
                      type="password"
                      name="npassword"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Confirm Password
                    </label>
                    <input
                      value={userinfo.cpassword}
                      className="w-full shadow-inner p-4 border-0"
                      type="password"
                      name="cpassword"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream">
                <div className="md:flex-1 px-3 text-center">
                  <input type="hidden" name="sponsor" value="0" />
                  <input
                    className="inline-block mt-6 rounded shadow py-2 px-8 no-underline border-0 text-gray-50 hover:bg-red-700 cursor-pointer bg-red-500"
                    type="submit"
                    value="Update"
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

export default MyAccount;

// export const getServerSideProps = async (context) => {
//   let error = null;
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect("mongodb://localhost:27017/skyline");
//   }

//   let u = context.req.cookies.user;
//   let dbUser = await User.findOne({ email: u });
//   // let dbUser = await User.find()
//   return {
//     props: { user: JSON.parse(JSON.stringify(dbUser)) },
//   };
// };
