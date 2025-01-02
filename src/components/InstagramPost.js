import React, { useState, useEffect } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Replace this with your actual access token

    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError('Could not fetch Instagram posts.');
      }
    };

    fetchInstagramPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="instagram-feed">
      {posts.map((post) => (
        <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
          {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
            <img src={post.media_url} alt="Instagram Post" />
          ) : post.media_type === 'VIDEO' ? (
            <video src={post.media_url} controls />
          ) : null}
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
