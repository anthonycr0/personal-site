import * as React from 'react';
import { Link } from 'react-router-dom';
import './Pablo.scss';

import siteContent from '../../site-content.json';
import selfieImg from '../../Images/pablo/me.jpg';
import inNOutImg from '../../Images/pablo/in-n-out.jpg';

class Pablo extends React.Component {
  public render() {
    return (
      <div className="pablo">
        <div className="background">
          <div className="album-cover" id="album-cover">
            <img className="pic1" src={selfieImg} alt="A photo of Anthony"/>
            <img className="pic2" src={inNOutImg} alt="A photo In-N-Out burger"/>
            <table className="content-table">
              <tbody>
                <tr className="large-text">
                  <td/>
                  <td>Anthony</td>
                  <td className="col-space"/>
                  <td>Roberts</td>
                </tr>
                <tr className="large-text">
                  <td>&nbsp;</td>
                </tr>
                <tr className="large-text">
                  <td/>
                  <td colSpan={3}>Software Engineer</td>
                </tr>
                <tr className="large-text">
                  <td/>
                  <td colSpan={3}>Software Engineer</td>
                </tr>
                <tr className="large-text">
                  <td/>
                  <td colSpan={3}>Software Engineer</td>
                </tr>
                <tr className="large-text">
                  <td/>
                  <td colSpan={3}>Software Engineer</td>
                </tr>
                <tr className="large-text">
                  <td>&nbsp;</td>
                </tr>
                <tr className="large-text">
                  <td/>
                  <td>About Me</td>
                  <td colSpan={2}>Links</td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}>21</td>
                  <td/>
                  <td><Link to="/pablo/projects">Projects</Link></td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}>Foodie</td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}>Photographer</td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}>Skier</td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}>Web / Mobile Dev</td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}>UX Designer</td>
                </tr>
                <tr className="small-text">
                  <td>&nbsp;</td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}>Melbourne, AUS</td>
                </tr>
                <tr className="small-text">
                  <td/>
                  <td/>
                  <td/>
                  <td><a href={siteContent.links.twitter} target="_blank">Twitter</a></td>
                </tr>
                <tr className="small-text">
                  <td colSpan={2}><Link to="/">← Home</Link></td>
                  <td/>
                  <td><a href={siteContent.links.linkedin} target="_blank">LinkedIn</a></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }

  public componentWillMount() {
    this.updateDimensions();
  }

  public componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  private updateDimensions() {
    if (document.documentElement.clientWidth >= 769) {
      const cover = document.getElementById('album-cover');
      if (cover) {
        const style = window.getComputedStyle(cover)
        const height = style.getPropertyValue('height');
        cover.style.width = height;
      }
      
    }
  }
}

export default Pablo;