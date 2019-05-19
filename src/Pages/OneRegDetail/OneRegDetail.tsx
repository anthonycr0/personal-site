import * as React from 'react';
import { Link } from 'react-router-dom';
import './OneRegDetail.scss';

import Header from '../../Shared/Header/Header';

class OneRegDetail extends React.Component {
  public render() {
    return (
      <div className="onereg-detail">
        <div className="onereg-detail-contents">
          <Link to="/">← Home</Link>
          <Header title="AusPost Registration" showIcons={false}/>
          <div className="content">
          <iframe className="promo-video" src="https://www.youtube-nocookie.com/embed/JXvYLWzSWpU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            <div className="info">
              <div className="description">
                <p className="headline">A whole new way to sign up.</p>
                <p>
                  After building the <a href="https://auspost.com.au/auth/invite" target="_blank">new AusPost registration app</a>, a complete rethink of how customers create an account, we needed a bold way to announce and reveal the new customer journey.
                </p>
                <p>
                  Inspired by similar perspective and 3D-esque interface reveal videos (such as those by Apple), I wanted to give it a go myself.
                  Created entirely in Adobe After Effects having never used the software before, I worked on this reveal video for over 6 weeks, usually at night after work.
                  My deadline was our end-of-year showcase in mid-December, 2018.
                </p>
                <p>
                  The bulk of the work was recreating each interface element directly in After Effects.
                  As you can imagine, this was not a simple task as After Effects is not a prototyping application.
                  Less than a week before the showcase, I added the multiple 3D cameras used to provide the different camera angles seen in the video.
                  The music had to be epic too, in this case a shortened version of The Reveal by David Bruggemann.
                </p>
                <p>
                  Making the video was certainly a challenge, more time-consuming than I had originally imagined, but an achievable one nonetheless. The video was very well received both internally and externally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default OneRegDetail;