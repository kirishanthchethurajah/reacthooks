import React, { useEffect, useState } from "react";

function WindowsSizeChangeFunctions(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  const UpdateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    window.addEventListener("resize", UpdateWindowWidth);

    return () => {
      window.removeEventListener("resize", UpdateWindowWidth);
      setItems([]);
    };
  }, [windowWidth, resourceType]);

  return (
    <>
      <div>Window Width: {windowWidth}</div>
      <div>
        <button
          onClick={() => setResourceType("posts")}
          className="btn btn-primary "
        >
          {" "}
          Posts
        </button>
        <button
          onClick={() => setResourceType("users")}
          className="btn btn-primary m-2"
        >
          Users
        </button>
        <button
          onClick={() => setResourceType("comments")}
          className="btn btn-primary"
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <div>{JSON.stringify(item.id)}</div>;
      })}
    </>
  );
}

export default WindowsSizeChangeFunctions;
