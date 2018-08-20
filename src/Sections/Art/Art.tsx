import * as React from 'react';
import Header from '../../Shared/Header/Header';
import Artwork from './Artwork/Artwork';
import './Art.css';

export interface ArtData {
  data: ArtworkData[]
}

export interface ArtworkData {
  title: string,
  image: string
}

class Art extends React.Component {

  private art: ArtData;

  constructor(props: any) {
    super(props);
    this.art = {
      data: [
        {
          title: 'Prompt',
          image: ''
        }
      ]
    }
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
    return this.art.data.map((artwork, index) => <Artwork artworkData={artwork} key={index}/>);
  }
}

export default Art;