import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <hr />
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-5 relative">
        <div class="bg-cover h-96 text-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1677798462220-e7b9a383c476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=676" />
        </div>
        <div class="max-w-2xl mx-auto">
          <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div class="">
              <a
                href="#"
                class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Election
              </a>
              ,{" "}
              <a
                href="#"
                class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Politics
              </a>
              <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2">
                {slug}
              </h1>
              <p class="text-gray-700 text-sm mt-2 font-bold">
                Written By:
                <a
                  href="#"
                  class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out ml-2"
                >
                  Kandarp Prajapati
                </a>
              </p>
              <p class="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h3 class="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
              <p class="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </blockquote>
              <p class="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Election
              </a>
              ,{" "}
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                people
              </a>
              ,{" "}
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Election2020
              </a>
              ,{" "}
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                trump
              </a>
              ,
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Joe
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Credit: Componentity.com --> */}
      <a href="https://componentity.com" target="_blank" class="block">
        <img
          src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
          class="w-48 mx-auto my-5"
        />
      </a>
    </>
  );
};

export default slug;
