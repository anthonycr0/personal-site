import * as React from 'react';
import './Artwork.css';

import { ArtworkData } from '../Art';

export interface Props {
  artworkData: ArtworkData,
}

function Artwork({artworkData}: Props) {

  return (
    <div className="artwork">
      <div className="artwork-image">
        <img src={artworkData.image} alt={artworkData.title}/>
      </div>
      
      <div className="artwork-title-container">
        <h1 className="artwork-title">{artworkData.title}</h1>
      </div>
    </div>
  );
}

export default Artwork;