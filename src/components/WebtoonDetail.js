import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WebtoonDetail = () => {
  const { id } = useParams(); // Get the webtoon ID from the URL
  const [webtoon, setWebtoon] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch webtoon details from the API
    fetch(`http://localhost:5000/api/webtoon/${id}`)
      .then(response => response.json())
      .then(data => setWebtoon(data))
      .catch(err => {
        console.error(err);
        setWebtoon(null);
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment(""); // Reset the input field
    }
  };

  if (!webtoon) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{webtoon.title}</h1>
      <img 
        src={webtoon.image} 
        alt={webtoon.title} 
        style={{ 
          maxWidth: '95%',     // Set max width to 95% of the container for a larger image
          maxHeight: '75vh',   // Set max height to 75% of the viewport height for a bigger size
          objectFit: 'contain', // Ensure the image fits without being cropped
          display: 'block',    // Center the image
          margin: '0 auto'     // Center the image horizontally
        }} 
      />
      <p><strong>Author:</strong> {webtoon.author}</p>
      <p><strong>Genre:</strong> {webtoon.genre}</p>
      <p><strong>Release Date:</strong> {webtoon.releaseDate}</p>
      <h2>Description</h2>
      <p>{webtoon.detailedDescription}</p>

      {/* Comments Section */}
      <h3>User Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment..."
          style={{ width: '100%', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <p key={index} style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default WebtoonDetail;
