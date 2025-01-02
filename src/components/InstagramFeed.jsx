import React from 'react';
import InstagramPost from './InstagramPost.js';

const InstagramFeed = () => {
  const postUrls = [
    'https://www.instagram.com/parshu_18/',    
  ];

  return (
    <div className="instagram-feed">
      {postUrls.map((url, index) => (
        <InstagramPost key={index} postUrl={url} />
      ))}
    </div>
  );
};

export default InstagramFeed;
