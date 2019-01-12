import * as React from 'react';
import { Link } from 'react-router-dom';
import './QuickMaths.scss';

import Header from '../../Shared/Header/Header';
import quickMathsPromoImg from '../../Images/quick-maths/quick-maths-promo.png';
import appStoreBadge from '../../Images/quick-maths/app-store-badge.svg';
import playStoreBadge from '../../Images/quick-maths/play-store-badge.svg';

class QuickMaths extends React.Component {
  public render() {
    return (
      <div className="quick-maths">
        <div className="quick-maths-contents">
          <Link to="/">← Home</Link>
          <Header title="Quick Maths" showIcons={false}/>
          <div className="content">
          <img className="promo-image" src={quickMathsPromoImg} alt="Quick Maths for iOS and Android"/>
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
                  <a className="badge" href='https://bit.ly/2plus2is4'><img alt='Download on the App Store' src={appStoreBadge}/></a>        
                  <a className="badge" href='https://bit.ly/2plus2is4A'><img alt='Get it on Google Play' src={playStoreBadge}/></a>        
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default QuickMaths;