import React from "react";

const NavBar = () => {
  return (
    <div>
      <div class="flex flex-col sm:w-22 md:w-42 lg:w-52 xl:w-64 h-screen bg-blue-800 p-4">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-white">NFT Minters</h1>
        </div>
        <nav>
          <ul class="flex flex-col justify-between">
            <li class="mb-2">
              <a href="#" class="text-gray-300 hover:text-white text-2xl font-bold">
                Home
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-300 hover:text-white text-2xl font-bold">
                About
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-300 hover:text-white text-2xl font-bold">
                Crypto News
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
