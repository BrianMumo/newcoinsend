import HeroBanner from '../components/HeroBanner'
import CTASection from '../components/CTASection'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <HeroBanner
        title="We are bridging global money to everyday life in Africa"
        subtitle="Coinsend is a fintech platform that makes it easy for anyone to convert stablecoins like USDT into local currencies instantly."
      />

      <section className="about-photos section">
        <div className="about-photos__inner container">
          <div className="about-photos__grid">
            <div className="about-photo about-photo--1">
              <div className="about-photo__placeholder">👩🏾‍💼</div>
            </div>
            <div className="about-photo about-photo--2">
              <div className="about-photo__placeholder">👨🏾‍⚕️</div>
            </div>
            <div className="about-photo about-photo--3">
              <div className="about-photo__placeholder">👩🏽‍💻</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content section">
        <div className="about-content__inner container">
          <div className="about-content__grid">
            <div className="about-content__main">
              <h2>About Coinsend</h2>
              <p>Coinsend was founded with a simple but powerful vision: to make money movement across borders as seamless as sending a text message. We recognized that millions of people in Africa face high fees, slow transfers, and limited access to the global financial system.</p>
              <p>Our platform leverages stablecoin technology — specifically USDT and USDC — to provide instant, low-cost conversions to local currencies like KES and NGN. Whether you're a freelancer receiving international payments, a business owner managing cross-border transactions, or simply sending money to family, Coinsend makes it effortless.</p>
              <p>We are committed to financial inclusion, transparency, and building tools that work for real people in real economies. Our growing community of over 20,000 users across Africa trusts Coinsend for its reliability, competitive rates, and outstanding customer support.</p>
            </div>
            <div className="about-content__sidebar">
              <div className="about-stat">
                <span className="about-stat__label">FOUNDED</span>
                <span className="about-stat__value">1994</span>
              </div>
              <div className="about-mission">
                <h3>OUR MISSION</h3>
                <p>Our mission is to make digital financial services practical and accessible for everyday life, while our vision is to build a world where money moves freely — without borders, without barriers, and without complexity.</p>
                <p>We are building infrastructure for true financial accessibility — tools that are simple, fast, and truly usable, no matter who you are or how you earn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
