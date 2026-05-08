import './HeroBanner.css'

export default function HeroBanner({ badge, title, subtitle, lastUpdated }) {
  return (
    <section className="hero-banner">
      <div className="hero-banner__inner container">
        {badge && (
          <span className="hero-banner__badge">{badge}</span>
        )}
        <h1 className="hero-banner__title">{title}</h1>
        {subtitle && (
          <p className="hero-banner__subtitle">{subtitle}</p>
        )}
        {lastUpdated && (
          <p className="hero-banner__date">Last Updated: {lastUpdated}</p>
        )}
      </div>
      <div className="hero-banner__gradient"></div>
    </section>
  )
}
