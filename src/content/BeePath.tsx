/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
// Note the relative path of the Menu module is different
import Menu from "../Menu";
import door from "../public/static/TheDoor.jpeg";

interface Bee {}

export default function BeeStory() {
  return (
    <div>
      <main className="mt-16">
        <div className="max-w-lg mx-auto">

        <img src="" alt=""/>

          <h1 className="text-3xl font-bold ml-4 text-center">The Door</h1>
          <p className="text-center mt-4 p-4">
            You walk towards the first path surrounded with trees. As you get
            closer, you feel the glow of the sun shining from the door ahead of
            you.{" "}
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center max-w-lg mx-auto">
          <Link to="#" className=" block p-4 text-blue-700 font-bold">
            <button className="p-5 bg-green-500 font-bold hover:bg-green-300 text-white rounded">
              Enter through the door
            </button>
          </Link>
          <Link to="#" className="block p-4 text-blue-700 font-bold">
            <button className="p-5 bg-green-500 font-bold hover:bg-green-300 text-white rounded">
              Step back, pick another path
            </button>
          </Link>
        </div>
      </main>

      <Menu width={250} className="p-4">
        <nav className="p-4">
          <Link to="/">Main Page</Link>
        </nav>
      </Menu>
    </div>
  );
}
