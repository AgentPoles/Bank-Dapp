import React from "react";

const UserHero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Manage and Make the best of your reward tokens in one App
              <br class="hidden lg:inline-block " />
            </h1>
            <p class="text-indigo-500 text-2xl mb-8">
              Build your purchase Portfolio
            </p>

            <div class="flex justify-center">
              <button class="inline-flex text-indigo-500 border-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-slate-100 rounded-full text-sm -mr-0.5">
                Store
              </button>
              <button class="inline-flex text-indigo-500 border-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-slate-100 rounded-full text-sm -mr-0.5">
                Manage
              </button>{" "}
              <button class="inline-flex text-indigo-500 border-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-slate-100 rounded-full text-sm -mr-0.5">
                Offers
              </button>{" "}
              <button class="inline-flex text-indigo-500 border-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-slate-100 rounded-full text-sm -mr-0.5">
                Spend
              </button>{" "}
              <button class="inline-flex text-indigo-500 border-indigo-500 border-2 py-2 px-4 focus:outline-none hover:bg-slate-100 rounded-full text-sm">
                Track
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserHero;
