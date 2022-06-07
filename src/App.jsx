import { useState, useEffect } from 'react';
import './App.css';
import BlogItem from "./components/BlogItem"

function App() {
  const [blogs, setBlogs] = useState([])
  const options = {
    method: 'GET',
    headers: {
      // 'X-User-Agent': 'desktop',
      // 'X-Proxy-Location': 'EU',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      'X-RapidAPI-Key': '0365729f63msha04ad92a6eef408p18126cjsn8da0f1f3166c'
    }
  };
  
const fetchData = () =>{
  fetch('https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk', options)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    setBlogs(data)

  })
  .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
  {blogs.length > 0 && (
    blogs.map((blog) => (
      <BlogItem blog={blog.results} key={blog.ts}/>
    ))
  )}
  </>
  )
}

export default App
