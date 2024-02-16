import React from 'react'

export const box1Title="Try Scrolling"
export const box2Title = "BayHacks Hackathon 2024"
export const box2Body = `Join our hackathon to collaborate with like-minded student and professionals, develop a project from scratch, and showcase your skills to industry experts.

With cutting-edge tools and technologies, mentorship, prizes, and just 48 hours to create the most innovative solution, it's an adrenaline-pumping experience that could kickstart your career or startup.

Don't miss out on this exciting opportunity!`
export const box3Title="Last Year's Hackathon"
export const box3Body = (
  <iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/fEXdLheZW6k" title="Hackathon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
)
export const box4Title=""
export const box4Body = `WHO: Students, programmers, developers, and tech enthusiasts.

BUILD: Set against a tight deadline, each team must take a product from initial concept to MVP. Creative ideas and clever design are the best tools in their arsenals. Are you up for the challenge?

LEARN: ALL SKILL LEVELS WELCOME, whether your specialty is software development, product design, UI/UX, or you’re just getting started. BayHacks provides competitors great opportunities to learn, share knowledge, and display their unique skill sets.

NETWORK: Connect with Tampa’s vibrant community of software developers, entrepreneurs, students, and innovators. Meet and compete with some of the best talent from around Tampa Bay.
`

export const box5Title = "Schedule"
export const box5Body = `BayHacks 2024 will be hosted at USF Discovery Hall on February 24th-25th.`
export const btn1 = "Tickets"
export const btn2 = "Location"
export const btn3 = "Sponsors"

export const modal1 = (
  <div style={{fontSize: '1em'}}>
    <p>250 tickets for BayHacks 2024 are now available for purchase! For just $10, you can be a part of this dynamic event that includes unforgettable opportunities for collaboration, innovation, and the chance to win cash prizes. Get yours today at <a href="https://www.eventbrite.com/e/bayhacks-2024-hackathon-tickets-778750562897?aff=oddtdtcreator" target="_blank">Eventbrite</a></p>
  </div>
)
export const modal2 = (
  <>
    <p style={{fontSize: '1.4em'}}>BayHacks 2024 will be hosted at <a href="https://www.usf.edu/research-innovation/rf/research-park/research-park-facilities.aspx">USF Discovery Hall</a> on February 24th-25th.</p>
    {/* <iframe width="100%" height="470" style={{border: '0px'}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=17&center=27.9612,-82.4637&key=${process.env.REACT_ENV_KEY}"></iframe> */}
  </>
)
export const modal3 = (
  <>
    <h4>Thank You To Our Sponsors</h4>
    <p>We're deeply grateful to our sponsors for their generous support of BayHacks.</p>
    
    <img id="sponsor-image" src="/assets/sponsors.png" />

    <h5>Gold Sponsors</h5>
    <ul>
      <li>
        <a href="https://dexian.com/disys/">Dexian</a>
      </li>
      <li>
        <a href="https://www.faireconomy.com/">Fair Economy</a>
      </li>
      <li>
        <a href="https://hcfl.gov/businesses/small-business-support/resources-and-training/the-edi2-program">Hillsborough County EDi2 Program</a>
      </li>
    </ul>

    <h5>Silver Sponsors</h5>
    <ul>
      <li>
        <a href="https://www.computercoach.com/">Computer Coach</a>
      </li>
      <li>
        <a href="https://www.relativitytech.com/">Relativity Tech</a>
      </li>
    </ul>

    <h5>Bronze Sponsors</h5>
    <ul>
      <li>
        <a href="https://www.certuscore.com/">Certus Core</a>
      </li>
    </ul>
  </>
)

export const credit = (
  <div style={{fontSize: '.6em', marginBottom: '16em'}}>
    <h1 className="text-muted mt-5">Credits</h1>
    <p className="text-muted">This project was constructed with models generously published for public use. This is a list of all the source material which has made this project possible.</p>
    <ul className="text-muted mb-5">
      <li><a href="https://sketchfab.com/3d-models/pirate-viva-34f6cb31cf264b79b8f023f769057fd0" style={{color: 'rgb(158, 150, 137)'}}>Ship Model and CC license</a>. Changes made: the model was simplified and has some minor additions</li>
      <li><a href="https://sketchfab.com/3d-models/low-poly-pirate-sword-89bb2ffcd83043a29c5886d920497086" style={{color: 'rgb(158, 150, 137)'}}>Sword Model and CC license</a></li>
      <li><a href="https://sketchfab.com/3d-models/cool-styled-pirate-map-603e993445b54ed8b1474268d77836ba" style={{color: 'rgb(158, 150, 137)'}}>Map Model and CC license</a></li>
      <li><a href="https://github.com/JMBeresford/lab/blob/main/LICENSE" style={{color: 'rgb(158, 150, 137)'}}>Water and sky shaders with MIT license</a></li>
    </ul>
  </div>
)
