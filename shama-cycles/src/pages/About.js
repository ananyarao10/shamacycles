import { useState, useEffect } from 'react';
import "./About.css";

const reviews = [
  { name: "Eric B", avatarLetter: "E", rating: 5, text: `Stopped in before a trip and needed a bike box — they gave me one right away, no fuss, no charge. Super helpful and kind. On top of that, the shop itself is great: excellent layout, quality gear, and a team that clearly cares. Wish more places were like this.`},
  { name: "Haley R", avatarLetter: "H", rating: 5, text: "Came in for a new bike fitting and left with much more - great advice and helpful tips. Very knowledgeable and passionate about helping (newer) cyclists like me." },
  { name: "María B", avatarLetter: "M", rating: 5, text: "Philip fit me on my Cervelho P3x last year for my Ironman. His professionalism and understanding of the bike fit is amazing! He's made me more aerodynamic, while keeping me comfortable for long distance racing. He's the only mechanic that takes care of my bike." },
  { name: "Tristan Q", avatarLetter: "T", rating: 5, text: "They specialize in race/specialty bikes. However, they really came to my rescue by making a custom crankset. For my bike now it’s as good as new. I definitely recommend if your bike is ever need of repair. Check them out! Mark was a big help!" },
  { name: "Marcelo R", avatarLetter: "M", rating: 5, text: "Great experience. Both Mark and Phillip are extremely knowledgeable. They helped me set up my bike. These guys are Pro, the bikes they maintain are all professional level bikes. Great shop, highly recommend." },
  { name: "Ryan W", avatarLetter: "R", rating: 5, text: "Amazing team and unrivaled shop! Philip, Mark and team do it all — new builds, repairs, fitting sessions and much more. I’ve done two bike fits, service and several component upgrades based on advice and guidance from the team here. " },
];

const About = ({items = reviews}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about-page">
      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">ABOUT</h1>
        <div className="hero-underline"></div>
      </div>

      <section className="our-vision-wrap">
        <div className="vision-column philosophy">
          <div className="column-inner">
            <h3 className="column-title">Our Philosophy</h3>

            <div className="card small-card">
              <div className="card-header">A Personalized Approach</div>
              <div className="card-body">
                We understand that every rider has a distinct style, taste, and set of goals. Whether you're racing, commuting, or exploring gravel roads, we take the time to understand what matters most to you.
              </div>
            </div>

            <div className="card small-card">
              <div className="card-header">Focused, Not Rushed</div>
              <div className="card-body">
                Every build and service we do is intentional. We believe that bike building and detailing should always be focused, never rushed — so that every ride feels right.
              </div>
            </div>
          </div>
        </div>

        <div className="vision-column mission">
          <div className="column-inner mission-inner">
            <h3 className="column-title">Our Mission</h3>

            <div className="mission-card">
              <p>
                Our mission is to build custom road, gravel, triathlon, and track bikes that feel good to ride, perform well, and look great — all at the same time.
              </p>
            </div>
          </div>
        </div>

        <div className="vision-column process">
          <div className="column-inner">
            <h3 className="column-title">Our Process</h3>

            <div className="card tiny-card">
              <div className="card-header">Listen &amp; Understand</div>
              <div className="card-body">
                We start with your riding goals, preferences, and budget.
              </div>
            </div>

            <div className="card tiny-card">
              <div className="card-header">Design &amp; Build</div>
              <div className="card-body">
                We source and assemble components to create a bike that matches your exact fit and riding style.
              </div>
            </div>

            <div className="card tiny-card">
              <div className="card-header">Refine &amp; Fit</div>
              <div className="card-body">
                Every build includes a precise fitting so your ride feels perfect.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meet-philip"> 
        <div className="philip-grid">
          <img className="philip-pic" src="philip_1.webp" alt=""></img>
          <img className="philip-pic" src="philip_2.webp" alt=""></img>
          <img className="philip-pic" src="philip_3.webp" alt=""></img>
          <img className="philip-pic" src="philip_4.webp" alt=""></img>
        </div>

        <div className="philip-text">
          <h1>Meet Philip Shama</h1>
          <p>
            Philip Shama loves many things. He enjoys fresh brewed coffee in the morning,
            watching Le Tour (well, actually all tours), and spending time with his family.
            But he's also one of those people lucky enough to say he really loves his job.
          </p>
          <p>
            His passion for fine detail and commitment to quality craftsmanship can be seen in
            every bike that leaves the shop. Philip believes the riding experience doesn’t stop
            when a client picks up their bike — he follows up to make sure each ride feels just right.
          </p>
          <p>
            When he's not at the shop, you can find Philip riding his bike around Houston
            or racing throughout the season.
          </p>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="testimonials-title">What our customers are saying</h2>

        <div className="testimonials-grid">
          {items.map((r, i) => (
            <article key={i} className="review-card" aria-label={`Review by ${r.name}`}>
              <header className="review-header">
                <div className="avatar">{r.avatarLetter || (r.name && r.name[0])}</div>
                <div className="review-meta">
                  <div className="review-name">{r.name}</div>
                  <div className="review-stars" aria-hidden>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} className={idx < r.rating ? "star filled" : "star"}>★</span>
                    ))}
                  </div>
                </div>
              </header>

              <p className="review-text">{r.text}</p>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
