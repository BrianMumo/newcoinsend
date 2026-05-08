import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ScrollTileRoll from '../components/ScrollTileRoll'
import CTASection from '../components/CTASection'
import usePageTitle from '../hooks/usePageTitle'
import './Home.css'

import womanPhoneImg from '../assets/images/woman-braids.png'
import appReferralImg from '../assets/images/referral-phone.png'
import unionRingsSvg from '../assets/images/union-rings.svg'
import avatar1Img from '../assets/images/avatar-1.png'
import avatar2Img from '../assets/images/avatar-2.png'
import avatar3Img from '../assets/images/avatar-3.png'


export default function Home() {
  usePageTitle(null)
  return (
    <div className="home">

      {/* ============================================
          HERO & SCROLL TILE ROLL
          ============================================ */}
      <div className="hero-ticker-group">
        <HeroSection />
        <ScrollTileRoll />
      </div>

      {/* ============================================
          SECTION 3: STATS / BANNER
          "Trusted by users, growing every minute"
          + Apple/Google buttons + 3 stat cards
          ============================================ */}
      <section className="stats-section section" id="stats">
        <div className="stats-section__inner container">
          <h2 className="stats-section__title">Trusted by users,<br/>growing every minute</h2>
          <div className="stats-section__app-download">
            <Link to="/coming-soon" className="stats-section__store-btn">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.49 4.7 9.39C5.56 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
              <div className="stats-section__store-label">
                <small>Download on the</small>
                <span>Apple Store</span>
              </div>
            </Link>
            <Link to="/coming-soon" className="stats-section__store-btn">
              <svg width="20" height="22" viewBox="0 0 24 24" fill="#34A853"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              <div className="stats-section__store-label">
                <small>GET IT ON</small>
                <span>Google Play</span>
              </div>
            </Link>
          </div>
          <div className="stats-grid">
            <div className="stat-card stat-card--light">
              <div className="stat-card__icon">
                <svg width="24" height="24" viewBox="0 0 256 256" fill="white"><path d="M198.51,56.09C186.79,35.32,163.92,24,128,24S69.21,35.32,57.49,56.09a12,12,0,0,0,0,11.82C62.61,76,72.21,82.56,84,87.37V96a12,12,0,0,0,12,12h8v20H96a12,12,0,0,0,0,24h8v12a12,12,0,0,0,24,0V152h8a12,12,0,0,0,0-24h-8V108h8a12,12,0,0,0,12-12V87.37c11.79-4.81,21.39-11.37,26.51-19.46A12,12,0,0,0,198.51,56.09ZM79.1,62C86.86,48.52,103.18,40,128,40s41.14,8.52,48.9,22C169.14,75.48,152.82,84,128,84S86.86,75.48,79.1,62Z"/></svg>
              </div>
              <h3 className="stat-card__number">+18M KES</h3>
              <p className="stat-card__label">Traded on Coinsend</p>
            </div>
            <div className="stat-card stat-card--dark">
              <div className="stat-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="8.5" height="8.5" rx="2" fill="#FF6B6B"/><rect x="13.5" y="2" width="8.5" height="8.5" rx="2" fill="#4CAF50"/><rect x="2" y="13.5" width="8.5" height="8.5" rx="2" fill="#2196F3"/><rect x="13.5" y="13.5" width="8.5" height="8.5" rx="2" fill="#FFC107"/></svg>
              </div>
              <h3 className="stat-card__number">200M+</h3>
              <p className="stat-card__label">Total Transactions</p>
            </div>
            <div className="stat-card stat-card--light">
              <div className="stat-card__flags">
                <span className="stat-card__flag-circle stat-card__flag-circle--ke" title="Kenya"></span>
                <span className="stat-card__flag-circle stat-card__flag-circle--ng" title="Nigeria"></span>
                <span className="stat-card__flag-circle stat-card__flag-circle--za" title="South Africa"></span>
              </div>
              <h3 className="stat-card__number">20,000+</h3>
              <p className="stat-card__label">Users across Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: CORE FEATURES
          "Our Core Features" with feature list + image
          ============================================ */}
      <section className="features-section section" id="features">
        <div className="features-section__inner container">
          <h2 className="features-section__title">Our Core Features</h2>
          <div className="features-grid">
            <div className="features-list">
              <div className="feature-item">
                <h3>Multi-Withdrawal Option</h3>
              </div>
              <div className="feature-item">
                <h3>Pay with Stablecoin</h3>
              </div>
              <div className="feature-item">
                <h3>Bills payment</h3>
              </div>
              <div className="feature-item feature-item--green">
                <div className="feature-item__left">
                  <h3>Rewards & Cashback</h3>
                  <p>Earn rewards and cashback every time you transact. Get more value from every payment you make.</p>
                  <Link to="/coming-soon" className="feature-item__cta">Get Started</Link>
                </div>
                <div className="feature-item__phone">
                  <img src={appReferralImg} alt="Coinsend Referral Program" className="feature-item__phone-img" />
                </div>
              </div>
            </div>
            <div className="features-image">
              <img src={womanPhoneImg} alt="Woman using Coinsend app" className="features-image__photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4.5: RATE CAL
          Figma: Rate Cal > Content (Header,Sub&CTA + Crypto Rates) + Union
          1440×614, bg #111111
          ============================================ */}
      <section className="ratecal" id="rate-cal">

        {/* Content — flex container, two columns */}
        <div className="ratecal__content container">

          {/* LEFT: Header, Sub & CTA — 481px fixed, vertical, space-between */}
          <div className="ratecal__left">
            {/* Description text */}
            <p className="ratecal__desc">
              Coinsend enables users to convert stablecoins like USDT into local currency and receive it instantly through trusted payment systems. We simplify cross-border money movement without the delays and high costs of traditional systems.
            </p>

            {/* CTA — App Download buttons */}
            <div className="ratecal__cta">
              <Link to="/coming-soon" className="ratecal__store-btn" id="ratecal-apple">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.49 4.7 9.39C5.56 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                <div className="ratecal__store-label">
                  <small>Download on the</small>
                  <span>Apple Store</span>
                </div>
              </Link>
              <Link to="/coming-soon" className="ratecal__store-btn" id="ratecal-google">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#34A853"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                <div className="ratecal__store-label">
                  <small>GET IT ON</small>
                  <span>Google Play</span>
                </div>
              </Link>
            </div>

            {/* Tile — Trusted Customers + 20K+ + avatar photos */}
            <div className="ratecal__tile">
              <p className="ratecal__tile-label">Trusted Customers across Africa</p>
              <div className="ratecal__tile-row">
                <span className="ratecal__tile-count">20K+</span>
                <div className="ratecal__avatars">
                  <img src={avatar1Img} alt="" className="ratecal__avatar" />
                  <img src={avatar2Img} alt="" className="ratecal__avatar" />
                  <img src={avatar3Img} alt="" className="ratecal__avatar" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Crypto Rates — calculator card */}
          <div className="ratecal__right">
            <div className="ratecal__card">
              {/* Inputs & Rate Value */}
              <div className="ratecal__inputs">

                {/* Input — From (USDT) */}
                <div className="ratecal__input-row">
                  <input type="text" defaultValue="1" className="ratecal__input" id="ratecal-from" />
                  <div className="ratecal__currency">
                    {/* Icon: 32×32, radius 100, #26A17C */}
                    <span className="ratecal__token ratecal__token--usdt">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0" fill="none"/><path d="M13.5 8.4V6.8h3v-2h-9v2h3v1.6C7.7 8.7 5.5 9.7 5.5 10.9s2.2 2.2 5 2.5v5.1h3v-5.1c2.8-.3 5-1.3 5-2.5S16.3 8.7 13.5 8.4zm-3 2.9c-2-.2-3.2-.8-3.2-1.4 0-.5.9-1 2.2-1.3v2.7h1zm3 .4V9c1.3.3 2.2.8 2.2 1.3 0 .6-1.2 1.2-3.2 1.4v.1h1z" fill="white"/></svg>
                    </span>
                    <span className="ratecal__currency-name">USDT</span>
                    {/* CaretDown */}
                    <svg className="ratecal__caret" width="12" height="12" viewBox="0 0 256 256" fill="#71717A"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>
                  </div>
                </div>

                {/* Icon — ArrowsDownUp (swap) */}
                <div className="ratecal__swap">
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="#F2740D"><path d="M119.39,172.94a8,8,0,0,1-1.73,8.72l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,119.39,172.94Zm94.27-98.6-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"/></svg>
                </div>

                {/* Input — To (KES) */}
                <div className="ratecal__input-row">
                  <input type="text" defaultValue="129.27" className="ratecal__input" readOnly id="ratecal-to" />
                  <div className="ratecal__currency">
                    {/* Icon: 32×32, radius 100, #1BC33A with KES text */}
                    <span className="ratecal__token ratecal__token--kes">KES</span>
                    <span className="ratecal__currency-name">KES</span>
                    {/* CaretDown */}
                    <svg className="ratecal__caret" width="12" height="12" viewBox="0 0 256 256" fill="#71717A"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>
                  </div>
                </div>

                {/* Rate Value — footer */}
                <div className="ratecal__rate-value">
                  <span className="ratecal__rate-text">1 USDT ~ 129.27 KES</span>
                  <span className="ratecal__rate-updated">Updated every 30sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Union — decorative 3D stacked coin shape */}
        <img src={unionRingsSvg} alt="" className="ratecal__union" aria-hidden="true" />
      </section>


      {/* ============================================
          SECTION 5: SPEED & TRUST
          "Built for speed. Designed for trust."
          + 6 feature icon cards in 3x2 grid
          ============================================ */}
      <section className="speed-section section" id="speed-trust">
        <div className="speed-section__inner container">
          <h2 className="speed-section__title">Built for speed.<br/>Designed for trust.</h2>
          <p className="speed-section__subtitle">At Coinsend, we offer a secure and reliable services. Rest assured that you will receive the best value from us.</p>
          <div className="speed-grid">
            {/* High Rates */}
            <div className="speed-card">
              <div className="speed-card__icon speed-card__icon--green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1BBF3A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <h3 className="speed-card__title">High Rates</h3>
              <p className="speed-card__desc">We offer competitive exchange rates designed to maximise your value, so you get more every time you convert.</p>
            </div>

            {/* Fast Withdrawal */}
            <div className="speed-card">
              <div className="speed-card__icon speed-card__icon--blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3363FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <circle cx="12" cy="12" r="2.5" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
              </div>
              <h3 className="speed-card__title">Fast Withdrawal</h3>
              <p className="speed-card__desc">Withdraw your funds instantly, whenever you need them. Fast, simple, and without unnecessary delays.</p>
            </div>

            {/* Auto Convert */}
            <div className="speed-card">
              <div className="speed-card__icon speed-card__icon--orange">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F2740D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="17 1 21 5 17 9" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <polyline points="7 23 3 19 7 15" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
              </div>
              <h3 className="speed-card__title">Auto Convert</h3>
              <p className="speed-card__desc">Automatically convert your crypto to local currency in seconds. No manual steps needed.</p>
            </div>

            {/* Instant Transaction */}
            <div className="speed-card">
              <div className="speed-card__icon speed-card__icon--yellow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#F5A623" stroke="none">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="speed-card__title">Instant Transaction</h3>
              <p className="speed-card__desc">Instantly convert stablecoins to Kenyan Shillings in minutes, whenever you need. No waiting, no time constraints.</p>
            </div>

            {/* Secure & Reliable */}
            <div className="speed-card">
              <div className="speed-card__icon speed-card__icon--green">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1BBF3A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <circle cx="12" cy="16.5" r="1.5" fill="#1BBF3A" stroke="none" />
                </svg>
              </div>
              <h3 className="speed-card__title">Secure & Reliable</h3>
              <p className="speed-card__desc">Enjoy a seamless and secure experience on our platform, where every transaction is managed with precision and care.</p>
            </div>

            {/* 24/7 Support */}
            <div className="speed-card">
              <div className="speed-card__icon speed-card__icon--blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3363FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <h3 className="speed-card__title">24/7 Support</h3>
              <p className="speed-card__desc">We pride ourselves on 24/7 availability, so you can carry out transactions anytime, any day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: TESTIMONIALS
          "Why 20,000+ customers Keep Coming Back"
          Two-row marquee: top row scrolls left, bottom row scrolls right
          Figma: 3 testimonials — James M. (Google Play), Fatuma A. (App Store), Daniel O. (Google Play)
          ============================================ */}
      <section className="testimonials-section section" id="testimonials">
        <div className="testimonials-section__inner container">
          <h2 className="testimonials-section__title">
            Why <span className="text-orange">20,000+</span> customers<br/>Keep Coming Back
          </h2>
        </div>

        {/* Row 1 — scrolls LEFT */}
        <div className="testimonials-marquee testimonials-marquee--left">
          <div className="testimonials-marquee__track">
            {[...Array(3)].map((_, dup) => (
              <div className="testimonials-marquee__group" key={dup} aria-hidden={dup > 0}>
                {/* James M. — Google Play icon */}
                <div className="testimonial-card">
                  <div className="testimonial-card__header">
                    <span className="testimonial-card__name">James M.</span>
                    <svg className="testimonial-card__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M5.2 2.4L18.2 16 5.2 29.6c-.3-.2-.5-.6-.5-1.1V3.5c0-.5.2-.9.5-1.1z" fill="#4285F4"/>
                      <path d="M22.6 12.4L18.2 16l4.4 3.6 5-2.9c.6-.3.6-1.1 0-1.4l-5-2.9z" fill="#FBBC04"/>
                      <path d="M5.2 2.4L18.2 16 22.6 12.4 7.5 1.2c-.5-.3-1.1-.3-1.6 0l-.7.4v.8z" fill="#34A853"/>
                      <path d="M5.2 29.6L18.2 16l4.4 3.6L7.5 30.8c-.5.3-1.1.3-1.6 0l-.7-.4v-.8z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <p className="testimonial-card__text">I get paid in USDT for my freelance work. Coinsend lets me convert and withdraw to M-Pesa instantly. My bank used to take 3 days for international wires.</p>
                </div>

                {/* Fatuma A. — App Store icon */}
                <div className="testimonial-card">
                  <div className="testimonial-card__header">
                    <span className="testimonial-card__name">Fatuma A.</span>
                    <svg className="testimonial-card__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="7" fill="#2196F3"/>
                      <path d="M16 7.5l-1.2 2.1-.6 1L10 18h2.4l.9-1.6h5.4l.9 1.6H22l-4.2-7.4-.6-1L16 7.5z" fill="white"/>
                      <path d="M14.1 14.8L16 11.5l1.9 3.3h-3.8z" fill="#2196F3"/>
                      <rect x="8" y="20" width="16" height="1.5" rx=".75" fill="white" opacity=".5"/>
                      <rect x="10" y="23" width="12" height="1.2" rx=".6" fill="white" opacity=".3"/>
                    </svg>
                  </div>
                  <p className="testimonial-card__text">I send money home to Kenya every month from Dubai. USDT transfer fees are almost zero compared to Western Union. Coinsend makes it reach M-Pesa in minutes.</p>
                </div>

                {/* Daniel O. — Google Play icon */}
                <div className="testimonial-card">
                  <div className="testimonial-card__header">
                    <span className="testimonial-card__name">Daniel O.</span>
                    <svg className="testimonial-card__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M5.2 2.4L18.2 16 5.2 29.6c-.3-.2-.5-.6-.5-1.1V3.5c0-.5.2-.9.5-1.1z" fill="#4285F4"/>
                      <path d="M22.6 12.4L18.2 16l4.4 3.6 5-2.9c.6-.3.6-1.1 0-1.4l-5-2.9z" fill="#FBBC04"/>
                      <path d="M5.2 2.4L18.2 16 22.6 12.4 7.5 1.2c-.5-.3-1.1-.3-1.6 0l-.7.4v.8z" fill="#34A853"/>
                      <path d="M5.2 29.6L18.2 16l4.4 3.6L7.5 30.8c-.5.3-1.1.3-1.6 0l-.7-.4v-.8z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <p className="testimonial-card__text">We pay suppliers in KES through Coinsend after receiving payments in USDT from our international clients. It has eliminated our forex headaches completely.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls RIGHT (reverse) */}
        <div className="testimonials-marquee testimonials-marquee--right">
          <div className="testimonials-marquee__track">
            {[...Array(3)].map((_, dup) => (
              <div className="testimonials-marquee__group" key={dup} aria-hidden={dup > 0}>
                {/* James M. — Google Play icon */}
                <div className="testimonial-card">
                  <div className="testimonial-card__header">
                    <span className="testimonial-card__name">James M.</span>
                    <svg className="testimonial-card__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M5.2 2.4L18.2 16 5.2 29.6c-.3-.2-.5-.6-.5-1.1V3.5c0-.5.2-.9.5-1.1z" fill="#4285F4"/>
                      <path d="M22.6 12.4L18.2 16l4.4 3.6 5-2.9c.6-.3.6-1.1 0-1.4l-5-2.9z" fill="#FBBC04"/>
                      <path d="M5.2 2.4L18.2 16 22.6 12.4 7.5 1.2c-.5-.3-1.1-.3-1.6 0l-.7.4v.8z" fill="#34A853"/>
                      <path d="M5.2 29.6L18.2 16l4.4 3.6L7.5 30.8c-.5.3-1.1.3-1.6 0l-.7-.4v-.8z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <p className="testimonial-card__text">I get paid in USDT for my freelance work. Coinsend lets me convert and withdraw to M-Pesa instantly. My bank used to take 3 days for international wires.</p>
                </div>

                {/* Fatuma A. — App Store icon */}
                <div className="testimonial-card">
                  <div className="testimonial-card__header">
                    <span className="testimonial-card__name">Fatuma A.</span>
                    <svg className="testimonial-card__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="7" fill="#2196F3"/>
                      <path d="M16 7.5l-1.2 2.1-.6 1L10 18h2.4l.9-1.6h5.4l.9 1.6H22l-4.2-7.4-.6-1L16 7.5z" fill="white"/>
                      <path d="M14.1 14.8L16 11.5l1.9 3.3h-3.8z" fill="#2196F3"/>
                      <rect x="8" y="20" width="16" height="1.5" rx=".75" fill="white" opacity=".5"/>
                      <rect x="10" y="23" width="12" height="1.2" rx=".6" fill="white" opacity=".3"/>
                    </svg>
                  </div>
                  <p className="testimonial-card__text">I send money home to Kenya every month from Dubai. USDT transfer fees are almost zero compared to Western Union. Coinsend makes it reach M-Pesa in minutes.</p>
                </div>

                {/* Daniel O. — Google Play icon */}
                <div className="testimonial-card">
                  <div className="testimonial-card__header">
                    <span className="testimonial-card__name">Daniel O.</span>
                    <svg className="testimonial-card__icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M5.2 2.4L18.2 16 5.2 29.6c-.3-.2-.5-.6-.5-1.1V3.5c0-.5.2-.9.5-1.1z" fill="#4285F4"/>
                      <path d="M22.6 12.4L18.2 16l4.4 3.6 5-2.9c.6-.3.6-1.1 0-1.4l-5-2.9z" fill="#FBBC04"/>
                      <path d="M5.2 2.4L18.2 16 22.6 12.4 7.5 1.2c-.5-.3-1.1-.3-1.6 0l-.7.4v.8z" fill="#34A853"/>
                      <path d="M5.2 29.6L18.2 16l4.4 3.6L7.5 30.8c-.5.3-1.1.3-1.6 0l-.7-.4v-.8z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <p className="testimonial-card__text">We pay suppliers in KES through Coinsend after receiving payments in USDT from our international clients. It has eliminated our forex headaches completely.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================================
          SECTION 8: CTA (Green)
          "Get started on Coinsend today"
          ============================================ */}
      <CTASection />
    </div>
  )
}
