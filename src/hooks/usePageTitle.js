import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    const base = 'Coinsend'
    document.title = title ? `${title} — ${base}` : `${base} — Convert Stablecoins to KES Instantly`
  }, [title])
}
