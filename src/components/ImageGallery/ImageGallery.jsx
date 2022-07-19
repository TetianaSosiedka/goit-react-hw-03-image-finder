import PropTypes from 'prop-types';

import { Ul } from './ImageGallery.styled';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <Ul>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </Ul>
  );
};

ImageGallery.prototype = {
  images: PropTypes.array,
};

export default ImageGallery;
