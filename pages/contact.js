import React from "react";

const Contact = () => {
  return (
    <>
      {/* <!-- Contact Section: Design Block --> */}
      <hr/>
      <section class="mb-20 text-gray-800 mt-20">
        <div class="flex flex-wrap">
          <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
            <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>
            <p class="font-bold mb-2">Anim pariatur cliche reprehenderit?</p>
            <p class="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              autem numquam dolore molestias aperiam culpa alias veritatis
              architecto eos, molestiae vitae ex eligendi libero eveniet
              dolorem, doloremque rem aliquid perferendis.
            </p>
            <p class="font-bold mb-2">Non cupidatat skateboard dolor brunch?</p>
            <p class="text-gray-500 mb-6">
              Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
              magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
              iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
              unde quod modi magnam ab deserunt ipsam sint aliquid dolores
              libero repellendus cupiditate mollitia quidem dolorem odit
            </p>
            <p class="font-bold mb-2">
              Praesentium voluptatibus temporibus consequatur non aspernatur?
            </p>
            <p class="text-gray-500 mb-6">
              Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
              deserunt ipsam sint aliquid dolores libero repellendus cupiditate
              mollitia quidem dolorem.
            </p>

            <p class="font-bold mb-2">
              Voluptatum magnam sed fugit iusto minus et suscipit?
            </p>
            <p class="text-gray-500">
              Laudantium perferendis, est alias iure ut veniam suscipit dolorem
              fugit. Et ipsam corporis earum ea ut quae cum non iusto blanditiis
              ipsum dolor eius reiciendis, velit adipisci quas.
            </p>
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
            <p class="font-bold mb-6">
              Didn't find your answer in the FAQ? Contact our sales
            </p>
            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div>
              <button
                type="submit"
                class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section: Design Block --> */}
    </>
  );
};

export default Contact;
