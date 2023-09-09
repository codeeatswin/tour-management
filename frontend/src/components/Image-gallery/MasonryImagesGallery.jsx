import React from 'react';
import galleryImgs from './galleryImages';
import Mansonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Mansonry gutter='1rem'>
        {galleryImgs.map((item, idx) => (
          <img
            className='masonry__img'
            src={item}
            key={idx}
            alt=''
            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
          />
        ))}
      </Mansonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
