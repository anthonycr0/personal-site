import * as React from 'react';
import { Link } from 'react-router-dom';
import './QuickMaths.css';
import Header from '../../Shared/Header/Header';

class QuickMaths extends React.Component {
  public render() {
    return (
      <div className="quick-maths">
        <div className="quick-maths-contents">
          <Link to="/">← Home</Link>
          <Header title="Quick Maths" showIcons/>
          <div className="content">
          <img className="promo-image" src="/Images/quick-maths/quick-maths-promo.png" alt="Quick Maths for iOS and Android"/>
            <div className="info">
              <div className="description">
                <p className="headline">Quick Maths is a mini calculator-come-soundboard inspired by Big Shaq's viral hit, Man's Not Hot.</p>
                <p>
                  Inspiration came whilst procrastinating final exam study (as usual). 
                  A day later most of the functionality was done and a week later the app was on the App Store.
                  The Android app followed a couple of weeks later.
                </p>  
              </div>
                <div className="badges">
                  <a className="badge" href='https://bit.ly/2plus2is4'><img alt='Download on the App Store' src='/Images/quick-maths/app-store-badge.svg'/></a>        
                  <a className="badge" href='https://bit.ly/2plus2is4A'><img alt='Get it on Google Play' src='/Images/quick-maths/play-store-badge.svg'/></a>        
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default QuickMaths;