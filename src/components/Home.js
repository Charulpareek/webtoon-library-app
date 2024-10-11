import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const webtoons = [
    {
      id: 1,
      title: "Lore Olympus",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728662223/1_uxdzbf.jpg", // Lore Olympus
      description: "A modern retelling of Hades and Persephone."
    },
    {
      id: 2,
      title: "Tower of God",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663004/tower_tjtils.jpg", // Tower of God
      description: "Follow the journey of Bam as he climbs the Tower."
    },
    {
      id: 3,
      title: "My Dear Cold-Blooded King",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663021/3_rsnz0k.jpg", // My Dear Cold-Blooded King
      description: "A tale of love and intrigue in a dark fantasy world."
    },
    {
      id: 4,
      title: "I Love Yoo",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663037/4_zjuu6f.jpg", // I Love Yoo
      description: "A romance that defies expectations and explores family ties."
    },
    {
      id: 5,
      title: "True Beauty",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663050/5_c9brnv.jpg", // True Beauty
      description: "A story of a girl who transforms herself into a beauty."
    },
    {
      id: 6,
      title: "Let's Play",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663071/6_op5pmb.jpg", // Let's Play
      description: "A game developer navigates life, love, and her passion."
    },
    {
      id: 7,
      title: "Age Matters",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663083/7_gh0muw.jpg", // Age Matters
      description: "A story about age, love, and the struggles of adulthood."
    },
    {
      id: 8,
      title: "Siren's Lament",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663095/8_ykxofc.jpg", // Siren's Lament
      description: "A tale of love and danger among the sirens."
    },
    {
      id: 9,
      title: "The Remarried Empress",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663109/9_i7w4u8.jpg", // The Remarried Empress
      description: "A queen's struggles to find happiness after betrayal."
    },
    {
      id: 10,
      title: "Let's Fight Ghost",
      thumbnail: "https://res.cloudinary.com/dd0o9sf5m/image/upload/v1728663126/10_wkyqsr.jpg", // Let's Fight Ghost
      description: "A young man battles spirits while discovering love."
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Popular Webtoons</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {webtoons.map((webtoon) => (
          <div
            key={webtoon.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '200px',
              textAlign: 'center',
              backgroundColor: '#fff', // Optional: add a background color
              borderRadius: '8px', // Optional: add rounded corners
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: add shadow for depth
            }}
          >
            <img
              src={webtoon.thumbnail}
              alt={webtoon.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }} // Maintain size
            />
            <h3>{webtoon.title}</h3>
            <p style={{
              fontSize: '14px', // Adjust font size
              color: '#555', // Adjust text color
              margin: '5px 0', // Add margin for spacing
              lineHeight: '1.4' // Adjust line height for better readability
            }}>
              {webtoon.description}
            </p>
            <Link to={`/webtoon/${webtoon.id}`} style={{ textDecoration: 'none', color: '#007BFF' }}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
