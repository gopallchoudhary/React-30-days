import React, { useEffect, useState } from "react";
import "./App.css";
function Six() {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    setJoke("")
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);
  return (
    <div>
      <h1>{joke.setup}</h1>
      <h1>{joke.punchline}</h1>
      {console.log(joke)}
    </div>
  );
}

export default Six;
