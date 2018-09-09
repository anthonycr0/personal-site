import * as React from 'react';
import Header from '../../Shared/Header/Header';
import Artwork from './Artwork/Artwork';
import './Art.css';

import siteContent from '../../site-content.json';

export interface ArtworkData {
  title: string,
  image: string
}

class Art extends React.Component {

  private art: ArtworkData[];

  constructor(props: any) {
    super(props);
    this.art = siteContent.art;
  }

  public render() {
    return (
      <div className="art">
        <Header title="Art" showIcons={false}/>
        <div className="art-container">
          {this.renderArt()}
        </div>
      </div>
    );
  }

  private renderArt() {
    return this.art.map((artwork, index) => <Artwork artworkData={artwork} key={index}/>);
  }
}

export default Art;