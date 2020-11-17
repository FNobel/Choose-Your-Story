import React from "react";
import bee from "../public/static/Bee.svg";
import flower from "../public/static/Flower.svg";
import food from "../public/static/Food.svg";
import { Link } from "react-router-dom";

export default function Story() {
  return (
    <div className="flex justify-between bg-grey-300">
      <Link to="/PageBee">
        <button className=" hover:opacity-75  mx-2">
          <img src={bee} alt="startAdventure" />
        </button>
      </Link>

      <button className="hover:opacity-75 mx-2">
        <img src={flower} alt="startAdventure" />
      </button>
      <button className="hover:opacity-75 mx-2">
        <img src={food} alt="startAdventure" />
      </button>
    </div>
  );
}
