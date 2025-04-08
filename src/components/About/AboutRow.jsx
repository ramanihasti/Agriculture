import React from "react";
import Carousal from "./Carousal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function AboutRow() {
  return (
    <div className="grid grid-cols-2 p-8 bg-[#e0f2f1b8]">
      <div>
        <ul className="flex flex-col">
          <li className="flex flex-row p-6 gap-6 border-t-[1px] border-l-[1px] border-b-[1px] border-r-[1px] rounded-sm bg-gray-100 ">
            <FontAwesomeIcon
              icon={faClock}
              className="text-xl text-[#303030]"
            />
            <div>
              <p>Morden and clean design</p>
              <p className="max-w-96">
                Far far away, behind the word mountains, far from the countries.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div>{/* <Carousal /> */}</div>
    </div>
  );
}

export default AboutRow;
