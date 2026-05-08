import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import './ComingSoon.css'

export default function ComingSoon() {
  usePageTitle('App Coming Soon')
  return (
    <div className="coming-soon">
      <div className="coming-soon__bg">
        <div className="coming-soon__circle coming-soon__circle--1" />
        <div className="coming-soon__circle coming-soon__circle--2" />
        <div className="coming-soon__circle coming-soon__circle--3" />
      </div>

      <div className="coming-soon__content container">
        <div className="coming-soon__icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" rx="16" fill="#1BC33A" fillOpacity="0.1" />
            <path d="M32 16C23.164 16 16 23.164 16 32C16 40.836 23.164 48 32 48C40.836 48 48 40.836 48 32C48 23.164 40.836 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z" fill="#1BC33A"/>
            <path d="M33 25H31V33.414L35.293 37.707L36.707 36.293L33 32.586V25Z" fill="#1BC33A"/>
          </svg>
        </div>

        <span className="coming-soon__badge">Coming Soon</span>

        <h1 className="coming-soon__title">
          We're building something <span className="coming-soon__title--green">amazing</span>
        </h1>

        <p className="coming-soon__subtitle">
          The Coinsend mobile app is currently under development. 
          We're working hard to bring you the best stablecoin-to-fiat 
          experience on iOS and Android.
        </p>

        <div className="coming-soon__features">
          <div className="coming-soon__feature">
            <div className="coming-soon__feature-icon">📱</div>
            <div>
              <h3>iOS & Android</h3>
              <p>Native apps for both platforms</p>
            </div>
          </div>
          <div className="coming-soon__feature">
            <div className="coming-soon__feature-icon">⚡</div>
            <div>
              <h3>Instant Conversions</h3>
              <p>Convert USDT to KES in seconds</p>
            </div>
          </div>
          <div className="coming-soon__feature">
            <div className="coming-soon__feature-icon">🔒</div>
            <div>
              <h3>Bank-Grade Security</h3>
              <p>Your funds are always protected</p>
            </div>
          </div>
        </div>

        <div className="coming-soon__actions">
          <Link to="/" className="coming-soon__btn coming-soon__btn--primary">
            Back to Home
          </Link>
          <Link to="/contact" className="coming-soon__btn coming-soon__btn--secondary">
            Get Notified
          </Link>
        </div>
      </div>
    </div>
  )
}
