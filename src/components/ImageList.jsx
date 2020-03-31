import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
import PropTypes from "prop-types";

const ImageList = ({ images }) => {
  const imageList = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="image-list" data-test="component-image-list">
      {imageList}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageList;
