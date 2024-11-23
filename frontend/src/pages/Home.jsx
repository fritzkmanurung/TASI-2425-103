import React, { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/example")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center">Welcome to MyApp!</h1>
      <p className="text-center mt-4 text-gray-700">{message}</p>
    </div>
  );
};

export default Home;
