import { useState, useEffect } from "react";
import BlogItems from "./components/BlogItem";
import './App.css'


export default function App() {
  const [joke, setJoke] = useState([]);


  const fetchData = async () => {
    const getData = await fetch('https://goquotes-api.herokuapp.com/api/v1/all/quotes');
    const data = await getData.json();
    console.log(data);
    var quote = data.quotes;
    let randomQuote = quote[Math.floor(Math.random()*quote.length)];
    setJoke(randomQuote);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <BlogItems joke={joke}/>
    </div>
  );
}
