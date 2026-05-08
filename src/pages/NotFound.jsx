import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import './NotFound.css'

export default function NotFound() {
  usePageTitle('Page Not Found')
  
  return (
    <div className="not-found">
      <div className="not-found__inner container">
        <h1 className="not-found__code">404</h1>
        <h2 className="not-found__title">Page not found</h2>
        <p className="not-found__desc">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/" className="not-found__cta">
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
