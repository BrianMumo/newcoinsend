import './HeroSection.css'

import heroPhoneImg from '../assets/images/hero-phone.png'
import coinKshImg from '../assets/images/coin-ksh.png'
import coinTetherImg from '../assets/images/coin-tether-1.png'
import starBlueSvg from '../assets/images/star-blue.svg'
import starOrangeSvg from '../assets/images/star-orange.svg'
import bgWatermark from '../assets/images/bg-watermark.svg'

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Subtle background watermark */}
      <img
        src={bgWatermark}
        alt=""
        className="hero__watermark"
        aria-hidden="true"
      />

      <div className="hero__inner container">
        {/* LEFT — Text content */}
        <div className="hero__content">
          <h1 className="hero__title">
            Convert your<br />
            <span className="hero__title--orange">Stablecoins</span> to{' '}
            <span className="hero__title--green">KES</span>
            <br />
            in seconds!
          </h1>
          <p className="hero__subtitle">
            Send, receive, and spend across borders with Coinsend. We trade
            stablecoins to make your everyday payment easier and faster.
          </p>
          <a href="#" className="hero__cta" id="hero-get-started">
            Get Started
          </a>
        </div>

        {/* RIGHT — Phone mockup + floating elements */}
        <div className="hero__visual">
          {/* Decorative stars */}
          <img
            src={starOrangeSvg}
            alt=""
            className="hero__star hero__star--orange"
            aria-hidden="true"
          />
          <img
            src={starBlueSvg}
            alt=""
            className="hero__star hero__star--blue"
            aria-hidden="true"
          />

          {/* Phone */}
          <img
            src={heroPhoneImg}
            alt="Coinsend app showing wallet balance of KSh 92,768.00"
            className="hero__phone"
          />

          {/* Floating KSH coin — overlaps phone left side */}
          <img
            src={coinKshImg}
            alt=""
            className="hero__coin hero__coin--ksh"
            aria-hidden="true"
          />

          {/* Floating Tether coin — to the right of phone */}
          <img
            src={coinTetherImg}
            alt=""
            className="hero__coin hero__coin--tether"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
