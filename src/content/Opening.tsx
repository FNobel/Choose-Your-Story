/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
// Note the relative path of the Menu module is different
import Menu from "../Menu";

export default function Page1() {
  return (
    <div>
      <main className="mt-16">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold ml-4 text-center">
            The start of something new
          </h1>
          <p className="mt-4 p-4">Description goes here. Replace me.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <Link to="#" className="block p-4 text-blue-700 font-bold">
            Choice 1
          </Link>
          <Link to="#" className="block p-4 text-blue-700 font-bold">
            Choice 2
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
