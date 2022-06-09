function BlogItem({ joke, geta }) {
    return (
      <div className="main-container">
        <div className="title">Phantom Quote Generator</div>
        <div className="card">
        <div className="quote">"{joke.text}"</div>
        <div className="author">--{joke.author}</div>
        </div>
        <button onClick={geta}> get a quote</button>
      </div>
    );
  }
  
  export default BlogItem;
  