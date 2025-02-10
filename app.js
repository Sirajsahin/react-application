import React from "react";
import ReactDOM from "react-dom/client";

const child = React.createElement(
  "div",
  { class: "h1" },
  "Hey Sirdscjhbdsjhbsjcsdaj"
);
const subparent = React.createElement("div", { class: "sub-head" }, child);

const child2 = React.createElement(
  "div",
  { class: "h12" },
  "Hey dsbjbsjbjsdbcjsddshv  hvs 2"
);
const subparent2 = React.createElement(
  "div",
  { class: "sub-xsbsjchbdsjhcbjsdbcjds" },
  child2
);

const parent = React.createElement("div", { class: "head" }, [
  subparent,
  subparent2,
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
