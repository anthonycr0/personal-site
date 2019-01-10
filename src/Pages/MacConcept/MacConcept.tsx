import * as React from 'react';
import { Link } from 'react-router-dom';
import './MacConcept.css';
import Header from '../../Shared/Header/Header';
import concept from '../../Images/macos-concept/macos-concept.png';

class MacConcept extends React.Component {
  public render() {
    return (
      <div className="mac-concept">
        <div className="mac-concept-contents">
          <Link to="/">← Home</Link>
          <Header title="macOS Concept" showIcons={false}/>
          <div className="content">
          <img className="promo-image" src={concept} alt="Concept artwork for present-day macOS"/>
            <div className="info">
              <div className="description">
                <p className="headline">Not a concept for tomorrow, but a concept for today.</p>
                <p>
                  A fresh coat of paint, clean lines, and gentle curves.
                  These are not three separate ideas. This 'concept' does not aim to rethink the Finder, or the system as a whole.
                  Instead, it offers a look at a simple visual update of today's macOS.
                </p>
                <p>Rounded corners and the elimination of borders around components aim to soften the interface whilst a drop of colour has been added in the sidebar to help give context.</p>
                <p>Files and folders are easily distinguishable by thinner tags, and the expand/collapse folder button has been removed. Instead, simply click on the folder icon to reveal or hide its contents.</p>
              </div>

              <img className="promo-image" src="/Images/macos-concept/finder-light.png" alt="A light theme for Finder"/>
              <div className="description">
                <p className="headline">A classic light theme.</p>
              </div>
              <img className="promo-image" src="/Images/macos-concept/finder-dark.png" alt="A dark theme for Finder"/>
              <div className="description">
                <p className="headline">A bold dark theme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default MacConcept;