import HeroBanner from '../components/HeroBanner'
import CTASection from '../components/CTASection'
import usePageTitle from '../hooks/usePageTitle'
import './Rates.css'

export default function Rates() {
  usePageTitle('Rates')
  return (
    <div className="rates-page">
      <HeroBanner
        title="Transparent rates. No surprises."
        subtitle="We believe in full transparency. Check our live exchange rates below — what you see is exactly what you get."
      />

      <section className="rates-content section">
        <div className="rates-content__inner container">
          <div className="rates-grid">
            <div className="rate-table-card">
              <h3 className="rate-table-card__title">USDT Exchange Rates</h3>
              <div className="rate-table">
                <div className="rate-table__row rate-table__row--header">
                  <span>Currency Pair</span><span>Buy Rate</span><span>Sell Rate</span>
                </div>
                <div className="rate-table__row"><span>USDT → KES</span><span className="text-green">129.27</span><span>128.50</span></div>
                <div className="rate-table__row"><span>USDT → NGN</span><span className="text-green">1,580.00</span><span>1,575.00</span></div>
              </div>
              <p className="rate-table-card__note">Rates are updated every 30 seconds</p>
            </div>
            <div className="rate-table-card">
              <h3 className="rate-table-card__title">USDC Exchange Rates</h3>
              <div className="rate-table">
                <div className="rate-table__row rate-table__row--header">
                  <span>Currency Pair</span><span>Buy Rate</span><span>Sell Rate</span>
                </div>
                <div className="rate-table__row"><span>USDC → KES</span><span className="text-green">129.15</span><span>128.40</span></div>
                <div className="rate-table__row"><span>USDC → NGN</span><span className="text-green">1,578.50</span><span>1,573.00</span></div>
              </div>
              <p className="rate-table-card__note">Rates are updated every 30 seconds</p>
            </div>
          </div>

          <div className="rates-converter">
            <h3>Quick Rate Calculator</h3>
            <div className="rates-converter__card">
              <div className="rate-card__input-group">
                <input type="text" defaultValue="100" className="rate-card__input" />
                <div className="rate-card__currency">₮ USDT ▾</div>
              </div>
              <div className="rate-card__arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1BC33A" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className="rate-card__input-group">
                <input type="text" defaultValue="12,927.00" className="rate-card__input" readOnly />
                <div className="rate-card__currency">🇰🇪 KES ▾</div>
              </div>
              <p className="rate-card__rate" style={{color: '#111'}}>1 USDT = 129.27 KES</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
