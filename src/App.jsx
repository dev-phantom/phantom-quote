import { useState, useEffect } from "react";
import BlogItems from "./components/BlogItem";
import './App.css';
import Loader from "./components/Loader";


export default function App() {
  const [isPending, setIsPending] = useState(true);
  const [joke, setJoke] = useState([]);

let quote, randomQuote;

  const fetchData = async () => {
    const getData = await fetch('https://goquotes-api.herokuapp.com/api/v1/all/quotes');
    const data = await getData.json();
    quote = data.quotes;
    randomQuote = quote[Math.floor(Math.random()*quote.length)];
    setJoke(randomQuote);
  }

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsPending(false);
    }, 5000);
    setInterval(() => {
      fetchData()
    }, 30000);
  }, []);

  return (
    <div className="App">
      {isPending && (
        <div>
          <Loader />
        </div>
      )}
      <BlogItems joke={joke}/>

    </div>
  );
}
