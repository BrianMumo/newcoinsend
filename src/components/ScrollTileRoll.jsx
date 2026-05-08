import './ScrollTileRoll.css'

const items = [
  'INSTANT TRANSACTION',
  'MULTI-CURRENCY WALLET',
  'PAY BILLS',
  'HIGH RATES',
  '24/7 SUPPORT',
  'REWARDS',
  'INSTANT WITHDRAWAL',
]

export default function ScrollTileRoll() {
  const renderItems = () =>
    items.map((item, i) => (
      <span key={i} className="scroll-roll__item">
        {item}
        <span className="scroll-roll__dot" aria-hidden="true"></span>
      </span>
    ))

  return (
    <div className="scroll-roll" aria-hidden="true">
      {/* Dark bar — top layer, steeper clockwise rotation */}
      <div className="scroll-roll__bar scroll-roll__bar--dark">
        <div className="scroll-roll__track scroll-roll__track--forward">
          {renderItems()}
          {renderItems()}
          {renderItems()}
        </div>
      </div>

      {/* Orange bar — bottom layer, slight counter-clockwise rotation */}
      <div className="scroll-roll__bar scroll-roll__bar--orange">
        <div className="scroll-roll__track scroll-roll__track--reverse">
          {renderItems()}
          {renderItems()}
          {renderItems()}
        </div>
      </div>
    </div>
  )
}
