function BlogItem({ joke }) {
    return (
      <div className="card">
        <div className="title">Phantom Quote Generator</div>
        <div className="quote">"{joke.text}"</div>
        <div className="author">--{joke.author}</div>

      </div>
    );
  }
  
  export default BlogItem;
  