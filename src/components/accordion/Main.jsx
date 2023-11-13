import React from "react";
import { data } from "./data";
import { Accordion } from "./Accordion";

export const Main = () => {
  return (
    <div>
      <div>
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
  );
};