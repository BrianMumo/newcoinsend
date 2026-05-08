import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import CTASection from '../components/CTASection'
import './FAQ.css'

const categories = ['General', 'Transactions & Transfers', 'Fees & Rates', 'Security & Trust']

const faqData = [
  { q: 'What is Coinsend?', a: 'Coinsend is a fintech platform that enables users to convert stablecoins like USDT and USDC into local currencies such as KES and NGN instantly. We simplify cross-border money movement through trusted payment systems.', category: 'General' },
  { q: 'How do I create an account?', a: 'Download the Coinsend app from the Apple Store or Google Play Store, then follow the simple registration process. You\'ll need to provide basic KYC information to get started.', category: 'General' },
  { q: 'What currencies does Coinsend support?', a: 'We currently support USDT and USDC as stablecoins, and KES (Kenyan Shilling) and NGN (Nigerian Naira) as local fiat currencies. We\'re actively working to add more currencies.', category: 'General' },
  { q: 'What are the fees for using Coinsend?', a: 'Coinsend offers competitive rates with transparent pricing. Our fees are clearly displayed before each transaction so you know exactly what you\'ll receive. There are no hidden charges.', category: 'Fees & Rates' },
  { q: 'How long do withdrawals take?', a: 'Withdrawals on Coinsend are processed instantly. Once confirmed, funds are sent directly to your M-Pesa, bank account, or preferred withdrawal method within seconds.', category: 'Transactions & Transfers' },
  { q: 'Is Coinsend secure?', a: 'Absolutely. We use advanced encryption, secure payment gateways, and comply with all relevant financial regulations. Your funds and personal data are protected at all times.', category: 'Security & Trust' },
  { q: 'What withdrawal methods are available?', a: 'We support multiple withdrawal methods including M-Pesa, bank transfer, and direct wallet withdrawals. You can choose the method that works best for you.', category: 'Transactions & Transfers' },
  { q: 'How does the referral program work?', a: 'Invite friends to join Coinsend and earn rewards! When your referral signs up and makes their first transaction, both of you receive cashback bonuses.', category: 'General' },
  { q: 'Can I use Coinsend for bill payments?', a: 'Yes! You can pay utility bills, purchase airtime, and buy data bundles directly from your Coinsend wallet. It\'s a convenient all-in-one financial tool.', category: 'Transactions & Transfers' },
  { q: 'How do I contact support?', a: 'Our 24/7 support team is available through the app\'s chat feature, via email at support@coinsend.com, or through our social media channels. We\'re always here to help.', category: 'Security & Trust' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('General')
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const filteredFaqs = faqData.filter(item => item.category === activeCategory)

  return (
    <div className="faq-page">
      <HeroBanner
        title="Got questions? We've got answers!"
        subtitle="Find answers to commonly asked questions about Coinsend, our services, fees, and how to get started."
      />

      <section className="faq-content section">
        <div className="faq-content__inner container">
          <div className="faq-filters" id="faq-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`faq-filter-btn ${activeCategory === cat ? 'faq-filter-btn--active' : ''}`}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                id={`faq-filter-${cat.toLowerCase().replace(/[^a-z]/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="faq-list">
            {filteredFaqs.map((item, i) => (
              <div className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`} key={i}>
                <button className="faq-item__question" onClick={() => toggle(i)} id={`faq-${i}`}>
                  <span>{item.q}</span>
                  <span className="faq-item__icon">{openIndex === i ? '−' : '+'}</span>
                </button>
                <div className="faq-item__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
