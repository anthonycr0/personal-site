import * as React from 'react';
import { Link } from 'react-router-dom';
import './StreameeDetail.scss';

import Header from '../../Shared/Header/Header';
import streameeHeaderImg from '../../Images/streamee/streamee-header.png';
import appleTVChannelsImg from '../../Images/streamee/apple-tv-channels.png';
import appleTVGuideImg from '../../Images/streamee/apple-tv-guide.png';
import iOSIsometricImg from '../../Images/streamee/ios-isometric.png';
import websiteOriginalImg from '../../Images/streamee/website-original.png';
import websiteDesignsImg from '../../Images/streamee/website-designs.png';

class StreameeDetail extends React.Component {
  public render() {
    return (
      <div className="streamee-detail">
        <div className="streamee-detail-contents">
          <Link to="/">← Home</Link>
          <Header title="Streamee" showIcons={false}/>
          <div className="content">
          <img className="promo-image" src={streameeHeaderImg} alt="Streamee, a TV experiement"/>
            <div className="info">
              <div className="description">
                <p className="headline">Australia's first online, live TV platform.</p>
                <p>
                  Beginning in late 2015 as a distraction from studying for exams, Streamee was a look into what I thought was the immediate future of television.
                </p>
                <p>
                  Inspired by a sporadic TV antenna that made watching anything a nightmare, I started exploring whether any networks were streaming their channels online.
                  One of them had just started. I hacked together an Apple TV app with somewhat of a vision in my head.
                </p>
              </div>

              <img className="promo-image" src={appleTVChannelsImg} alt="The 'Channels' view in the Streamee Apple TV app, featuring a grid of TV channels"/>
              <div className="description">
                <p>
                  Initially, Seven was the only network streaming their channels online, but I knew as more networks began to follow I would need a TV guide.
                  So, next came the guide. The app would fetch an XML feed for each channel once a day, transforming and storing it within the app to speed up subsequent launches.
                  The first launch took about 20 seconds. However, it was at this point that I realised how useful Streamee was.
                  We started using it at home full time for the channels that it supported whenever the antenna was playing up, which was more often than not at this point.
                </p>
              </div>
              
              <img className="promo-image" src={appleTVGuideImg} alt="The 'Guide' view in the Streamee Apple TV app, featuring a table of TV channels and the shows on now, next, and later"/>
              <div className="description">
                <p>
                  Early in 2016 I wanted to build Streamee for real, and bring TV to every screen in Australia.
                  At the time, streaming TV on mobile devices did not yet exist in Australia, let alone most of the world.
                  I wrote a business case and built an iOS version of the app, sharing much of the code with the tvOS app I had built prior.
                  I emailed and called Australian TV networks, and even had meetings with a couple but most didn’t want anything to do with me. (I called one network 11 times before speaking to a real person).
                </p>
              </div>

              <img className="promo-image" src={iOSIsometricImg} alt="The Streamee iPhone app"/>
              <div className="description">
                <p>
                  I pushed forward regardless, and with the news that more of the networks would soon be streaming online I decided to release Streamee on the App Store.
                  Except, for anyone who has ever tried to release something on the App Store, you would know it wouldn’t be that easy.
                  It didn’t get past App Review. Turns out I needed a “license” to stream content that I didn’t own. Interesting.
                </p>

                <p>
                  So, how do you get a service out there without an app? Turns out a website is a good place to start.
                  In late 2016 I built <a href="http://streamee.com.au/?test" className="underline">streamee.com.au</a>, a fully web-based version of the original Streamee app.
                  But this would require a few changes to how it worked. For example, the guide.
                  I couldn’t expect people to wait around for 20 seconds+ for the guide to load, and storing 14+ channels worth of guide data wasn’t really an option, not to mention the load this would place on the community-hosted guide data I was consuming.
                  So I built a “backend”. This consisted of a Python script that would fetch all the guide data for each state for that day, transform it to a more readable format, and upload it as a JSON file to an AWS S3 bucket.
                  The script would run shortly after midnight each day on the Mac mini in our living room. Talk about a hack.
                  But now, whenever someone wanted to visit the site, it would simply fetch one JSON file that I was in control of, and that made it a lot nicer to work with.
                </p>
              </div>

              <img className="promo-image" src={websiteOriginalImg} alt="The original Streamee website"/>
              <div className="description">
                <p>
                  It was around this point that I heard Freeview were readying to launch their mobile app, which by the sounds of it, was Streamee but with more ads.
                  So, one week before the Freeview FV app was released, I launched the first version of the site, an incredibly basic static site that had no interface design thought put into it in any way (I mean just look at the background colour).
                  And I mean basic - just a bit of HTML, CSS, and jQuery. Yep, jQuery (look it did the job).
                </p>

                <p>
                  As SBS started streaming I added their channels to the site, and now all that was left was ABC and a couple of Ten’s sub-channels.
                  But something wasn’t right. I looked at the site and thought to myself “who on Earth designed this?!”.
                  It was just straight up ugly, and that random gradient background was just…bad.
                  So, we’re now in early 2017, I’m in my final year of university and I start to really get into interface design, or at least care for it enough to design something before building it — and that was the start of the rebuild. 
                </p>

                <p>
                  I opened up Sketch, and asked myself how Streamee should work on a phone, a tablet, and a larger computer screen, and did not start building anything until I was happy with the prototype.
                  What do people care about when they want to watch TV? What information should be immediately visible and what can be hidden?
                  What do people not care about? 
                </p>

                <p>
                  What I came up with was pretty simple, and after gathering some feedback from family members I decided on what would go on to be the final public version of Streamee.
                  A responsive view that would feature a two-column layout on large screens, with the guide receding below the video player for tablets and phones.
                  The guide wouldn’t just tell you what was on now, but also what was coming up next. And of course a colour scheme that wouldn’t burn your retinas.
                  Simple and elegant, a design I’m still proud of to this day.
                </p>
              </div>

              <img className="promo-image" src={websiteDesignsImg} alt="The final designs for the Streamee website"/>
              <div className="description">
                <p>
                  And so I rebuilt the site based on the new design. I was finally able to add ABC’s channels in and that was it.
                  All 18 free-to-air TV channels available live, on any device with no accounts or downloads, all free of charge.
                  Oh and for fun, I challenged myself to build a fully-functioning Android app in 24 hours for a mobile apps lab at university.
                  I don’t think my tutor was quite expecting this when he said “build anything you like”. I did a little bit of marketing and soon Streamee had a few thousand users.
                  I think the networks found out at this point so you can imagine what came next.
                  Two Cease and Desists, a nicely worded “please stop” email, and a domain-block from Freeview so I could no longer get a token(!) to stream ABC. 
                </p>

                <p>
                  For a couple of months Streamee was the future of free-to-air TV.
                  In 2019, two years later, Freeview launched a web-based service that, in most cases, redirects users to the individual network’s sites to consume content.
                </p>

                <p>
                  Streamee was the first thing I ever built and the first thing I ever designed. And it was an incredible journey.
                </p>
              </div>
              <div className="description">
                <p><a href="http://streamee.com.au/?test" className="underline">Visit Streamee →</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default StreameeDetail;