import PropTypes from 'prop-types';

import { Li } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <>
      <Li>
        <img src={webformatURL} alt={tags} loading="lazy" />
      </Li>
    </>
  );
};

ImageGalleryItem.prototype = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
