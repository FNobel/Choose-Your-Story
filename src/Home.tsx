/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Tabs from "./Tabs";
import park from "../public/static/throughThePark.svg";
import Story from "./Story";

export default function Home() {
  return (
    <div>
      {/* Main content goes here */}
      <main className="mt-16 mb-32">
        {/* You can center-align containers with a width */}
        <div className="max-w-lg mx-auto py-16">
          {/* You can also center-align text */}
          <h1 className="text-3xl font-bold ml-4 mb-8 text-center py-8">
            Choose your adventure
          </h1>

          <Story />

          {/* Use margins and paddings to create space */}
          <div className="flex justify-center">
            <p className="text-center mt-12 p-4">
              You are in a dream. Ahead of you are 3 distinct paths to take. Which one will you choose?
            </p>
          </div>
        </div>

        {/* Use Flexbox to center-align other elements */}
        <div className="flex items-center justify-center mt-4">
          <Link to="/opening">
            <button className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 text-white font-bold text-xl">
              Start
            </button>
          </Link>
        </div>
      </main>

      {/* Change this as needed */}
      <Tabs>
        <nav className="p-4">
          <Link to="/">Home</Link>
        </nav>
      </Tabs>

      {/* You can change the width of the menu */}
      <Menu width={250} className="p-5 bg-green-100 rounded-full">
        {/* Content of the menu, like links, go here*/}
        {/* Give it a background colour as necessary */}
        <nav className="mt-32 hover:rounded-full hover:bg-blue-300 p-5">
          <Link to="/">Home</Link>
        </nav>
      </Menu>
    </div>
  );
}
