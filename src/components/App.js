import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

export default function App() {
  const items = [
    {
      title: "What is React?",
      content: "React is a front end Javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}
