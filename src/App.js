import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("photos");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${query}`)
      .then(response => response.json())
      .then(json => setData(json));
    console.log("useEffect ran...");
  }, [query]);

  return (
    <div>
      <h1>Hooks</h1>
      <div className="container mb-3">
        <button
          className="btn btn-primary mr-3"
          onClick={() => setQuery("todos")}>
          Todos
        </button>
        <button className="btn btn-primary" onClick={() => setQuery("photos")}>
          Photos
        </button>
      </div>
      <div>
        <pre>{data && JSON.stringify(data, null, 4)}</pre>
      </div>
    </div>
  );
}
