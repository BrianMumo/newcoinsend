import HeroBanner from '../components/HeroBanner'
import CTASection from '../components/CTASection'
import './Legal.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <HeroBanner title="Privacy Policy" subtitle="We take your privacy seriously. This policy outlines how we collect, use, and protect your personal information." lastUpdated="April 30, 2026" />
      <section className="legal-content section">
        <div className="legal-content__inner container">
          <div className="legal-body">
            <h2>Introduction</h2>
            <p>At Coinsend, we are committed to protecting your privacy and ensuring your personal data is handled securely and responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, mobile application, and related services.</p>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We collect information you provide directly, including your full name, email address, phone number, date of birth, government-issued ID for KYC verification, and wallet addresses.</p>
            <h3>Transaction Information</h3>
            <p>We record details of transactions made through our platform, including amounts, currencies, dates, payment methods, and transaction statuses.</p>
            <h3>Device & Usage Information</h3>
            <p>We automatically collect information about your device, browser type, IP address, operating system, and how you interact with our services.</p>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services; process transactions and send related information; verify your identity and comply with KYC/AML regulations; send you technical notices, updates, and security alerts; respond to your comments, questions, and customer service requests; and detect, investigate, and prevent fraudulent transactions and other illegal activities.</p>
            <h2>Data Sharing & Disclosure</h2>
            <p>We may share your information with payment processors and financial partners necessary to complete your transactions, regulatory authorities and law enforcement when required by law, service providers who assist in operating our platform, and in connection with a merger, acquisition, or sale of assets.</p>
            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including end-to-end encryption for data transmission, secure server infrastructure with regular security audits, two-factor authentication for account access, and regular vulnerability assessments.</p>
            <h2>Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data; opt out of marketing communications; request data portability; and withdraw consent at any time.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@coinsend.com or through the Contact Us page on our website.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
