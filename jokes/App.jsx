import React from "react";
import Joke from './components/Joke'
import JokesData from "./components/JokesData";

export default function App() {
  const jokeElements = JokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
