const child = React.createElement("div", { class: "h1" }, "Hey Siraj");
const subparent = React.createElement("div", { class: "sub-head" }, child);

const child2 = React.createElement("div", { class: "h12" }, "Hey Siraj 2");
const subparent2 = React.createElement("div", { class: "sub-head2" }, child2);

const parent = React.createElement("div", { class: "head" }, [
  subparent,
  subparent2,
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
