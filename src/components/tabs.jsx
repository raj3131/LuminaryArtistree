import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ image, description }) => {
  return (
    <section className="cate">
      <div className="image-container">
        <img src={image} alt={description} />
        <div className="overlay-text">{description}</div>
      </div>
    </section>
  );
};

Tabs.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Tabs;