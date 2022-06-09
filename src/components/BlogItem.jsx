function BlogItem({ joke }) {
    return (
      <div className="main-container">
        <div className="title">Phantom Quote Generator</div>
        <div className="card">
        <div className="quote">"{joke.text}"</div>
        <div className="author">--{joke.author}</div>
        </div>
      </div>
    );
  }
  
  export default BlogItem;
  