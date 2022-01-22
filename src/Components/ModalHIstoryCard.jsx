

import React from 'react';
import { Media } from 'reactstrap';

const ModalHIstoryCard = ({ histories }) => {
  return (
    <div>
      {histories.map(({ title, description, image }, idx) => (
        <Media className="mt-3 mb-3" key={idx}>
          <Media left top href="#">
            <Media object data-src={image} alt="Generic placeholder image" />
          </Media>
          <Media className="ml-4" body>
            <Media heading>
              {title}
          </Media>
          {description}
        </Media>
        </Media>
      ))}
    </div>
  );
};

export default ModalHIstoryCard;