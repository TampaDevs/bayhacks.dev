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
export const box4Title="F.A.Q."
export const box4Body = `WHO:
Participants: Students, programmers, developers, and tech enthusiasts.

Have you ever built a startup in a weekend?

BUILD: Each team has two days to take a product from initial concept to MVP. Set against a tight deadline, creative ideas and clever design are the best tools in their arsenals. Are you up for the challenge?

LEARN: ALL SKILL LEVELS WELCOME, whether your specialty is software development, product design, UI/UX, or you’re just getting started. TADHacks provides competitors with great opportunities to learn, share knowledge, and display their unique skill sets.

NETWORK: Connect with Tampa’s vibrant community of software developers, entrepreneurs, students, and innovators. Meet and compete with some of the best technical talent from around Tampa Bay.
`

export const box5Title = "Schedule"
export const box5Body = `The event date is currently TBA. We're tentatively planning for January-February of 2024.

The event will be over a full weekend, Friday, Saturday and Sunday`
export const btn1 = "RSVP"
export const btn2 = "Location"
export const btn3 = "Prizes"

export const modal1 = (
  <div style={{fontSize: '1em'}}>
    <p>You can RSVP by filling out the form below or following this <a href="https://cdn.forms-content.sg-form.com/00ccf8ee-0d7c-11ee-bf2c-16fb11e76640" target="_blank">link</a></p>
    <iframe id="rsvp-form" width="100%" height="600px" src="https://cdn.forms-content.sg-form.com/00ccf8ee-0d7c-11ee-bf2c-16fb11e76640"/>
  </div>
)
export const modal2 = (
  <>
    <p style={{fontSize: '1.4em'}}>We're examining multiple event venues, and will share more details soon!</p>
    {/* <iframe width="100%" height="470" style={{border: '0px'}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=17&center=27.9612,-82.4637&key=${process.env.REACT_ENV_KEY}"></iframe> */}
  </>
)
export const modal3 = (
  <>
    <h4>Prizes</h4>
    <ul>
      <li>We'll have cash prizes available for first through third place, as well as scored subcategories.</li>
    </ul>
    <h4>Judge Criteria</h4>
    <p>This is a score based event. In order to achieve the highest score you will need to meet certain criteria. The list of criteria for which attendants will be judged on can be found below. The judges will be looking for whoever can fit the theme and additional criteria which will be revealed when the event starts</p>
    <ul>
      <li>
        <a href="#">Sponsor Link 1</a>
      </li>
      <li>
        <a href="#">Sponsor Link 2</a>
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
